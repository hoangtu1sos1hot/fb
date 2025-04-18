/***
 * Tính năng dự kiến :
 * Dự đoán nick ảo
 * Lịch chạy giãn cách
 * Đưa setting + event lên cloud
 * Vô Hạn Email Miễn Phí 
 * Giả lập xem bài rồi mới kết bạn, lướt đủ thứ
 * Tính năng chọn tất cả tỉnh thành
 * 
 * 
 * 
 */

var versionNotice = `
<ul style='color:gray'>

// Mở quyền sử dụng tất cả các tính năng
function isProUser() {
    return true; // Bỏ giới hạn "Pro User"
}

// Hiển thị thông báo khi đạt giới hạn chạy hàng ngày
function checkDailyLimit(currentCount, dailyLimit) {
    if (currentCount >= dailyLimit) {
        alert("Bạn đã đạt giới hạn chạy hàng ngày. Vui lòng reset để tiếp tục.");
        return false;
    }
    return true;
}

// Giữ lại các dòng debug quan trọng
function debug(message, data = null) {
    console.log("[DEBUG]: " + message, data);
}

// Xử lý logic kiểm tra ngưỡng và giá trị hợp lệ
function isValidThreshold(value, minThreshold, maxThreshold) {
    if (value < minThreshold || value > maxThreshold) {
        debug("Giá trị không hợp lệ. Giá trị phải nằm trong khoảng từ " + minThreshold + " đến " + maxThreshold + ".", value);
        return false;
    }
    return true;
}

// Tăng thời gian chờ giữa các thao tác tự động
function randomDelay(min = 120000, max = 180000) { // 2-3 phút
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Thực hiện thao tác tự động kết bạn
function autoAddFriend(addButtonElement) {
    let delayTime = randomDelay();
    debug("Đang giãn cách thao tác kết bạn: " + delayTime / 1000 + " giây.");
    setTimeout(() => {
        addButtonElement.click();
        debug("Thao tác kết bạn đã được thực hiện.");
    }, delayTime);
}

// Thực hiện thao tác tự động hủy kết bạn
function autoRemoveFriend(removeButtonElement) {
    let delayTime = randomDelay();
    debug("Đang giãn cách thao tác hủy kết bạn: " + delayTime / 1000 + " giây.");
    setTimeout(() => {
        removeButtonElement.click();
        debug("Thao tác hủy kết bạn đã được thực hiện.");
    }, delayTime);
}

/** Global icon, except for the friend request page **/

    nameElement = this.srcElement.querySelector('span') || this.srcElement.querySelector('h1');
    this.name = nameElement.innerText.trim();

    // Handle exception names with (sub-name)
    let indexOf = this.name.indexOf("(");
    this.name = this.name.substring(0, (indexOf -1) ? this.name.length : indexOf).trim();

    debug("Successfully initialized Object", friendsInReview);
}

					// Define randomDelay function
function randomDelay() {
    const minDelay = 65000; // 65 seconds
    const maxDelay = 180000; //  seconds
    return Math.floor(Math.random() (Delay - minDelay 1)) + minDelay;
}			
			this.srcElement.class.add(SELECTOR.ScannedFriend(1)); // Mark first remove . or #
			this.addButton.classList.add("kbdp-add-button-processing"); // DO NOT DELETE, class: not successful! Mark to distinguish scanned buttons from rollback buttons
		},
		ClickForOpenFriend : function() {
			this.ScrollThisElement();
			this.srcElement.classList.add("CheckingItem");
			randomClick(this.srcElement.querySelector('a'), randomDelay()); // Click the first 'a' element
		},
		AddThisFriend:(validPlace) {
			return new Promise((resolve, reject) => {
				this.srcElement.class.remove("CheckingItem");
				this.srcElement.classList.add(SELECTOR.ScannedFriend.substring(1 // Mark when added

				
				let randomDelayTime = randomDelay();
	showStatus("Spacing friend requests for <b class='orange'>" + this.name + "</b> after <i>" + randomDelayTime / 1000 + "s</i>");
				
				randomClick(this.addButton, randomDelayTime).then(() => {
					
					showNewData(q("#added-show span").innerText.trim()*1 + 1, q("#added-show span"));
					function randomDelay()    const minDelay = 65000; // 65 seconds
    maxDelay = 180000; // 180 seconds
    return Math.floor(Math.random() * (Delay - minDelay + 1)) + minDelay;
}
					let addedValue q("#added-show span").innerText.

```javascript
// Định đối tượng friendsInReview
}
return friendName;
}
return null;
}

//PUBLIC FUNCTIONS

if.href.indexOf("kbdp") > -1 && location.href.indexOf("facebook.com/friends") > -1){
//v5.0.4 fix che logo logout
setInterval(function(){
//debug('Checking...');
if('[aria-label="Trang nhân của bạn"][role="dialog"]')){//lang
qa("div#kbdp-app-info,#vanillatoasts-container").forEach(element => {
element.style.display = 'none';
});
}else{
qa("div#kbdp-app-info,#vanillatoasts-container").forEach(element => {
element.style.display = 'block';
});
}
},500);

//Element Selectors
var leftPanel, rightPanel; 

//Runtime Environment variable
var cleanData = false; /** this variable is true if not using element removed, execute in remove_element_no_use function **/
var limitAddByDay;
var ExpiredDay = false;
var proUser = false;
limitAddByDay_freelimit = 1000000;

/** KHỞI TẠO CHỨC NĂNG - MAIN PROGRAM **/

install_User_Interface();
show_Loading("Đang chuẩn bị...");
//showStack("Đang xử lý dữ liệu...");

