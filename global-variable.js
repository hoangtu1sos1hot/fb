var noClickMode = false;
var debugMode = false;
var hideCSSMode = true;
//Phải check các biến trên trước khi xuất bản cho người dùng


var kbdp_link = "https://www.facebook.com/friends/suggestions?actions=kbdp";
var kbdp_link_2 = "https://www.facebook.com/friends/suggestions?actions=kbdp";

if(location.href.indexOf("/friends?actions=kbdp") > -1){
	location.href = kbdp_link;
}


//PUBLIC FUNCTIONS & VARIABLE
const add_button_selector = 'div[aria-label*="Kết bạn với"][tabindex="0"]:not([aria-disabled="true"])';

/** CÁC BIẾN TASK ĐIỀU KHIỂN HOẠT ĐỘNG INTERVAL & TIMEOUT **/
var startCountDownTask, loadMoreTask, syncCountTask, addFriendTask, scanAvailableFriendTask;



//SELECTOR define Start !
function combineLine_and_save(variable) {
    // Xử lý dồn về 1 hàng, chỉ gọi khi text có nhiều hàng
    variable = variable.replace(/[\n\t]+/g, ' ') // Thay thế các ký tự xuống dòng và tab bằng khoảng trắng
                       .replace(/\s+/g, ' ') // Thay thế nhiều khoảng trắng thành một khoảng trắng
                       .trim(); // Loại bỏ khoảng trắng ở đầu và cuối
    return variable; // Trả về kết quả
}

var SELECTOR = {
	LeftPanel : '[aria-label^="Gợi ý"][role="navigation"]',
	RightPanel : '[aria-label^="Gợi ý"][role="main"]',
	ScannedFriend : ".kbdp-scanned-friend",
	InLeftPanel : {},
	InRightPanel : {},
	NotPanel : {}
}
//LEFT PANEL Selectors
SELECTOR.InLeftPanel.AddButton = `
	${SELECTOR.LeftPanel} div[aria-label^="Kết bạn"]:not([aria-disabled="true"]):not(${SELECTOR.ScannedFriend}),
	${SELECTOR.LeftPanel} div[aria-label^="Thêm bạn"]:not([aria-disabled="true"]):not(${SELECTOR.ScannedFriend})
`;
combineLine_and_save(SELECTOR.InLeftPanel.AddButton);//Để cho dễ sửa, Xử lý dồn về 1 hàng, chỉ gọi khi text có nhiều hàng

SELECTOR.InLeftPanel.RemoveButton = `
	${SELECTOR.LeftPanel} div[aria-label^="Xóa"][role="button"]:not([aria-disabled="true"]),
	${SELECTOR.LeftPanel} div[aria-label^="Gỡ"][role="button"]:not([aria-disabled="true"])
`;
combineLine_and_save(SELECTOR.InLeftPanel.RemoveButton);//Để cho dễ sửa, Xử lý dồn về 1 hàng, chỉ gọi khi text có nhiều hàng


//RIGHT PANEL Selectors
SELECTOR.InRightPanel.FriendName = `${SELECTOR.RightPanel} h1`;
SELECTOR.InRightPanel.IntroTitle = `${SELECTOR.RightPanel} h2`;

//NOT PANEL Selectos
SELECTOR.NotPanel.AddButton = `
	div[aria-label^="Kết bạn"]:not([aria-disabled="true"]):not(${SELECTOR.ScannedFriend}),
	div[aria-label^="Thêm bạn"]:not([aria-disabled="true"]):not(${SELECTOR.ScannedFriend})
`;
combineLine_and_save(SELECTOR.NotPanel.AddButton);//Để cho dễ sửa, Xử lý dồn về 1 hàng, chỉ gọi khi text có nhiều hàng

SELECTOR.NotPanel.RemoveButton = `
	div[aria-label^="Xóa"][role="button"]:not([aria-disabled="true"]),
	div[aria-label^="Gỡ"][role="button"]:not([aria-disabled="true"])
`;
combineLine_and_save(SELECTOR.NotPanel.RemoveButton);//Để cho dễ sửa, Xử lý dồn về 1 hàng, chỉ gọi khi text có nhiều hàng


let friendsInReview;

var timeoutWaitTask = 15000; //Timeout task when into friend

//Scan Config
var configList;//Lưu config từ settings value

var placeList;//Placelist user config từ các checkbox lựa chọn
var otherPlaceText_g;//Placelist tăng cường
var placeListAll;//Gộp 2 placelist lại để sử dụng chung

var genderList = []; /** Trường hợp không xác định được chưa tính **/
var RemoveFriendList = ''; /** Lưu danh sách bạn không hợp lệ để xóa **/
var chooseSpeed = 2000; /** Load friend speed  | default = 3000 **/
var addSpeed = 2000;
var removeSpeed = 0;
var syncSpeed = 10000;
var kbdp_enabled;
var refreshMin  = 5;
var speedShowNotice = 30000;
var showNoticeDuring = 10000;
var delayToNextFriend = 2000;
var abortDialogTask;//Tự click đóng dialog

/** Cơ chế thông báo theo version, theo số cấp :
 * Tool chỉ hiện thông báo update có khác biệt phiên bản ở 3 phần tử version đầu, từ x.y.xx.yy thì xx.yy là các bản update fix lỗi nhỏ ko dc tính

 *  x.0 : BIG Update
 *  x.x : Thêm tính năng sau BIG UPDATE
 *  x.x.x : Các bản fix và update thông thường (có popup) - KHÔNG ĐƯỢC ĐÁNH DẠNG V6.1.0 MÀ ĐÁNH V6.1
 *  x.x.x.x : Các bản hot fix & khẩn cấp (không thông báo popup)
 */

//** v4.6.0.2 */
var eventData_s;
var recheckSentSpeed_s = 8; // 8 second default


var timeoutFriendLoad = 10000;/** Thời gian chờ load tối đa của friends **/

const male_Gender_text = [" anh ấy "," he "];
const female_Gender_text = [" cô ấy "," she "];
const friend_confirm_text = "Xác nhận";
const friend_add_text = ["Thêm bạn bè","Add friend"];

const varname_SyncDate = 'HiTOOL_LastUpdateDay';//có vẻ đã bỏ rồi
const varname_SyncCountAdded = 'HiTOOL_Count_Added_Today'
const varname_UserPlaceList = 'HiTOOL_UserPlaceList';
const varname_UserPlaceListOther = 'HiTOOL_UserPlaceListOther';
const varname_UserGenderSelect = 'HiTOOL_UserGenderSelect';
const varname_KBDP_Enabled = 'HiTOOL_KBDP_Enabled';
const varname_KBDP_AddLimitByDay = 'HiTOOL_KBDP_AddLimitByDay';
const varname_BlacklistName = 'HiTOOL_KBDP_BlacklistName';


var listNameBlackList = [];//Tính năng từ khoá loại trừ, đang tạm ẩn
var noUndefined = "Không tìm thấy"; /** Để trên đây để tránh lỗi **/

var versionNoticeReaded;
var eventList = null;//Lấy event code từ server
// var KetBanThanhCong=0,KetBanThatBai=0;