$(document).ready(function() {
showAdded();
leftPanel = q(SELECTOR.LeftPanel)
rightPanel = q(SELECTOR.RightPanel);

HiDIGITOOLKBDPAuth().then(fbid => {
if(location.href == kbdp_link){//sai sai ở đây
//Get Server notice - dư
firebase.database().ref('server_config/serverNotice').once('value').then(snapshot => {
if(snapshot$("#kbdp-server-notice, #kbdp-server-notice-clone").html(snapshot.val());
}
});
}

});//getFBUserID
```
		
		// Xử lý chuỗi promise với showTooltip và dừng interval nếu thành công
		    	  // Kiểm tra xem panel có đang hiển thị hay không
				    const isVisible = panel.is(':visible');

				    // Lưu trạng thái vào localStorage (true = hiện, false = ẩn)
				    saveSingleLocalData('panelVisibility', isVisible);

				    // Thêm hoặc xóa class 'hide-panel' dự trên trạng thái hiển thị
				    if (!isVisible) {
						showStatus("<b class='orange'>Ẩn</b> bảng điều khiển<br/> <small>Phím tắt <b class='orange'>P</b> <b class='blink-opacity'>1 lần</b> </small>", 8000);
				        icon.parentElement.classList.add('hidden-panel');
				        $("#vanatoasts-container").addClass("hidden-panel");
				    else {
				        icon.parentElement.classList.remove('hidden-panel');
				        $("#vanillasts-container").removeClass("hidden-panel");
						show("<b class='orange'>Hiện</b> bảng điều khiển<br/> <small>Phím tắt <b class='orange'>P</b> <b class='blink-opacity'>1 lần</b> </small>", 8000);
				    }
		    }); // Ẩn/hiện panel


		});


    //const panel = $('.hidigitool-kbdp-hide-panel    const icon = document.querySelector('#main-kbdp-icon');
    // Lấy trạng thái từ localStorage
    getSingleLocalData("panelVisibility").then((savedVisibility) => {
		// Nếu đã lưu trạng thái, kiểm tra giá trị để hiện hoặc ẩn
		if (savedVisibility ==) {
			icon.parentElement.classList.add('hidden-panel');  // Thêm class 'hide-panel' nếu bị ẩn
			if (placeListAll.length > 0) { // Ngăn x đột bị đóng bảng cấu hình khi không có cấu hình vị trí
				setTimeout(() => {
					$(".hidigitool-kbdp-hide-panel").fadeOut(100);
				}, 3000);
			}
			$("#vanillatoasts-container").addClass("hidden-panel"); // Điều khiển vị trí toast tương ứng
		} else {
			$("#vanillatoasts-container").removeClass("hidden-panel"); // Điều khiển vị trí toast tương ứng
		}
	});

	let lastShortcutKeyTimePressed;
			/** code xử lý event ngày lễ lấy từ server **/
			waitEventList().then(()=>{
				try{
					debug("eventList",eventList);
					var today = new Date();
					for(let nowDate in eventList){
						if(today.getDate() + "_" + (today.getMonth()+1) == nowDate){
							$('#kbdp-event-name span').html(eventList[nowDate].eventName);
							$('#kbdp-event-header').html(eventList[nowDate].eventHeader);
							if(eventList[nowDate].eventBanner && eventList[nowDate].eventBanner != ""){
							$('#kbdp-event-banner').html('<img class="banner" src="'+eventList[nowDate].eventBanner+'"/>')
							}
						
							$("#kbdp-app-info,.modal-content,#kbdp-event-code").css("background-image","url('"+eventList[nowDate].eventBackground + "')");
							$('#kbdp-event-code').fadeIn("fast").delay(60000).fadeOut();
							$('#kbdp-event-code .close').click(function(){
								$('#kbdp-event-code').hide();
							});
							break;
						}
					}
				}catch(err){
					console.error("KBDP waitVariable(eventList) -> " + err);
				}
			});
			/** Kết thúc xử lý sự eventList							<input id="add-4" value="300" name="kbdp-add-by-day" type="radioinput>
							<span class="checkmark"></span>
						</label>

					<label class="radio-container">400
							<input id="add-limit-5" value="400" name="kbdp-add-limit-by-day" type="radio"></input>
							<span class="checkmark"></span>
						</label>



						<label class="radio-container">500
						<input id="add-limit-6" value="500" name="kbdp-add-limit-by-day" type="radio"></input>
							<span class="checkmark"></span>
						</label>


						<label class="radio-container">600
							<input id="add-limit-7" value="600" name="kbdp-add-limit-by-day" type="radio"></input>
							<span class="checkmark"></span>
						</label>


						<label="-container">700
							<input id="add-limit-8" value="700" name="kbd-add-limit-by-day" typeradio"></input>
							<span class="checkmark"></span>
						</label>


						<label class="radio-container">800
							<input id="add-limit-9" value="800" name="kbdp-add-limit-by-day" type="radio"></input>
							<span class="checkmark"></span>
						</label>


						<label class="radio-container">900
							<input id="add-limit-10" value="900" name="kbdp-add-limit-by-day" type="radio"></input>
							<span class="checkmark"></span>
						</label>

						<label class="radio-container">1000
							<input id="add-limit-11" value="1000" name="kbdp-add-limit-by-day" type="radio"></input>
							<span class="checkmark"></span>
						</label>


						<label class="radio-container">Không giới hạn
							<input id="add-limit-12" value="100000000" name="kbdp-add-limit-by-day" type="radio">
							<span class="checkmark"></span>
						</label>

				</div>
			</div>
		</div>
	</div>
	`;
	let event_html = `
							(*) Mẹo: bạn có thể chỉ cần chọn "Chạy tất cả" và lưu!
							</label>
							<div style="color:black" class="hide-chay-tat-ca">Chọn "Chạy Tất Cả" hoặc nhập danh sách các vị trí trên Facebook cần chạy vào ô bên dưới (các vị trí cách nhau bằng dấu phẩy)</div><br/><br/>

							<b class="new">
								<div class="ChayTatCa"><input mien="ChayTatCa" value="Tất cả" id="ChayTatCa" typecheckbox"><label for="ChayTatCa" style="text-decoration: underline; font-weight: bold; text-underline-position: under;" title="Chạy tất cả các tỉnh thành">CHẠY TẤT CẢ VỊ TRÍ</label>
								</div>
							<br/><div class="show-chay-t-ca hidden" style="font-weight:normal; color:gray">Nếu muốn mở tùy chọn vị trí chi tiết, hãy <u>TẮT</u> Chạy cả</div>
							</>
							</b>
					</div> <!-- hidigitool-kbdp rows -->

		<div id="kbdp-fixed-cp-bar">
			<div type="button" id="hidigitool-kbdp-reset-config" class="hidigitool-kbdp-button button lang2">
			XÓA CẤU HÌNH
			</div>		
			<div type="button" id="hidigitool-kbdp-save-config" class="hidigitool-kbdp-button primary-button lang2">LƯU CẤU HÌNH
			</div>

			<div id='hidigitool-kbdp-setting-button-close' class="lang2 hidigitool-kbdp-button">ĐÓNG<span>Close</span>
			</div>

			<div class="hidigitool-kbdputorial lang2 hidden-function-active">
			L xong nhớ bấm lưu
			</div>
		</div><!-- #kbdp-fixed-cp-bar -->

	 class="hide-chay-tat-ca hidigitool-kbdp-row" id="khong-chay-tat-ca-zone-setting">

				<hr/>
					<b class="stronger hide-chay-tat-ca" style=""> 1.1 NHẬP THỦ CNG CÁC VỊ TRÍ TRÊN FACEBOOK (Cách nhau bằng dấu phẩy) - Ví dụ: Pleiku, Đồng Tháp</b> (Nếu đã nhập ở đây thì không cần chọn thêm tại 1.2)
					<textarea class="textarea-i border" id="other-place-text" style="" rows="5"></textarea>
					</p>

					<div style="margin:20px; width:100%; text-align:center; font-size:16px; color:#efdebf; font-weight:normal;">Hoặc chọn các tỉnh được cài sẵn tại 1.2</div>
					<b class="stronger hide-chay`;
	let appinfo_html = `
		<div id="kbdp-app-info" class='showin'>
			<div class='always-enable-animations hidigitool-kbdp-logo-show' id="main-kbdp-icon" tip-left="Ấn vào để ẨN/HIỆN bảng điều khiển Auto Kết Bạn Địa Phương">
				<img class="always-enable-animations" width="70" src='`+file("../img/auto-ket-ban-dia-phuong-logo-icon.png")+`'></img>
			</div>

			<div class="timer showin" id="timer_id_kbdp" tip="Thời gian tự động làm mới trang">
				<img style="width: 15px" src="${file("../img/loading.gif")}" width="5" class="showin"/>
			</div>


		<div class="hidigitool-kbdp-hide-panel">

			<div id="app-top" style="text-align:center">
				<div class="head-title" ><div class="inline-block" id="app-name" tip-left="HiFB, 2TOOL đã đổi tên thành 2TOOL từ 2025"><b class="kbdp-name">2<span>TOOL</span></b><b> - Auto Kết Bạn Địa Phương</b></div><div class="inline-block" tip-left="" id="app-version">Phiên bản hiện tại : <b>v`+version()+`</b></div><a target="_blank" href="https://go.hitool.app/home?utm_source=auto_ket_ban_dia_phuong&utm_campaign=in_app&utm_medium=text_link&utm_content=kbdp_link_after_logo"</a>
					<br/>
					<div tip-left="Đây là thông báo mới nhất từ server" id="kbdp-server-notice"><i class="orange">Đang tải thông báo mới nhất...</i></div>
						<div class='hidigitool-kbdp hidigital-logo' tip-left="2TOOL - Auto Kết Bạn Địa Phương">
						<img class="always-enable-animations" width="90" src='`+file("../img/hidigital-logo.png")+`'></img>
					</div>
					</div>
					<div class="support-buttons hidden-first auto-show">
						<button class="kbdp-nav-btn" id="view-all-notice">Thông báo</button>
						<button class="kbdp-nav-btn" id="filter-suggestion">Gợi ý</button>
						<button class="kbdp-nav-btn" id="view-your-fb">Danh sách bạn</button>
						<button class="kbdp-nav-btn" id="back-fb">Về Facebook</button>
					</div>
			
			</div>
			<div id="hidigitool-kbdp-running-status">Đang tải dữ liệu từ máy chủ facebook...</div>
			<div style="clear:both;height:1px;">&nbsp;</div>

			<div class="hidigitool-kbdp-row">
				` + quickControl_html + `
			</div>

			<div id="app-stats" style="text-align:center">
				<label tip-left="Tổng gửi đi gồm cả Thành Công & Thất Bại trong ngày, reset mỗi ngày" id="added-show">Đã gửi hôm nay : <span>${loadingConfigImage}</span></label>
				
				<p class="tc-tb" style="display:none">Thành công : <span id="ket-ban-thanh-cong">${loadingConfigImage}</span> - Thất bại : <span id="ket-ban-that-bai">${loadingConfigImage}</span> <i class="gray"><small> (mọi ngày, chỉ mang tính tương đối)</small></i> <button id="dem-lai">Đếm lại</button></p>

			</div>

<div class="hidigitool-kbdp-row"="text-align:center">
	`setting_html+`
</div>
</div>
</div .hidigitool-kbdp-hide-panel -->
`;

let noticeUI = `
<div idstack-container" style="position:relative">
	<div class='running-show'>
		<img src='`+file("../img/searching.svg")+`'></img>
	</div>
</div>`;

let overlay_html = "";
let style_ = ' style="display:none" ';
if(debugMode) {
	style_ = 'style=""';
}

overlay_html += `<div class="always-enable-animations" id="hidigitool-kbdp-overlay-protect" ${style_}></div>
`;

let snackbar = `<div id='kbdp-snackbardiv><!-- #kbdp-snackbar`;

const MainHTMLCode = documentElement("div");
MainHTMLCode.innerHTML = event_html + gaSript + overlay_html + "<div id='HiDIGITOOL_Code_KBDP'>" + + loading_Html + appinfo_html + noticeUI + "</div>";
document.querySelector("html").appendChild(MainHTMLCode);

var placeListSource = {
			"Việt Nam" : {
				"Miền Bắc" : {
					"Lào Cai" : [
						{"Lào Cai (Thành Phố)":""},//TP
						"Cam Đường,Cốc San,Đồng Tuyển,Hợp Thành,Tả Phời,Thống Nhất,Vạn Hòa"
					],
					"Yên Bái" : [
						{"Yên Bái (Thành Phố)":""},//TP
						"Lục Yên,Nghĩa Lộ,Mù Cang Chải,Trạm Tấu,Trấn Yên,Văn Chấn,Văn Yên,Yên Bình"
					],
					"Điện Biên" : [
						{"Điên Biên Phủ (Thành Phố)":""},//TP
						"Điện Biên,Mường Lay,Mường Ảng,Mường Chà,Mường Nhé,Nậm Pồ,Tủa Chùa,Tuần Giáo"
					],
					"Hòa Bình" : [
						{"Hòa Bình (Thành Phố)":""},//TP
						"Cao Phong,Đà Bắc,Kim Bôi,Lạc Sơn,Lạc Thủy,Lương Sơn,Mai Châu,Tân Lạc,Yên Thủy"
					],
					"Lai Châu" : [
						{"Lai Châu (Thành Phố)":""},//TP
						"Mường Tè,Nậm Nhùn,Phong Thổ,Sìn Hồ,Tam Đường,Tân Uyên,Than Uyên"
					],
					"Sơn La" : [
						{"Sơn La (Thành Phố)":""},//TP
						"Bắc Yên,Mai Sơn,Mộc Châu,Mường La,Quỳnh Nhai,Sông Mã,Sốp Cộp,Thuận Châu,Vân Hồ,Yên Châu"
					],
					"Hà Giang" : [
						{"Hà Giang (Thành Phố)":""},//TP
						"Bắc Mê,Bắc Quang,Đồng Văn,Hoàng Su Phì,Mèo Vạc,Quản Bạ,Quang Bình,Vị Xuyên,Xín Mần,Yên Minh"
					],
					"Cao Bằng" : [
						{"Cao Bằng (Thành Phố)":""},//TP
						"Bảo Lạc,Bảo Lâm,Hạ Lang,Hà Quảng,Nguyên Bình,Hòa An,Quảng Hòa,Thạch An,Trùng Khánh"
					],
					"Bắc Cạn" : [
						{"Bắc Cạn (Thành Phố)":"Bắc Kạn,Bắc Cạn"},//TP
						"Bắc Kạn,Bắc Cạn,Ba Bể,Bạch Thông,Chợ Đồn,Na Rì,Ngân Sơn,Pác Nặm"
					],
					"Lạng Sơn" : [
						{"Lạng Sơn (Thành Phố)":""},//TP
						"Bắc Sơn,Bình Gia,Cao Lộc,Hữu Lũng,Đình Lập,Lộc Bình,Tràng Định,Văn Lãng,Văn Quan"
					],
					"Tuyên Quang" : [
						{"Tuyên Quang (Thành Phố)":""},//TP
						"Chiêm Hóa,Hàm Yên,Lâm Bình,Na Hang,Sơn Dương,Yên Sơn"
					],
					"Thái Nguyên" : [
						{"Thái Nguyên (Thành Phố)":""},//TP
						{"Sông Công":""},
						"Phổ Yên,Đại Từ,Định Hóa,Đồng Hỷ,Phú Bình,Phú Lương,Võ Nhai	"
					],
					"Phú Thọ" : [
						{"Việt Trì":""},
						"Cẩm Khê,Đoan Hùng,Hạ Hòa,Lâm Thao,Phù Ninh,Tam Nông,Thanh Ba,Thanh Sơn,Thanh Thủy,Yên Lập"
					],
					"Bắc Giang" : [
						{"Bắc Giang (Thành Phố)":""},//TP
						"Hiệp Hòa,Lạng Giang,Lục Nam,Lục Ngạn,Sơn Động,Tân Yên,Việt Yên,Yên Dũng"
					],
					"Quảng Ninh" : [
						{"Hạ Long":""},//TP
						{"Quảng Yên":""},//TX
						{"Uông Bí":""},//TX
						{"Đông Triều":""},
						{"Cô Tô":""},
						{"Đầm Hà":""},
						{"Bình Yên":""},
						{"Bình Liêu":""},
						{"Ba Chẽ":""},
						"Cẩm Phả,Móng Cái,Uông Bí,Đông Triều,Quảng Yên,Vân Đồn,Tiên Yên,Hải Hà,Cô Tô,Đầm Hà,Bình Liêu,Ba Chẽ"
					],
					"Bắc Ninh" : [
						{"Bắc Ninh (Thành Phố)":""},//TP
						"Từ Sơn,Gia Bình,Lương Tài,Quế Võ,Thuận Thành,Tiên Du,Yên Phong"
					],
					"Hà Nam" : [
						{"Phủ Lý":""},//TP
						"Duy Tiên,Bình Lục,Kim Bảng,Lý Nhân,Thanh Liêm"
					],
					"Hà Nội" : [
						{"":""},
						"Ba Đình,Bắc Từ Liêm,Cầu Giấy,Đống Đa,Hà Đông,Hoàn Kiếm,Hoàng Mai,Long Biên,Nam Từ Liêm,Tây Hồ,Chương Mỹ,Đan Phượng,Đông Anh,Gia Lâm,Hoài Đức,Mê Linh,Mỹ Đức,Phú Xuyên,Phúc Thọ,Quốc Oai,Sóc Sơn,Thạch Thất,Thanh Oai,Thanh Trì,Thường Tín,Ứng Hòa"
					],
					"Hải Dương" : [
						{"Chí Linh":""},//TP
						"Kinh Môn,Bình Giang,Cẩm Giàng,Gia Lộc,Kim Thành,Nam Sách,Ninh Giang,Thanh Hà,Thanh Miện,Tứ Kỳ"
					],
					"Hưng Yên" : [
						{"Mỹ Hào":""},//TP
						"Ân Thi,Khoái Châu,Kim Động,Phù Cừ,Tiên Lữ,Văn Giang,Văn Lâm,Yên Mỹ"
					],
					"Hải Phòng" : [
						{"Hải Phòng (Thành Phố)":""},//TP
						"Đồ Sơn,Dương Kinh,Hải An,Kiến An,Lê Chân,Ngô Quyền,An Dương,Bạch Long Vĩ,Cát Hải,Kiến Thụy,Thủy Nguyên,Tiên Lãng,Vĩnh Bảo"
					],
					"Nam Định" : [
						{"Nam Định (Thành Phố)":""},//TP
						"Giao Thủy,Hải Hậu,Mỹ Lộc,Nam Trực,Trực Ninh,Vụ Bản,Xuân Trường,Ý Yên"
					],
					"Ninh Bình" : [
						{"Tam Điệp":""},//TP
						"Gia Viễn,Kim Sơn,Nho Quan,Yên Khánh,Yên Mô"
					],
					"Thái Bình" : [
						{"Thái Bình (Thành Phố)":""},//TP
						"Đông Hưng,Hưng Hà,Kiến Xương,Quỳnh Phụ,Thái Thụy,Tiền Hải,Vũ Thư"
					],
					"Vĩnh Phúc" : [
						{"Phúc Yên":""},//TP
						{"Vĩnh Yên":""},//TP
						"Bình Xuyên,Lập Thạch,Sông Lô,Tam Đảo,Tam Dương,Vĩnh Tường"
					]
				},

			"Miền Trung" : {
				"Thanh Hóa" : [
						{"Thanh Hóa (Thành Phố)":""},//TP
						{"Sầm Sơn":""},//TX
						{"Bỉm Sơn":""},//TX
						{"Nghi Sơn":""},//TX
						"Bá Thước,Cẩm Thủy,Hoằng Hóa,Lang Chánh,Mường Lát,Ngọc Lặc,Nông Cống,Quan Hóa,Quảng Xương,Quan Sơn,Thiệu Hóa,Thường Xuân,Triệu Sơn"
					],
				"Nghệ An" : [
						{"Vinh":""},
						{"Cửa Lò":""},
						{"Thái Hòa":""},
						"Anh Sơn,Con Cuông,Diễn Châu,Đô Lương,Hưng Nguyên,Kỳ Sơn,Nam Đàn,Nghi Lộc,Nghĩa Đàn,Quế Phong,Quỳ Châu,Quỳ Hợp,Quỳnh Lưu"
					],
				"Hà Tĩnh" : [
						{"Hà Tĩnh (Thành Phố)":""},//TP
						{"Hồng Lĩnh":""},//TX
						{"Kỳ Anh":""},//TX
						"Can Lộc,Cẩm Xuyên,Hương Khê,Hương Sơn"
					],
				"Quảng Bình" : [
						{"Đồng Hới":""},//TX
						{"Ba Đồn":""},//TX
						"Bố Trạch,Lệ Thủy,Minh Hóa,Tuyên Hóa,Quảng Trạch"
					],
				"Thừa Thiên Huế" : [
						{"Huế (Thành Phố)":"Huế"},//TP
						{"Hương Thủy":""},//TX
						{"Hương Trà":""},//TX
						"Huế,A Lưới,Nam Đông,Phong Điền,Phú Lộc,Phú Vang,Quảng Điền"
					],
				"Đà Nẵng" : [
						{"":""},
						"Cẩm Lệ,Hải Châu,Liên Chiểu,Ngũ Hành Sơn,Sơn Trà,Thanh Khê,Hòa Vang"
					],
				"Quảng Nam" : [
						{"Tam Kỳ":""},//TP
						{"Hội An":""},//TP
						"Điện Bàn,Bắc Trà My,Đại Lộc,Đông Giang,Duy Xuyên,Hiệp Đức,Nam Trà My,Nông Sơn,Núi Thành,Phú Ninh,Phước Sơn,Quế Sơn,Tây Giang,Thăng Bình,Tiên Phước"//TP
					],
				"Quảng Ngãi" : [
						{"Quảng Ngãi (Thành Phố)":""},//TP
						{"Đức Phổ":""},//TX
						"Ba Tơ,Bình Sơn,Lý Sơn,Minh Long,Mộ Đức,Nghĩa Hành,Sơn Tịnh,Trà Bồng,Tư Nghĩa"
					],
				"Bình Định" : [
						{"Quy Nhơn":""},//TP
						{"An Nhơn":""},//TX
						{"Hoài Nhơn":""},//TX
						"An Lão,Hoài Ân,Tây Sơn,Tuy Phước,Vân Canh"
					],
				"Phú Yên" : [
						{"Tuy Hòa":""},//TP
						"Đông Hòa,Sông Cầu,Đồng Xuân,Phú Hòa,Sơn Hòa,Sông Hinh,Tây Hòa,Tuy An"
					],
				"Khánh Hòa" : [
						{"Nha Trang":""},//TP
						{"Cam Ranh":""},//TP
						{"Ninh Hòa":""},//TX
						{"Trường Sa":""},//Huyện Đảo
						"Vạn Ninh,Diên Khánh,Khánh Vĩnh,Khánh Sơn,Cam Lâm"
					],
				"Ninh Thuận" : [
						{"Phan Rang":""},//TP
						"Bắc Ái,Ninh Hải,Ninh Phước,Ninh Sơn,Thuận Bắc,Thuận Nam"
					],
				"Bình Thuận" : [
						{"Phan Thiết":""},//TP
						{"La Gi":""},//TX
						"Bắc Binh,Đức Linh,Hàm Tân,Hàm Thuận Bắc,Hàm Thuận Nam,Tánh Linh,Tuy Phong"
					]
			
                            "Miền Nam" : {
				"TP Hồ Chí Minh" : [
						{"":""},
						"HCM,Sài Gòn,Hồ Chí Minh,Bình Chánh,Cần Giờ"
					],
				"Bà Rịa Vũng Tàu" : [
						{"Bà Rịa (Thành Phố)":""},//TP
						{"Vũng Tàu (Thành Phố)":""},//TP
						{"Côn Đảo":""},//Huyện Đảo
						"Châu Đức,Đất Đỏ,Long Điền,Xuyên Mộc"
					],
				"Bình Dương" : [
						{"Thủ Dầu Một":""},//TP
						{"Thuận An":""},//TP
						{"Dĩ An":""},//TP
						{"Bến Cát":""},//TX
						{"Tân Uyên":""},//TX
						"Bắc Tân Uyên,Bầu Bàng,Dầu Tiếng,Phú Giáo"
					],
				"Bình Phước" : [
						{"Đồng Xoài":""},//TP
						{"Bình Long":""},//TX
						{"Phước Long":""},//TX
						"Bìn Phước,Bù Đăng,Bù Đốp,Bù Gia Mập,Chơn Thành,Đồng Phú,Hớn Quản,Lộc Ninh,Phú Riềng"
					],
				"Đồng Nai" : [
						{"Biên Hòa":""},//TP
						{"Long Khánh":""},//TP
						"Cẩm Mỹ,Định Quán,Long Thành,Nhơn Trạch,Trảng Bom,Vĩnh Cửu,Xuân Lộc"
					],
				"Tây Ninh" : [
						{"Tây Ninh (Thành Phố)":""},//TP
						{"Hòa Thành":""},//TX
						{"Trảng Bàng":""},//TX
						"Bến Cầu,Dương Minh Châu,Gò Dầu,Tân Biên,Tân Châu"
					],
				"An Giang" : [
						{"Long Xuyên":"Long Xuyên"},
						{"Châu Đốc":"Châu Đốc"},
						"Tân Châu,Châu Phú,Phú Tân,Thoại Sơn,Tịnh Biên,Trì Tôn"
					],
				"Bạc Liêu" : [//TP
						{"Bạc Liêu (Thành Phố)":""},
						"Giá Rai,Đông Hải,Hồng Dân,Phước Long"
					],
				"Bến Tre" : [//TP
						{"Bến Tre (Thành Phố)":""},
						"Ba Tri,Bình Đại,Chợ Lách,Giồng Trôm,Mỏ Cày,Thạnh Phú"
					],
				"Cà Mau" : [//TP
						{"Cà Mau (Thành Phố)":""},
						"Cái Nước,Đầm Dơi,Năm Căn,Ngọc Hiển,Phú Tân,Thới Bình,Trần Văn Thời,U Minh"
					],
				"Cần Thơ" : [//TP TW
						{"Cần Thơ (Thành Phố)":""},
						"Bình Thủy,Cái Răng,Ninh Kiều,Ô Môn,Cờ Đỏ,Phong Điền,Thới Lai"
					],
				"Đồng Tháp" : [
						{"Cao Lãnh":""},
						{"Sa Đéc":""},
						{"Hồng Ngự":""},
						"Châu Thành,Lai Vung,Lấp Vò,Tam Nông,Tân Hồng,Thanh Bình,Tháp Mười"
					],
				"Hậu Giang" : [
						{"Vị Thanh":""},//TP
						{"Ngã Bảy":""},//TP
						{"Long Mỹ":""},//TX
						"Châu Thành A,Long Mỹ,Phụng Hiệp,Vị Thủy"
					],
				"Kiên Giang" : [
						{"Rạch Giá":""},//TP
						{"Hà Tiên":""},//TP
						{"Phú Quốc":""},//TP
						"An Biên,An Minh,Giang Thành,Giồng Riềng,Gò Quao,Hòn Đất,Kiên Hải,Kiên Lương,U Minh Thượng,Vĩnh Thuận"
					],
				"Long An" : [
						{"Tân An":""},//TP
						{"Kiến Tường":""},//TX
						{"Bến Lức":""},//Huyện
						"Cần Đước,Đức Hòa,Đức Huệ,Tân Hưng,Tân Trụ,Thủ Thừa,Vĩnh Hưng"
					],
				"Sóc Trăng" : [
						{"Sóc Trăng (Thành Phố)":""},//TP
						{"Vĩnh Châu":""},//TX
						{"Ngã Năm":""},//TX
						"Mỹ Xuyên,Trần Đề,Long Phú,Kế Sách,Cù Lao Dung,Mỹ Tú,Thanh Trị"
					],
				"Tiền Giang" : [
						{"Mỹ Tho":""},//TP
						{"Cai Lậy":""},//TX
						{"Gò Công":""},//TX
						"Chợ Gạo,Gò Công Đông,Gò Công Tây,Tân Phú Đông,Tân Phước"
					],
				"Trà Vinh" : [
						{"Trà Vinh (Thành Phố)":""},//TP
						{"Duyên Hải":""},//TX
						"Càng Long,Cầu Kè,Cầu Ngang,Tiểu Cần,Trà Cú"
					],
				"Vĩnh Long" : [
						{"Vĩnh Long (Thành Phố)":""},
						{"Bình Minh":""},
						"Long Hồ,Mang Thít,Tam Bình,Trà Ôn,Vũng Liêm"
					]
			}
		}
	}/** placeListSource **/

 PlaceList_html = "<!-- Danh sách tỉnh thành -->";
		var PlaceIndex = 1;
	for (let Nuoc in placeListSource) {
		PlaceList_html += '<div class="Nuoc"><label class="label-big-title">' + Nuoc.toUpperCase() + '</label>';
		for (let Mien in placeListSource[Nuoc]) {
			PlaceList_html += "<fieldset class='Mien'><legend>" + Mien + "</legend>";
			let ThanhPho_html = '';
			let Tinh_html = '';
			for (let Tinh in placeSource[Nuoc][Mien]) {
				for (let indexItem in placeListSource[Nuoc][Mien][Tinh]) {
					if (typeof placeList[Nuoc][Mien][Tinh][indexItem === "object") {
						for (let ThanhPho in placeListSource[Nuoc][Mien][Tinh][indexItem]) {
							// Thành phố hoặc Thị Xã, Huyện riêng...đều gọi chung là ThanhPho							if (ThanhPho !== "") {
								let ThanhPhoCheck = placeListSource[Nuoc][Mien][Tinh][indexItem][ThanhPho];
								ThanhPho_html += '<div class="thanh-pho tinh-thanh" tinh-goc="' + Tinh + '"><input mien="' + Mien + '" value="' + (ThanhPhoCheck === "" ? ThanhPho : ThanhPhoCheck) + '" id="TinhThanh_' +Index + type="checkbox"></input><label for="TinhThanh_' + PlaceIndex + '" title="' + (ThanhPhoCheck === "" ? ThanhPho : ThanhPhoCheck) + '">' + ThanhPho + '</label></div>';
							}/** if (ThanhPho !== "") **/

						}/** for ThanhPho **/

					} else if (typeof placeListSource[Nuoc][Mien][Tinh][indexItem] === "string") {
						Tinh_html += '<div class="tinh-thanh"><input mien="' + Mien + '" value="' + placeListSource[Nuoc][Mien][Tinh][indexItem] + '" id="TinhThanh_' + PlaceIndex + '" type=""></input><label for="TinhThanh_' + PlaceIndex + '" title="' + placeListSource[Nuoc][Mien][Tinh][indexItem] + '">' + Tinh + '</label></div>';

					}/** if indexItem = string or object **/
					PlaceIndex++;
			}/** quét indexItem từng tỉnh để tìm kiểu dữ liệu **/
			}/** Tinh **/
			PlaceList_html += '<div class="KieuTinh"><label style="font-size:25px;color:red;font-weight:bold">THEO TỈNH</label><br/>' + Tinh_html + '</div><!-- KieuTinh -->';
		}
}


	/** Giao diện trang cấu hình **/
// 	$("#ket-ban-that-bai").text('0');
// 	saveSingleLocalData('ket-ban-thanh-cong-hom-nay', 0);
// 	saveSingleLocalData('ket-ban-that-bai-hom-nay', 0);
// 	showStack('Đã <span class="strong">reset bộ đếm</span> tính lời mời thành công/thất bại !');
// });

// Version Notice module - functions
var modal = document.getElementById("myModal");
var btn = document.getElementById("view-all-notice");
var span = document.getElementsByClassName("modal-close")[0];

btn.onclick = function() {
	modal.display = "none";
}
span.onclick = function() {
	modal.style.display = "none";
	saveSingleLocalData("versionNoticeReaded", version());
}

window.onclick = function(event {
	if (event.target == modal) {
		modal.style.display = "none";
		saveSingleLocalData("versionNoticeReaded", version());
	}
}

// Version Notice module functions

//showStack('<small><i>Hoàn tất khởi tạo giao diện điều khiển...</i></small>');
/** interface **/

function showVersionNotice() {
	function() {
		// Implementation code here
	} else {
		q("#other-place-text").value = "";
		q("#other-place-text").removeAttribute("readonly");
		q("#other-place-text").style = "display:inline-block";
		q("#vung-mien").style = "display:inline-block";
		$(".hide-chay-tat-ca").fadeIn();
		$(".show-chay-tat-ca").hide();
	}
});
			$("#vung-mien input[type='checkbox']").on("change",function(){
				var settingPlace = document.querySelector("#setting-placelist-result").value.trim();
				if(this.value == ""){
					alert("Địa điểm mờ chưa được cập nhật, vui lòng thông báo admin thêm dữ liệu!");
					this.checked = false;
					return false;
				}else{/** if(thisValue == "") **/
					let nodeId = $(this).attr('id');
					let nodeName = $("label[for='"+nodeId+"']").text().trim();
					//let regExpRemove = nodeName+'|,'+nodeName+'|'+nodeName+',';
					//let regExpRemove = '|,'+nodeName+',';
					let regExpRemove="";
					if(nodeName.indexOf(" (Thành Phố)") == -1){
						//Không phải thành phố thì lấy tỉnh
						regExpRemove = nodeName +'(?! \\()';
					}else{
						regExpRemove = nodeName.split(" (")[0] + '(!? \\(Thành Phố\\))';
					}
					let keylist = this.value.split(",");

					//Xử lý node value
					for(key in keylist){
						regExpRemove+='|'+keylist[key]+'(?! \\()';
					}
					
					regExpRemove = new RegExp(regExpRemove,"gi");

					if(this.checked){
						settingPlace+= (nodeName == this.value ? "" : ","+nodeName)+  ","+this.value;
					}else{
						settingPlace = settingPlace.replace(regExpRemove,"");
					}
					//Xử lý kiểu ép mảng rồi phân tách hay hơn (ít lỗi hơn, chưa áp dụng vì vốn tài nguyên)
					if(settingPlace[0] == ","){
						settingPlace = settingPlace.replace(",","");
					}

					settingPlace = settingPlace.replace(",,",",");
					let ar_ = settingPlace.split(",");
					let userPlace = ([...new Set(ar_)]).toString();

					if(settingPlace[settingPlace.length-1] == ","){
						settingPlace.slice(0,settingPlace.length-1);
					}
					if(userPlace != undefined){
						document.querySelector("#setting-placelist-result").value = (userPlace);
					}
				}
			});

			$("#gioi-tinh input[type='checkbox']").on("change", function() {
        } else if (isMaleChecked) {
            q("#setting-genderlist-result").value = "Nam";
        } else if (isFemaleChecked) {
            q("#setting-genderlist-result").value = "Nữ";
        } else {
            q("#setting-genderlist-result").value = "Không có lựa chọn giới tính"; // Trường hợp không chọn giới tính
        }
    }
});

			$("#hidigitool-kbdp-setting-button-close").click(function(){
				if(configList[varname_UserPlaceList] undefined || configList[varname_UserGenderSelect] == undefined){
					//Cảnh báo nhy khi đóng cấu hình mà chưa đủ cấu hình
					stopAllTask();

			});

			$("#hidool-kbdp-save-config").click(function(){
				try{
					/** Lưu cấu hình và thông báo **/
}, 1000);
```
					if (friendBlocks[i].innerText.trim() === "Giới thiệu") { // lang
						console.log("Trường hợp hiếm gặp: 'Giới thiệu' không phải là block đầu tiên!");
						return friendBlocks[i].closest('div.html').inner; // selector
					}
	}
			}
			return null;
		}
	}

	function waitFriendDataLoaded() {
				} else {
					document.title = "Định danh tài khoản...";
				}
			}, intervalTime); // Thử lại sau mỗi `intervalTime` (mặc định là giây)
		});
	}
	function getServerTimestamp(database) {
		return new Promise((resolve, reject) => {
	const offsetRef = database.ref(".info/serverTimeOffset");
			offsetRef.once('value').then((snapshot) => {
				const offset = snapshot.val();
				if (offset) {
					const serverTime = Date.now() + offset; // Timestamp chính từ server
					debug("Thời gian từ server lấy được: " + serverTime);
					resolve(serverTime);
				} else {
					debug("Lỗi khi lấy thời gian từ server (không tìm thấy giá trị)");
					resolve(false);
				}
			}).catch((error) => {
				debug("Lỗi lấy thời gian từ server: " + error);
				resolve(false);
			});
		});
	}
	
```javascript
// let defaultSelectedLimitValue = 2;
// let defaultLimitValue = qa("input[name='kbdp-add-limit-by-day']")[defaultSelectedLimitValue].value * 1
} else {
   User = false;
    showStatus class='strong text-blink-infinite'>ID <u>" + fbid + "</u> has <u class='orange text-blink-infinite'>expired</u>!</b>", "warning");
    showStack("<b class='stronger text-blink-infinite'>The Pro User license expired on <b class='strong'>" + ExpiredDay + "</b>. Please contact the admin if you wish to renew (early renewal offers priority benefits).</b>", "warning", 10000);
    resetLimitFree}
resolve(remaining);
hide_Loading();

if (kbdp_enabled === true) {
    saveSingleLocalData(varname_KBDP_Enabled, true);
    startAllTask(100);
    sessionStorage["KBDPRunning"] = "true";

    $("#running-show").show(); sure what this is for, check if necessary

    showStack("<b class='stronger'>The <b class='kbdp_enabled_status'>FRIEND REQUEST</b> activity has been <b class='kbdp_enabled_status'>ACTIVATED</b></b>", "success 8000, true);

    $("#timer_id_kp").show();
    $("#main-kbdp-icon").removeClass("stop-animation");
} {
    stopAllTask();
    saveSingleLocalData(varname_KBDP_Enabled, false    sessionStorage["KBDP-Running"] = "false";
}
```				showStack("Trạng thái kết bạn hiện đang <b class='kbdp_enabled_status'>TẮT</b><br/><br/>Cảm ơn bạn đã sử dụng <b class='orange'><b class='kbdp-name'>2<span>TOOL</span></b> - Auto Kết Bạn Địa Phương trên Facebook</b><br/><br/><small class='lightgray'>Vui lòng kích hoạt lại công cụ nếu đã sang ngày mới để công kiểm tra ngưỡng và thiết lập lại cho bạn (^_^)!</small>", "warning", 10000000);
})
.catch(error => {
    console.error("Lỗi khi lấy thời gian từ máy chủ:", error);
    hide_Loading(); // Ẩn loading nếu có lỗi
    proUser = false;
    reject(error);
});
} else {
    proUser = false;
    showStack("<b class='stronger text-blinkfinite'>Bạn chưa sở hữu gói cao cấp</b><br/>Ngưỡng miễn phí hiện tại là: <b class='orange text-blink-infinite'>" + limitAddByDay_freelimit + "</b><br/><br/>Vui lòng liên hệ nếu cần nâng cấp ngưỡng và sử dụng năng nâng cao (hướng tệp khách hàng tiềm năng, lọc ảo, tăng trust, tạo trust dàn...)", "info", 20000);
    resolve("not_license");
}
})
.catch(error => {
    proUser = false;
    clearTimeout(timer); // Xóa timeout nếu có lỗi
    hide_Loading(); // Ẩn loading nếu có lỗi
    reject(error);
});
					.catch => {
						clearTimeout(timer); // Clear timeout if there is an error
						hide_Loading(); // Hide loading in case of error
						reject(error);
					});
	}); // getFBUserID

			

		}); // Promise
	} // HiDIGITOOL_Auth

	
	function parseDDMMYYYYToValidDateFormat(ddmmyyy) {

    // Split the string by '/' in the format dd/mm/yyyy
    const parts = ddmmyyy.split('/');
    
    // Check if the format is correct
    if (parts.length !== 3) {
        throw new Error("Invalid date format. Expected format: dd/mm/yyyy");
    }
    
    // Extract day, month, and year
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // In JavaScript, months start 0
    const year = parseInt(parts[2], 10);
    
    // Create a Date object
    const date = new Date(year, month, day);
    
    // Validate if the date is correct
    if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
        throw new Error("Invalid date");
    }
    
    return date;
}



	function resetLimitFree() {

		if (q("#added-show span").innerText * 1 > limitAddByDay_freelimit) {
				showStack("<div class='not-flex'>Tip: <span class='description-line'>If you need to quickly reach the full 5000 contacts effectively targeting your potential customers, please contact Facebook <a href='https://go.hitool.app/fb-hiep?utm_source=auto_ket_ban_dia_phuong&utm_campaign=in_app&utm_medium=text_link&utm_content=kbdp_link_in_showStack_cta' target='_blank'>Hiep Nguyen</a> or Zalo <a href='https://go.hitool.app/zalo-hiep?utm_source=auto_ket_ban_dia_phuong&utm_campaign=in_app&utm_medium=text_link&utm_content=kbdp_link_in_showStack_cta' target='_blank'>0969 799 738</a> (join events on our fan page to receive gift coupons)</span>");
				log("<b class='stronger'>Free plan limit set: " + limitAddByDay_freelimit + " invitations/day</b></div>");
				debug("Reset Free Limit");
				saveSingleLocalData(varname_KBDP_AddLimitByDay, limitAddB);


				$("#limit-add-zone input[value='"+limitAddByDay_freelimit+"']").attr("checked", "checked"); // Fix

				// let elm = document.createElement("input");
				// elm.value = limitAddByDay_freelimit;
				// elm.id = "add-limit-0";
				// elm.name = "kbdp-add-limit-by-day";
				// elm.type = "radio";
				// q("#limit-add-zone").appendChild = elm;
		}

	}

	function goIntoFriend() { // Có thể cần dùng về sau nếu bị nhảy bạn như trước, khoan xoá
		if (q('#kbdp-enable').checked == true) {
			var xpath = "//span[text()='Tải lại trang']";
			debug("Gặp lỗi tải: Trang này hiện không tồn tại, sẽ lấy dữ liệu thủ công");
			var button = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

			sessionStorage["GoIntoFriend_GetData"] = "true";

			if (button != null) {
				button.click();
			} else {
				location.href = location.href;
			}
		}
	}
	
	// 		var html = 'selectFriendAndScan kết bạn với <b class="stronger"><a target="_blank" href="' + _friend.getAttribute("FriendUrl") + '">' + _friend.getAttribute("FriendName") + '</a></b>';
				
	// 			html += '<span class="description-line">';
	// 			if (genderList[0] != "Không lọc giới tính") {
	// 				html += '<b class="strong"><img src="https://img.icons8.com/cotton/2x/gender.png" width="10"/> ' + _friend.getAttribute('gendervalid') + '</b> - ';
	// 			}

	// 			if (otherPlaceText_g != "tất cả" && otherPlaceText_g != "tat ca" && otherPlaceText_g != "all") {
	// 				html += '<br/><b class="strong cap"><img class="radius-3" src="https://icon-library.com/images/position-icon/position-icon-8.jpg" width="10"/> ' + _friend.getAttribute('placevalid') + '</b> ';
	// 			}
	// 			html += '</span>';
				
	// 			if (_friend.closest(".kbdp-scanned")) {
	// 				_friend.closest(".kbdp-scanned").setAttribute("placevalid", _friend.getAttribute('placevalid'));
	// 			}

	// 		/** Hành động bấm nút kết bạn hoặc giả lập bấm (noClickMode) **/

	// 			if (noClickMode == false) {
	// 				document.querySelectorAll(".valid-friend")[0].click();
	// 				// Check success sent
	// 				setTimeout(function() {
	// 					checkSentSuccess(0);
	// 				}, recheckSentSpeed_s * 1000);
	// 			}
				
	// 			document.querySelectorAll(".valid-friend")[0].classList.remove("valid-friend");
				
	// 			/** Hành động bấm nút kết bạn hoặc giả lập bấm (noClickMode) **/
	// 			added-show span").text($("#added-show span").text() * 1 + 1);
	// 			addAndRemoveClass(q("#added-show span"), "newData");

	// 			// showStack(html, "success", 7000, false, avatarLink);
	// 			showStatus(html);
	// 			return true;
			
	// 	}
	// 	return false;
	// }
	var objectsList = [];
	objectsList.push(varname_SyncDate);

	function displayAdded(){
		chrome.storage.local.get([varname_SyncCountAdded], function(data){
			let syncCountAdded = data[varname_SyncCountAdded];
			let localCounted;
			let counted = syncCountAdded * 1;
			if(isNaN(counted * 1)){
				localCounted = 0;
			}else{
				localCounted = syncCountAdded;
			}
			q("#added-show span").innerText = localCounted;
		});
	}

	// function deleteFriend(){
	// 	if(noClickMode === true){
	// 		showStatus("[Non-click mode] Simulating removal of " + selectFriendAndScan());
	// 	}else{
	// 		if(document.querySelectorAll(".invalid-friend")[0] !== undefined){
	// 			document.querySelectorAll(".invalid-friend")[0].click();
	// 			document.querySelectorAll(".invalid-friend")[0].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("RemovedItem");

	// 			showStatus("<i style='color:gray'>Removed " + document.querySelectorAll(".invalid-friend")[0].getAttribute("invalidInfo") + "</i>");
	// 			return true;
	// 		}
	// 	}
	// 	return false;
	// }

	// function deleteSpecificFriend(element){
	// 	let friendName = selectFriendAndScan();
	// 	if(noClickMode === true){
	// 		showStatus("[Non-click mode] Simulating removal of + selectFriendAndScan());
	// 	}else{

	// 		if(element.parentElement.nextElementSibling){

	
	function startAllTask(delay = 500) {
		if (kbdp_enabled !== true) {
			showStack("Cần <b class='orange blink-opacity'>kích hoạt lại công tắc</b> tool Kết Bạn Địa Phương tiếp tục chạy!", "warning", 15000);
			stopAllTask();
			return false;
		}

		setTimeout(dismissAllToasts, 5000); // Xóa hết mọi thông báo sau 5s, tránh xóa các thông báo quan trọng trước khi bắt đầu

		setTimeout(() => {
			sessionStorage["KBDP-Running"] = "true";
			let syncStartDelay = 100; // Đồng thời gian tránh chạy trước chạy sau

			// Interval đánh dấu phần tử khả dụng (realtime)
			scanAvailableFriendTask = setInterval(() => {
				if (q(SELECTOR.LeftPanel.AddButton)) {
					let notEffectedFriendButton = q(SELECTOR.LeftPanel.AddButton); // Các nút Friend chưa áp đặt xử lý
					if (!notEffectedFriendButton.closest(Selectors.AvailableFriend)) { // Nếu phần tử cha chưa có availableFriend class
						notEffectedFriendButton.classList.add(ClassName.AvailableFriend, "add-button"); // Đánh dấu cả nút để tránh xử lý nhầm
						notEffectedFriendButton.closest(Selectors.FriendParentElementInLeftPanel).classList.add(ClassName.AvailableFriend);
					}
				}
			}, syncStartDelay);

			setTimeout(selectFriendAndScan, syncStartDelay * 3); // Bắt đầu trễ hơn 3 lần

			$(".hidigitool-kbdp-logo-show").removeClass("stop-animation");

			if (document.querySelector('[name="kbdp-add-limit-by-day"]:checked') == null) {
				q("#add-limit-0").checked = true;
				showStack("Đã cài đặt về ngưỡng thấp nhất!");
				setLimit(q('[name="kbdp-add-limit-by-day"]:checked').value * 1);
			}

			if (!proUser && (q('[name="kbdp-add-limit-by-day"]:checked').value * 1 > limitAddByDay_freelimit)) {
				setLimit(limitAddByDay_freelimit);
			}
		}, delay);
	}
```
(function() {
    (qa("a[href='/friends/suggestions/']").length 0) {
        kbdp_link = kbdp_link_2;
        qa("a[href='/friends/suggestions/']")[0].click();
        saveSingleLocalData("KBDP-Link", kbdp_link_2);
    } else {
        saveSingleLocalData("KBDP-Link", kbdp_link);
    }
})();

q("#chat-support").style = "display:inline-block";
showAdded();
sessionStorage["KBDP-Running"] = String(kbdp_enabled);
// showStack("<i class='gray'>Đã kiểm tra xong, đang bắt đầu...</i>", "success", 2000startCountDown();

/** REMOVE FRIENDS & REFRESH **/

abortDialogTask = setInterval(function() {
    if (q('*[aria-label="OK"],*[aria-label="Hủy"],*[aria-label="Đóng"]')) {
        debug('Phát hiện cửa sổ cảnh báo fb !');
        var okButton = document.querySelectorAll('*[aria-label="OK"],*[aria-label="Hủy"],*[aria-label="Đóng"]');
        for (let i = 0; iButton.length; i++) {
            okButton[i].click();
            debug('Đã tự động bỏ qua cảnh báo giả không quen biết');
        }
    }
    checkFreeLimit();
}, 1000);
}, delay); // setTimeout
} // startAllTask

function stopAllTask() {
    clearInterval(abortDialogTask);
    sessionStorage["KBDP-Running"] = "false";
    $(".running-show").hide();
    $(".hidigitool-kbdp-logo-show").addClass("stop-animation");
    clearInterval(syncCountTask);
    clearInterval(addFriendTask);
    clearInterval(startCountDownTask);
    clearInterval(scanAvailableFriendTask);
    clearInterval(abortDialogTask);
}
```
	setInterval(() => {
    if (document.querySelector('#kbdp-app-info.hidden-panel')) {
        if (Math.random() > 0.2) {
            showTooltip("2TOOL - Auto Kết Địa Phương - Nhấn P để mở", 3000, document.querySelector("#main-kbdp-icon"));
        }
    }
}, 10000);

/** Countdown from W3SCHOOL **/
/** Includes addMinutes function from functions.js **/
function startCountDown() {
    debug("Reloading in: " + refreshMin + " minutes");

    var countDownDate = addMinutes(new Date(), refreshMin).getTime();
    startCountDownTask = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let time = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

        document.getElementById("timer_id_kbdp").innerHTML = time;

        if (document.title.includes("[")) {
            document.title = `[${time}] ${document.title.substr(8)}`;
        } else {
            document.title = `[${time}] ${document.title}`;
        }

        if (distance < 0) {
            clearInterval(startCountDownTask);
            document.getElementById("timer_id_kbdp").innerHTML = "Loading new results...";
            setTimeout(toKBDPLink, 3000);
        }
    }, 1000);
}
	/** Đếm ngược của W3SCHOOL **/
/** Kết thúc giới hạn trong facebook.com/friends **/
}else{
	/** Bên ngoài trang gợi ý - Xử lý lỗi nhấp chuột ra trang cá nhân **/
	if(location.href.indexOf("facebook.com") > -1 && location.href != "https://www.facebook.com/" && location.href != "https://web.facebook.com/"){
		if(location.href.indexOf("checkpoint") == -1 && document.querySelector('input[type="password"]') == null){
			if(location.href.indexOf("facebook.com/friends") == -1){
				if(sessionStorage["KBDP-Running"] == "true"){
					getSingleLocalData(varname_KBDP_Enabled).then((enable_status)=>{
						if(enable_status && (enable_status == true || enable_status == "true") ){//"true" chỉ dự phòng, có thể không cần thiết
							showStack("Đang phân tích dữ liệu...<br/><small class='orange'>Tắt Kết Bạn Địa Phương nếu muốn ngừng</small>");
							showStatus("Đang phân tích dữ liệu...<br/><small class='orange'>Tắt Kết Bạn Địa Phương nếu muốn ngừng</small>");

							waitIntroContent().then((introData) => {
								if(!q(SELECTOR.NotPanel.AddButton) && !q(SELECTOR.InLeftPanel.AddButton)){
									showAll("Người này không kết bạn được, đang trở lại...");
									toKBDPLink(3500);
								}else{
									friendsInReview.init(q(SELECTOR.NotPanel.AddButton));
									// Kiểm tra dữ liệu 2 - Bên ngoài gợi ý (bên trong tài khoản)
									let validPlace = checkValidPlace(introData);
									if(validPlace){
										friendsInReview.AddThisFriend().then(()=>{
											showAll("Đã nhấn kết bạn, đang trở lại danh sách gợi ý...");
											toKBDPLink(8000);
										});
									}else{
										const deleteNote = "Tiêu chí người này <b class='orange'>không đáp ứng</b>";
										friendsInReview.RemoveThisFriend(deleteNote).then(()=>{
											toKBDPLink(5000);
										});
									}								
								}
							}); // Wait for intro content
							
							// maximum wait time to prevent freezing or network issues
							setTimeout(function() {
								toKBDPLink(1000);
							}, timeoutWaitTask || 12000);
					} // enabled-kbdp
				});
					} // location.href.indexOf("facebook.com/friends")
	} // Not Checkpointed & Logged out
}/** End limit on URLs **/
}
