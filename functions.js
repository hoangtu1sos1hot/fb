//Chỉ đặt hàm dùng chung

//Lưu tạm để bảo trì chọn giới tính
saveSingleLocalData(varname_UserGenderSelect,"Không lọc giới tính");
function version(){
	return chrome.runtime.getManifest().version;
}
function migrateStorage() {
    const oldPrefix = 'HiFB_';
    const newPrefix = 'HiTOOL_';

    chrome.storage.local.get(null, function(items) {
        const newItems = {};
        debug("Current storage items:", items); // Xem các mục hiện tại

        // Duyệt qua từng mục trong storage
        for (const key in items) {
            if (key.startsWith(oldPrefix)) {
                const newKey = newPrefix + key.substring(oldPrefix.length);
                showStack("Tự sửa chữa dữ liệu phiên bản mới :<b><u>" + newKey + "</u></b>", "success", 5000);
                newItems[newKey] = items[key]; 
            }
        }

        // Lưu trữ các biến mới vào chrome.storage.local
        if (Object.keys(newItems).length > 0) {
            chrome.storage.local.set(newItems, function() {
                console.log('Migration completed. Updated keys:', newItems);

                const oldKeys = Object.keys(items).filter(key => key.startsWith(oldPrefix));
                if (oldKeys.length > 0) {
                	for(let item in oldKeys){
	                	chrome.storage.local.remove(oldKeys[item], function() {
	                        console.log('Old keys removed:', oldKeys[item]);

	                        // Kiểm tra lại sau khi xóa
	                        chrome.storage.local.get(null, function(updatedItems) {
	                            console.log("Updated storage items after removal:", updatedItems);
	                        });
	                    });
               		}//for
            
                }
            });
        }
    });
}







/** Chứa các function bổ trợ - dùng chung các app riêng **/

function lang(value){
return chrome.i18n.getMessage(value);
}


//debug theo lệnh từ server
function debug(t1, t2) {
    if (debugMode * 1 < 1) return false;
    if (t2) {
        console.log("%c[KBDP]%c " + t1, "background: darkblue; color: white; padding: 2px;", "color: gray;", t2);
    } else {
        console.log("%c[KBDP]%c " + t1, "background: darkblue; color: white; padding: 2px;", "color: gray;");
    }
}

function debug2(t1, t2) {
    if (debugMode * 1 < 2) return false;
    const timestamp = new Date().getTime();
    if (t2) {
        console.log("%c[KBDP]-2 %c " + timestamp + " : " + t1, "background: darkblue; color: white; padding: 2px;", "color: gray;", t2);
    } else {
        console.log("%c[KBDP]-2 %c " + timestamp + " : " + t1, "background: darkblue; color: white; padding: 2px;", "color: gray;");
    }
}

function debug3(t1, t2) {
    if (debugMode * 1 < 3) return false;
    const timestamp = new Date().getTime();
    if (t2) {
        console.log("%c[KBDP]-3 %c " + timestamp + " : " + t1, "background: darkblue; color: white; padding: 2px;", "color: gray;", t2);
    } else {
        console.log("%c[KBDP]-3 %c " + timestamp + " : " + t1, "background: darkblue; color: white; padding: 2px;", "color: gray;");
    }
}

function debugAlert(t){if(debugMode > 2) return false;alert(t)};


function qa(selector){
	return document.querySelectorAll(selector);
}
function q(selector){
	return document.querySelector(selector);
}
function waitEventList() {
	return new Promise((resolve) => {
	  const checkVariable = setInterval(() => {
		if (eventList !== undefined && eventList !== null) {
		  clearInterval(checkVariable);
		  resolve(eventList);
		}
	  }, 1000); // kiểm tra mỗi 100ms
	});
  }

function waitIntroContent() {
    return new Promise((resolve, reject) => {
		let selector = removeParentSelector(SELECTOR.InRightPanel.IntroTitle,SELECTOR.RightPanel);//Các phần tử h2 để tìm phần giới thiệu, Xoá rightpanel selector không tồn tại đi
        const element = document.querySelectorAll(selector);

        const checkContent = setInterval(() => {
			var introHeader = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.trim() === 'Giới thiệu');
            if (introHeader) {
				let introContentSelector = 'div.html-div';//Selector phần tử cha của Giới thiệu
				if(introHeader.closest(introContentSelector)){
					if(introHeader.closest(introContentSelector).textContent != ""){
						showStatus("Tải xong dữ liệu ! Đang phân tích...");
						resolve(introHeader.closest(introContentSelector).innerHTML);
					}
				}
                clearInterval(checkContent);
            }
        }, 300); // Kiểm tra mỗi 100 ms

        // Thêm logic dừng kiểm tra sau một khoảng thời gian nhất định (ví dụ: 10 giây)
        setTimeout(() => {
            clearInterval(checkContent);
            reject(new Error('Thời gian chờ đã hết.'));
        }, timeoutFriendLoad); // Dừng sau timeoutFriendLoad từ Server
    });
}

function addMinutes(date,minutes){
	return new Date(date.getTime() + minutes*60000);
}

function ddmmyyyy() {
    const today = new Date();
    const dd = (today.getDate() < 10 ? '0' : '') + today.getDate();
    const mm = (today.getMonth() < 9 ? '0' : '') + (today.getMonth() + 1); // Tháng bắt đầu từ 0, nên +1
    const yyyy = today.getFullYear();
    return dd + mm + yyyy;
}

function isddmmyyyyDateFormat(dateStr) {
    // Kiểm tra định dạng dd/mm/yyyy bằng regex
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
    return regex.test(dateStr);
}
function readTimestamp(timestamp) {
    // Tạo đối tượng Date từ timestamp (tính bằng mili giây, không nhân với 1000)
    const date = new Date(timestamp);

    // Lấy các thông tin về giờ, phút, giây, ngày, tháng, năm
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getFullYear();

    // Trả về chuỗi theo định dạng "HH:mm:ss dd/mm/yyyy"
    return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
}


function getCurrentTimestampInBangkok() {
    const now = new Date();
    const bangkokTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }));
    
    return Math.floor(bangkokTime.getTime() / 1000); // Trả về timestamp tính bằng giây
}

function dayDiff(time_before, time_after) {
    let dayBefore, dayAfter;

    // Kiểm tra định dạng cho time_before
    if (isddmmyyyyDateFormat(time_before)) {
        dayBefore = parseDate(time_before);
    } else if (time_before instanceof Date) {
        dayBefore = time_before;
    } else {
        throw new Error("Invalid input for time_before");
    }

    // Kiểm tra định dạng cho time_after
    if (isddmmyyyyDateFormat(time_after)) {
        dayAfter = parseDate(time_after);
    } else if (time_after instanceof Date) {
        dayAfter = time_after;
    } else {
        throw new Error("Invalid input for time_after");
    }

    // Tính toán chênh lệch ngày
    return Math.floor((dayAfter - dayBefore) / (1000 * 60 * 60 * 24));
}


function removeArrayItemByValue(arr,value){
	var index = arr.indexOf(value);
	if (index !== -1) {
	  arr.splice(index, 1);
	}
	return arr;
}

function removeConfig(){
		let toRemove = [
					varname_KBDP_AddLimitByDay,
					varname_UserGenderSelect,
					varname_UserPlaceList,
					varname_UserPlaceListOther,
					'versionNoticeReaded',
					'ket-ban-thanh-cong-hom-nay',
					'ket-ban-that-bai-hom-nay'
			 ];

			chrome.storage.local.remove(toRemove, function(Items) {
				alert("Đã xóa dữ liệu hoặc dữ liệu không hợp lệ! Vui lòng cấu hình lại");
				window.location.href = kbdp_link;
			});
	}
function removeVietnamese(str) {
  var AccentsMap = [
    "aàảãáạăằẳẵắặâầẩẫấậ",
    "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
    "dđ", "DĐ",
    "eèẻẽéẹêềểễếệ",
    "EÈẺẼÉẸÊỀỂỄẾỆ",
    "iìỉĩíị",
    "IÌỈĨÍỊ",
    "oòỏõóọôồổỗốộơờởỡớợ",
    "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
    "uùủũúụưừửữứự",
    "UÙỦŨÚỤƯỪỬỮỨỰ",
    "yỳỷỹýỵ",
    "YỲỶỸÝỴ"    
  ];
  for(var i=0; i<AccentsMap.length; i++) {
    var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
    var char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
}
function randomDelay(min=1000, max=5000) {//Đặt ở đây cho FriendsInReview dùng
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function saveSingleLocalData(key, value) {
	/** Đã ghi được, không dùng hàm read **/
	var insertData = {};
	insertData[key] = value;
	
	chrome.storage.local.set(insertData, function() {
		if (chrome.runtime.lastError) {
			debug("Error in saveSingleLocalData() => " + chrome.runtime.lastError);
		}else{
			debug2("[+] Đã lưu dữ liệu Local : "+JSON.stringify(insertData));
		}
	});
}

function saveMultiSyncData(insertData) {
	chrome.storage.local.set(insertData, function() {
		if (chrome.runtime.lastError) {
			debug("Error in saveMultiSyncData() => " + chrome.runtime.lastError);
		}else{
			debug2("[+] Đã lưu dữ liệu Local (Multi) : "+JSON.stringify(insertData));
		}
	});
}
function getSingleLocalData(key) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(key, (result) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(result[key]);
            }
        });
    });
}

function getMultiLocalData(array) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(array, (result) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(result);
            }
        });
    });
}

function removeParentSelector(selector,parentSelector){
	return selector.replaceAll(parentSelector,"").trim();
}
function checkValidPlace(htmlData) {
	htmlData = htmlData.toLowerCase();//Fix v6.0.2
	if(!otherPlaceText_g){
		getMultiLocalData([varname_UserPlaceList,varname_UserPlaceListOther]).then(localConfig => {
			placeList =  localConfig[varname_UserPlaceList];
			otherPlaceText_g = localConfig[varname_UserPlaceListOther];
		});
	}

	if(!otherPlaceText_g){otherPlaceText_g=""}
	if(!placeListAll){
		placeListAll = removeEmptyItem(placeList.concat(otherPlaceText_g));
	}
	

	var otherPlaceText_g_trim = otherPlaceText_g.toString().trim().toLowerCase();//Cần tối ưu xử lý
    if (otherPlaceText_g_trim == "tất cả" || otherPlaceText_g_trim == "tat ca" || otherPlaceText_g_trim == "all") {
        return "tất cả"; // All places will be valid
    }

    // Tìm phần tử đầu tiên thỏa mãn điều kiện
	//Cần tối ưu Regx để tăng hiệu suất tìm kiếm

    const validPlace = placeListAll.find(placeItem => htmlData.includes(placeItem));

	debug("Valid Place : ",validPlace);

    return validPlace || false; // Trả về placeItem hoặc false nếu không tìm thấy
}

// function checkValidPlace(htmlData){//old
	
// 	if(otherPlaceText_g == "Tất cả"){
// 		return "tất cả";
// 	}

// 	var placeListScanningName = "";

// 	//Scan 1 for innerText type
// 	for(let i=0;i<placeList.length;i++){
// 		placeListScanningName = placeList[i].trim();

// 		if(htmlData.indexOf(placeListScanningName) > -1 && placeListScanningName != ""){
// 			debug("Vị trí hợp lệ (Normal Scan) : "+ placeList[i]);
// 			return placeList[i].replaceAll("-","");	
// 		}
// 	}

// 	//Scan 2 for orther place setting
// 	let  placeOtherItem = getOtherPlaceText();
// 	if(placeOtherItem && placeOtherItem != ""){
// 		//Check round 3 by other place setting
// 		placeOtherItem = placeOtherItem.split(",");
// 			for(let i=0;i<placeOtherItem.length;i++){

// 					placeListScanningName = placeOtherItem[i].trim().toLowerCase();

// 										debug("Checking 2 : ",placeListScanningName);

										
// 					if(htmlData.indexOf(placeListScanningName) > -1 && placeListScanningName != ""){
// 						debug("Vị trí hợp lệ (Other Place Scan) : "+ placeOtherItem[i]);
// 						return placeOtherItem[i].replaceAll("-","");	
// 					}
// 				}
// 	}


// 	//Scan 3 for innerHTML type (deep scaning)
// 	htmlData = qa(right_Pannel_selector+ " ul")[0].innerHTML.toLowerCase();
// 	for(let i=0;i<placeList.length;i++){
// 		placeListScanningName = placeList[i].trim();
// 		if(htmlData.indexOf(placeListScanningName) > -1 && placeListScanningName != ""){
// 			debug("Vị trí hợp lệ (Deep Scan) : "+ placeList[i]);
// 			return placeList[i].replaceAll("-","");	
// 		}
// 	}

// 	//else all
// 	debug("Vị trí KHÔNG hợp lệ");
// 	return false;
// }

function getOtherPlaceText(){
	let _value = otherPlaceText_g;//q("#other-place-text").value;
		if(_value && _value.trim() != ""){
			return _value.trim();
		}else{
			return "";
		}
}

// function addSuccessfullyCounter(){
// 	chrome.storage.local.get('ket-ban-thanh-cong-hom-nay' , function(data){
// 		let nowCounterNumber = data['ket-ban-thanh-cong-hom-nay'];
// 		if(isNaN(nowCounterNumber*1)){
// 			showStack("Đã reset giá trị kết bạn thành công !");
// 			nowCounterNumber=1;
// 		}else{
// 			nowCounterNumber = nowCounterNumber*1 + 1;
// 		}
// 		saveSingleLocalData("ket-ban-thanh-cong-hom-nay",nowCounterNumber);
// 		KetBanThanhCong = nowCounterNumber;
// 		if($("#ket-ban-thanh-cong")){
// 			$("#ket-ban-thanh-cong").text(nowCounterNumber);
// 			addAndRemoveClass($("#ket-ban-thanh-cong")[0],"newData");
// 		}

// 	});
// }

function showNewData(value,element,timeout=1000){
	element.classList.add("newData");
	element.innerHTML = value;
	setTimeout(()=>{
		element.classList.remove("newData");
	},timeout)
}
function hasNewData(element,timeout=1000){
	element.classList.add("newData-lite");
	setTimeout(()=>{
		element.classList.remove("newData-lite");
	},timeout)
}

// function addFailureCounter(){
// 	chrome.storage.local.get('ket-ban-that-bai-hom-nay' , function(data){
// 		let nowCounterNumber =  data['ket-ban-that-bai-hom-nay'];
// 		if(isNaN(nowCounterNumber*1)){
// 			showStack("Đã reset giá trị thất bại !");
// 			nowCounterNumber=1;
// 		}else{
// 			nowCounterNumber = nowCounterNumber*1 + 1;
// 		}
// 		KetBanThatBai = nowCounterNumber;
// 		saveSingleLocalData("ket-ban-that-bai-hom-nay",nowCounterNumber);

// 		if($("#ket-ban-that-bai")){
// 			$("#ket-ban-that-bai").text(nowCounterNumber);
// 			addAndRemoveClass($("#ket-ban-that-bai")[0],"newData");
// 		}
// 	});
// }
function file(path){
	return chrome.runtime.getURL(path);
}
//files
const tickIconSVG = '<svg width="16px" style="transform:translateY(3px)" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#5324ff"></path> </g></svg>';
const objectiveSVG = `<svg width="16px" style="transform:translateY(3px)" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle style="fill:#ffebeb;" cx="255.999" cy="191.991" r="106.247"></circle> <g> <path style="fill:#FFC61B;" d="M256.001,512c-3.486,0-6.969-1.262-9.717-3.788c-1.845-1.697-45.718-42.229-90.24-101.212 c-60.643-80.344-91.393-152.899-91.393-215.651c0-29.982,6.742-58.694,20.042-85.341c3.539-7.094,12.157-9.977,19.258-6.435 c7.094,3.541,9.976,12.164,6.434,19.258c-11.292,22.629-17.02,47.027-17.02,72.519c0,116.776,126.28,250.321,162.663,286.364 c11.027-10.859,30.265-30.583,51.606-55.945c5.107-6.066,14.165-6.846,20.23-1.74c6.068,5.106,6.847,14.164,1.742,20.23 c-34.332,40.797-62.723,66.884-63.915,67.975C262.95,510.745,259.475,512,256.001,512z"></path> <path style="fill:#FFC61B;" d="M366.198,382.618c-2.761,0-5.549-0.794-8.01-2.452c-6.576-4.431-8.315-13.354-3.884-19.93 c42.685-63.35,64.331-120.171,64.331-168.887c0-89.677-72.957-162.634-162.634-162.634c-34.888,0-68.142,10.88-96.166,31.465 c-6.389,4.695-15.376,3.319-20.071-3.073c-4.695-6.391-3.319-15.377,3.073-20.071C175.823,12.807,214.955,0,256.001,0 C361.51,0,447.349,85.839,447.349,191.349c0,54.535-23.294,116.755-69.233,184.933 C375.345,380.397,370.812,382.618,366.198,382.618z"></path> </g> <polyline style="fill:#ffebeb;" points="307.506,264.898 256.001,237.82 204.495,264.898 214.332,207.545 172.663,166.928 230.249,158.561 256.001,106.379 281.754,158.561 339.339,166.928 297.67,207.545 "></polyline> <path style="fill:#FFC61B;" d="M256.001,71.388c-66.501,0-120.605,54.103-120.605,120.605S189.5,312.597,256.001,312.597 s120.605-54.103,120.605-120.605S322.503,71.388,256.001,71.388z M338.889,152.354l-47.602-6.916l-21.885-44.347 C300.1,105.597,325.914,125.328,338.889,152.354z M242.599,101.091l-21.885,44.347l-47.602,6.916 C186.089,125.328,211.901,105.597,242.599,101.091z M164.111,191.993c0-4.241,0.313-8.409,0.873-12.498l33.92,33.064l-7.644,44.574 C174.504,240.477,164.111,217.427,164.111,191.993z M216.362,274.88l39.639-20.839l39.639,20.839 c-12.009,5.766-25.452,9.001-39.639,9.001C241.814,283.881,228.369,280.646,216.362,274.88z M319.999,257.84 c-1.311-2.325-3.274-4.317-5.812-5.651l-51.505-27.079c-4.184-2.198-9.179-2.198-13.363,0l-25.755,13.541l4.919-28.68 c0.798-4.658-0.747-9.41-4.129-12.708l-20.837-20.31l28.796-4.184c4.678-0.679,8.719-3.617,10.811-7.854l12.877-26.094 l12.877,26.094c2.092,4.237,6.134,7.175,10.811,7.854l28.796,4.184l-20.837,20.31c-5.677,5.535-5.793,14.625-0.26,20.303 c5.533,5.678,14.625,5.795,20.305,0.26l39.324-38.334c0.559,4.09,0.873,8.257,0.873,12.498 C347.89,217.796,337.183,241.133,319.999,257.84z"></path> </g></svg>`;

function checkValidGender(){
	if(genderList[0] == "Không lọc giới tính"){
		return true;
	}else{
		let now_gender = get_friendGender();
		debug("Giới tính : "+now_gender);
		for(let i=0;i<genderList.length;i++){
			if(genderList[i] == now_gender){
				debug("Giới tính hợp lệ : "+ now_gender);
				return now_gender;
			}
		}
		debug("Giới tính không hợp lệ")
		return false;
	}
}
function get_friendGender(){
	var user_Gender = noUndefined;
	var loopData = q(right_Pannel_selector).querySelectorAll("span");
	for(let i=0 ; i < loopData.length ; i++){
		if(loopData[i] == undefined) continue;
		
		if(loopData[i].innerText.indexOf(male_Gender_text[0]) > -1  || loopData[i].innerText.indexOf(male_Gender_text[1]) > -1){
			user_Gender = "Nam";
			break;
		}else if(loopData[i].innerText.indexOf(female_Gender_text[0]) > -1  || loopData[i].innerText.indexOf(female_Gender_text[1]) > -1){
			user_Gender = "Nữ";
			break;
		}
	}
	return user_Gender;
}

function showStatus(html,delay=3000) {
	$("#kbdp-snackbar").html(html);
	$("#kbdp-snackbar").fadeOut(100).removeClass("show");
	$("#kbdp-snackbar").fadeIn(300).addClass("show");
	setTimeout(function(){$("#kbdp-snackbar").fadeOut(100).removeClass("show")}, delay);
  }

function showAll(html, duration = 5000, toastType = "success", dismissAll = false, iconLink = defaultIcon){
	showStack(html, toastType, duration, dismissAll, iconLink)
	showStatus(html,duration);
}
function checkFreeLimit(){
	if(!proUser){
		//debug("limitAddByDay_freelimit",limitAddByDay_freelimit);
		if($("#limit-add-zone input:checked").value*1 > limitAddByDay_freelimit){//doing
			setLimit(limitAddByDay_freelimit);
		}
	}
}
function show_Loading(text = "Đang xử lý...")
{
	$(SELECTOR.RightPanel).css("opacity","0.05");
	if(q("#hidigitool-overlay-protect")){
		$("#hidigitool-overlay-protect").addClass("loading");
	}
	showStatus(text);
	/** if(document.querySelector(".HiTOOL_Loading") != null){
		$(".HiTOOL_Loading").show();
	}else{
		debug("Not contain .HiTOOL_Loading");
	}
	**/
}

function hide_Loading(){
	$(SELECTOR.RightPanel).css("opacity","1");
	if(q("body")) q("body").style.opacity = "1";
	if(q("#hidigitool-overlay-protect")){
		$("#hidigitool-overlay-protect").removeClass("loading");
	}
	/** $(".HiTOOL_Loading").hide();
	$(right_Pannel_selector).show();
	**/
}
function showFriendLoading(){
	$("#loading-overlay").show();
}

function showFriendLoading(){
	$("#loading-overlay").hide();
}


function ScrollInto(element) {
	if(element != undefined && element != null){
		element.scrollIntoView();
	}
}

function log(mes){
	console.log(mes);
}

function capitalizeWords(str) {
    return str
        .toLowerCase() // chuyển hết về chữ thường
        .split(' ')    // tách chuỗi thành mảng từ
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // viết hoa chữ cái đầu mỗi từ
        .join(' ');    // nối lại thành chuỗi
}

function removeEmptyItem(arr) {
    return arr.filter(element => element !== null && element !== undefined && element !== '');
}
function showSettingPanel(){
	// kbdp_enabled = false;
	// stopAllTask();
	// //$("#running-show").hide();
	if(document.querySelector("#hidigitool-kbdp-setting-panel")){
		if(document.querySelector("#hidigitool-kbdp-setting-panel").style.display != "block"){
			$("#hidigitool-kbdp-setting-panel")?.show();
		}
	}
}
function loadConfig(){
	//Lỗi cần tối ưu, hàm này chỉ gọi khi trong link kbdp
	// Gọi hàm để thực hiện chuyển đổi phiên bản
	migrateStorage();

	configList = [
		varname_UserPlaceList,
		varname_UserPlaceListOther,
		varname_UserGenderSelect,
		varname_KBDP_Enabled,
		varname_KBDP_AddLimitByDay,
		varname_SyncCountAdded,
		varname_SyncDate,
		varname_BlacklistName,
		'versionNoticeReaded',
		'removeFriends',
		'ket-ban-thanh-cong-hom-nay',
		'ket-ban-that-bai-hom-nay'
	];
	chrome.storage.local.get(configList,function(data){

		debug("loadConfig configList",configList);

		configList = data;
		if(configList["removeFriends"] == undefined) {
			saveSingleLocalData("removeFriends","");
		}else{
			RemoveFriendList = configList["removeFriends"];
		}

		debug("Remove List ", RemoveFriendList);

		//debugMode = configList["removeFriends"];

		sessionStorage["KBDP-Running"] = String(configList[varname_KBDP_Enabled]);

		if(configList['versionNoticeReaded'] != undefined && configList['versionNoticeReaded'] != null){
			versionNoticeReaded = configList['versionNoticeReaded'];

		}else{
			configList['versionNoticeReaded'] = version();
		}

		if(compareVersions(versionNoticeReaded,version())){
			//Chỉ hiện khi có khác biệt phiên bản ở 2 phần tử version đầu, từ x.y.xx.yy thì xx.yy là các bản update fix lỗi nhỏ ko dc tính
			if(q("#myModal")){
				q("#myModal").style.display = "block";
			}
		}

		//document.getElementById("myModal").style.display = "block";
		placeList = configList[varname_UserPlaceList] == undefined ? undefined : configList[varname_UserPlaceList];
		
		if(configList[varname_KBDP_Enabled] != undefined){
			if(configList[varname_UserPlaceList] != undefined){
				placeList = configList[varname_UserPlaceList].toLowerCase().split(",");
			}
			if(configList[varname_UserGenderSelect] != undefined){
				genderList = configList[varname_UserGenderSelect].split(",");
			}
			if(configList[varname_BlacklistName] != undefined){
				listNameBlackList = configList[varname_BlacklistName].trim().toLowerCase().split(",");
			}
		} 
		

		if(configList[varname_KBDP_Enabled] != undefined){
			 kbdp_enabled = configList[varname_KBDP_Enabled];
		}else{
			saveSingleLocalData(varname_KBDP_Enabled,true);
		}

		if(isNaN(configList['ket-ban-thanh-cong-hom-nay']*1)){
			if(q("#ket-ban-thanh-cong")) {
				KetBanThanhCong = 0;
				q("#ket-ban-thanh-cong").innerText = 0;
			}
		}else{
			if(q("#ket-ban-thanh-cong")){
				 KetBanThanhCong = configList['ket-ban-thanh-cong-hom-nay'];
				q("#ket-ban-thanh-cong").innerText = KetBanThanhCong;
			}
		}


		if(isNaN(configList['ket-ban-that-bai-hom-nay']*1)){
			if(q("#ket-ban-that-bai")){
				KetBanThatBai = 0;
				q("#ket-ban-that-bai").innerText = 0;
			}
		}else{
			if(q("#ket-ban-that-bai")){
				KetBanThatBai = configList['ket-ban-that-bai-hom-nay'];
				q("#ket-ban-that-bai").innerText = KetBanThatBai;
			}
		}

		

	
		if(location.href.indexOf("actions=kbdp") > -1){
			createSettingPanel();//errr

			otherPlaceText_g = configList[varname_UserPlaceListOther]?.toLowerCase();
			if(!otherPlaceText_g) otherPlaceText_g = "";
			otherPlaceText_g = otherPlaceText_g.split(",");
			if(!placeList) placeList = [""];//Fix để không lỗi ở concat
	
			debug("LoadConfig placeList",placeList);
			debug("LoadConfig otherPlaceText_g",otherPlaceText_g);

			//Gộp 2 placeList
			placeListAll = removeEmptyItem(placeList.concat(otherPlaceText_g));


			debug("LoadConfig placeListAll",placeListAll);
			if(placeListAll && placeListAll.length == 0){
				showSettingPanel();
			}
			
			if(!configList[varname_KBDP_AddLimitByDay] || configList[varname_KBDP_AddLimitByDay] == 0){
				if(q("input[name='kbdp-add-limit-by-day'].free")){//selector
					q("input[name='kbdp-add-limit-by-day'].free").click();
				}else{
					q("input[name='kbdp-add-limit-by-day']").click();
				}
			}

			/**
			 * 
			 * suggestions:1 Error handling response: TypeError: show_Loading is not a function
    at createSettingPanel (chrome-extension://mjgfhahcmnbbmolopombeaklmdnakmml/lib/functions.js:564:4)
    at chrome-extension://mjgfhahcmnbbmolopombeaklmdnakmml/lib/functions.js:418:4
			 * 
			 * **/
			if(configList[varname_UserPlaceList] != undefined){
				q("#setting-placelist-result").value = configList[varname_UserPlaceList];
			}
			if(configList[varname_UserPlaceListOther] && q("#other-place-text")){
					q("#other-place-text").value = configList[varname_UserPlaceListOther];
					let places_ = q("#other-place-text").value.toLowerCase();
					if(places_ == "tat ca" || places_ == "tất cả" || places_ == "all"){
						q("#ChayTatCa").checked = true;
						q("#other-place-text").style = "display:none";
						q("#other-place-text").setAttribute("readonly","readonly");


						q("#vung-mien").style ="display:none";
						$(".hide-chay-tat-ca").hide();
						$(".show-chay-tat-ca").fadeIn();


					}else{
							q("#ChayTatCa").checked = false;
							q("#other-place-text").style = "display:inline-block";
							q("#other-place-text").removeAttribute("readonly");


								q("#vung-mien").style ="display:inline-block";
								$(".hide-chay-tat-ca").fadeIn();
								$(".show-chay-tat-ca").hide();


					}
					debug("Đã điền placeOtherItem vào ô");
			}
		}
	});
}

	/** Khởi tạo thanh thông báo **/


	/** direct lib vanilatoast **/
	!function(t,e){try{"object"==typeof exports?module.exports=e():t.VanillaToasts=e()}catch(t){console.log("Isomorphic compatibility is not supported at this time for VanillaToasts.")}}(this,function(){function t(){var t=document.createElement("div");t.id="vanillatoasts-container",document.body.appendChild(t),VanillaToasts.create=function(t){function a(){document.getElementById("vanillatoasts-container").removeChild(n),delete VanillaToasts.toasts[n.id]}var n=document.createElement("div");if(n.id=++e,n.id="toast-"+n.id,n.className="vanillatoasts-toast",t.title){var o=document.createElement("h4");o.className="vanillatoasts-title",o.innerHTML=t.title,n.appendChild(o)}if(t.text){var i=document.createElement("p");i.className="vanillatoasts-text",i.innerHTML=t.text,n.appendChild(i)}if(t.icon){var s=document.createElement("img");s.src=t.icon,s.className="vanillatoasts-icon",n.appendChild(s)}return"function"==typeof t.callback&&n.addEventListener("click",t.callback),n.hide=function(){n.className+=" vanillatoasts-fadeOut",n.addEventListener("animationend",a,!1)},t.timeout&&setTimeout(n.hide,t.timeout),t.type&&(n.className+=" vanillatoasts-"+t.type),n.addEventListener("click",n.hide),document.getElementById("vanillatoasts-container").appendChild(n),VanillaToasts.toasts[n.id]=n,n},VanillaToasts.setTimeout=function(t,e){VanillaToasts.toasts[t]&&setTimeout(VanillaToasts.toasts[t].hide,e)}}"complete"===document.readyState?t():window.addEventListener("DOMContentLoaded",t),VanillaToasts={create:function(){console.error(["DOM has not finished loading.","\tInvoke create method when DOMs readyState is complete"].join("\n"))},setTimeout:function(){console.error(["DOM has not finished loading.","\tInvoke create method when DOMs readyState is complete"].join("\n"))},toasts:{}};var e=0;return VanillaToasts});
	/** direct lib vanilatoast.js **/
	function dismissAllToasts() {
		const toasts = document.querySelectorAll('.vanillatoasts-toast');
		toasts.forEach(toast => {
			toast.remove();
		});
	}
	var defaultIcon = file("img/notification.jpg");
	function showStack(text, toastType = "success", duration = 7000, dismissAll = false, iconLink = defaultIcon) {
		var validToastTypes = ['info', 'warning', 'success', 'error']; // Danh sách các loại toast hợp lệ

		// Kiểm tra xem DOM đã sẵn sàng chưa
		if (document.readyState !== 'complete') {
			setTimeout(() => {
				showStack(text, toastType, duration, dismissAll, iconLink); // Thử lại sau 100ms
			}, 100);
			return;
		}

		if (dismissAll !== false) {
			VanillaToasts.toasts = {}; // Xóa tất cả toast (hoặc tùy chỉnh theo ý bạn)
		}

		if (!validToastTypes.includes(toastType)) {
			toastType = 'info'; // Quay lại loại mặc định
		}
		if(validToastTypes != 'error'){
			validToastTypes = '-';
		}
		// Tạo toast mới
		VanillaToasts.create({
			text: text,
			icon: iconLink,
			type: toastType,
			timeout: duration
		});
	}

	function randomClick(element, delay = 1000) {
		return new Promise((resolve) => {
			setTimeout(() => {
				const mouseOverEvent = new MouseEvent('click', {
					bubbles: true,
					cancelable: true,
				});
				element.dispatchEvent(mouseOverEvent);
				resolve(); // Kết thúc promise khi sự kiện đã được dispatch
			}, delay);
		});
	}
	



function compareVersions(version1, version2) {
	try {
		// version1 = "6.1.1";//Test only
		// version2 = "6.1.2.2";
		
		debug("Compare Versions : ",version1 + " / "+version2);
		// Kiểm tra đầu vào có phải là chuỗi không
		if (typeof version1 !== 'string' || typeof version2 !== 'string') {
			throw new Error('Invalid input type in version comparing');
		}

		// Tách các phiên bản thành các phần tử số nguyên
		const v1Parts = version1.split('.').map(Number);
		const v2Parts = version2.split('.').map(Number);

		// Kiểm tra có phải tất cả phần tử đều là số hợp lệ không
		if (v1Parts.some(isNaN) || v2Parts.some(isNaN)) {
			throw new Error('Invalid version format');
		}

		// Chỉ so sánh 3 phần đầu tiên
		for (let i = 0; i < 3; i++) {
			if ((v1Parts[i] || 0) < (v2Parts[i] || 0)) {
				return true; // version2 lớn hơn version1 ở phần này
			} else if ((v1Parts[i] || 0) > (v2Parts[i] || 0)) {
				return false; // version1 lớn hơn hoặc bằng version2 ở phần này
			}
		}

		return false; // Không có thay đổi ở 3 phần đầu tiên

	} catch (error) {
		// Xử lý lỗi và trả về true nếu có lỗi
		console.error("Error occurred in isNewVersionHasNotice:", error.message);
		return true;
	}
}



function showTooltip(text, duration = 2000, element) {
	//Hàm để show tooltip tự động
    return new Promise((resolve, reject) => {
        try {
            // Nếu không có element được truyền vào, sử dụng element mặc định
            if (!element) {
                element = document.querySelector("#hidigitool-kbdp-go");
            }

            // Thay đổi nội dung tooltip nếu có text hoặc nếu element không có giá trị 'tip-left'
            if (text || element.getAttribute('tip-left') === "") {
                element.setAttribute('tip-left', text);
            }

            // Hiện tooltip ngay lập tức
            element.classList.add('tip-show');

            // Ẩn tooltip sau thời gian duration
            setTimeout(() => {
                element.classList.remove('tip-show');
                resolve();  // Hoàn thành Promise sau khi tooltip ẩn
            }, duration);
        } catch (error) {
            reject(error);  // Nếu có lỗi, reject Promise
        }
    });
}


	function toKBDPLink(delay = 100){
		showAll("Đang về danh sách kết bạn...");
		setTimeout(()=>{
			location.href = kbdp_link;
		},delay);
	}

	function createSettingPanel(){
			debug("createSettingPanel check configList",configList);
			limitAddByDay = configList[varname_KBDP_AddLimitByDay]*1;
	
			if(isNaN(limitAddByDay)){
				saveSingleLocalData(varname_KBDP_AddLimitByDay,limitAddByDay_freelimit);
			}else{
				/** Giá trị limit hợp lệ **/
				if(proUser == false){
					if(limitAddByDay > limitAddByDay_freelimit);
					saveSingleLocalData(varname_KBDP_AddLimitByDay,limitAddByDay_freelimit);
					setTimeout(function(){window.location.href=kbdp_link},5000);
				}
			}

			let Enabled = configList[varname_KBDP_Enabled];
			if(configList[varname_KBDP_Enabled] == undefined || (String(Enabled) != "true" && String(Enabled) != "false")){
				debug("Reset giá trị kích hoạt công cụ về true");
				saveSingleLocalData(varname_KBDP_Enabled,true);
			}

			let tieuChiKetBan = "";

			/** Load cấu hình điều khiển bật/tắt kbdp **/
			let configKDBPEnabled = configList[varname_KBDP_Enabled];
			if(String(configKDBPEnabled) == "true"){
				debug("KBDP đang bật");
				kbdp_enabled = true;
				q("#kbdp-enable").checked = true;		
			}else if(String(configKDBPEnabled) == "false"){
				debug("KBDP đang tắt");
				kbdp_enabled = false;
				q("#kbdp-enable").checked = false;
			}else{
				debug("Reset kích hoạt chạy = true");
				kbdp_enabled = true;
				saveSingleLocalData(varname_KBDP_Enabled,true);
				q("#kbdp-enable").checked = true;
			}
			/** load cấu hình điều khiển bật/tắt kbdp **/
			

			/** load gender config  **/
			let SoGioiTinh = 0;
			if(configList[varname_UserGenderSelect] == undefined){
				// alert("Không tìm thấy cấu hình giới tính để kết bạn, vui lòng cấu hình lại");
				// showSettingPanel();

			}else{

				//$("#setting-genderlist-result").val(genderList.toString());

				let checkbox = qa("#gioi-tinh input[type='checkbox']");
				let danhSachGioiTinhKetBan = "Cấu hình hiện tại kết bạn <b class='stronger'>";
				
				for(var i=0 ; i <checkbox.length;i++){
					for(var j=0;j < genderList.length; j++){
						if(checkbox[i].value == genderList[j]){
							qa("#gioi-tinh input[type='checkbox']")[i].checked = true;
							SoGioiTinh++;
							danhSachGioiTinhKetBan+=checkbox[i].value + ",";
							break;
						}
					}
				}
				danhSachGioiTinhKetBan.substring(0,danhSachGioiTinhKetBan.length-1);
				danhSachGioiTinhKetBan = danhSachGioiTinhKetBan.substring(0,danhSachGioiTinhKetBan.length-1) +'</b>';

				danhSachGioiTinhKetBan = '';//Tạm bỏ qua vì chưa xử lý giới tính
				tieuChiKetBan+=danhSachGioiTinhKetBan;

			}

			/** load config placeList **/
			if(configList[varname_UserPlaceList] == undefined && configList[varname_UserPlaceListOther] == undefined){
				stopAllTask();
				showStack("<b class='orange blink-opacity'>Không tìm thấy cấu hình địa điểm</b> kết bạn trước đó, vui lòng cài đặt địa điểm để tool chạy");

				setTimeout(function(){showSettingPanel()},2000);

			}else{
				//Load cấu hình blacklistName keywork
				if(configList[varname_BlacklistName] != undefined && configList[varname_BlacklistName] != ""){
					q("#NameBlacklist").innerText = configList[varname_BlacklistName];
					showStack("<div class='description-line'>Từ khóa loại trừ <b class='stronger'>"+configList[varname_BlacklistName]+"</b></div>");
				}

				let TempValue;
				let TempPlaceList = "";
				//Load cấu hình vị trí
				//Xử lý tối ưu xác định vị trí
				if(placeList){
						placeList = placeList.toString().replaceAll(" (Thành Phố)","").split(",");

				}else{
						//showSettingPanel();
				}


				//Xử lý thêm placelist không dấu
				for(var place in placeList){
					TempPlaceList+=","+placeList[place];
					let noVietnamesePlace = removeVietnamese(placeList[place]);

					TempValue = placeList[place].replaceAll(" ","-");
					placeList.indexOf(TempValue) == -1 ? TempPlaceList+=","+TempValue : null;

					TempValue = placeList[place].replaceAll(" ","");
					placeList.indexOf(TempValue) == -1 ? TempPlaceList+=","+TempValue : null;

					placeList.indexOf(noVietnamesePlace) == -1 ? TempPlaceList+=","+noVietnamesePlace : null;

					TempValue = noVietnamesePlace.replaceAll(" ","-")
					placeList.indexOf(TempValue) == -1 ? TempPlaceList+=","+TempValue : null;

					TempValue = noVietnamesePlace.replaceAll(" ","")
					placeList.indexOf(TempValue) == -1 ? TempPlaceList+=","+TempValue : null;
				}
				

				//Đặt đoạn for ở đây để không duyệt qua các tỉnh bị chuyển đổi ký tự (giúp nhanh hơn)
				let label_checkbox = qa(".tinh-thanh label");
				let SoTinhThanh = 0;
				let danhSachTinhKetBan = "";
				let checkbox = qa(".tinh-thanh input[type='checkbox']");
				


				if(configList[varname_UserPlaceListOther]  && configList[varname_UserPlaceListOther]!=""){
					SoTinhThanh=configList[varname_UserPlaceListOther].trim().split(",").length;
				}
		
				for(var i=0 ; i <checkbox.length;i++){
					for(var j=0;j < placeList.length; j++){
						if(label_checkbox[i].innerText.toLowerCase() == placeList[j]){

							//Label Title == inner not Thanh Pho => Thanh Pho => 
							// if(label_innerText == label_checkbox.getAttribute("title").toLowerCase()){
							// 	//Đây là thành phố
							// }
							checkbox[i].checked = true;
							SoTinhThanh++;
							danhSachTinhKetBan +=label_checkbox[i].innerText +", ";
							break;
						}
					}
				}

				//Gán lại thành danh sách đã chuyển đổi ký tự (tăng cường độ chính xác)
				placeList = TempPlaceList.trim().replaceAll(" (Thành Phố)","").replace(",","").split(",");
	

				//debug(placeList);//Temp

				if(SoTinhThanh == 0 || SoGioiTinh == 0){
					removeConfig();
				}
				danhSachTinhKetBan = danhSachTinhKetBan.substring(0,danhSachTinhKetBan.length-2);
				tieuChiKetBan += objectiveSVG + " Đã chọn <b class='strong'>"+SoTinhThanh+"</b> vị trí";
				tieuChiKetBan+= (danhSachTinhKetBan == "" ? "" : " : <b class='stronger'>"+danhSachTinhKetBan+"</b>");
				tieuChiKetBan+="</div>";
			
			}

			if(configList[varname_UserPlaceListOther] && configList[varname_UserPlaceListOther] != ""){
				tieuChiKetBan+="<div class='description-line'>"+objectiveSVG+" Vị trí nhập tay : <b class='strong'>"+configList[varname_UserPlaceListOther]+'</b></div>';
			}
			
			if(tieuChiKetBan.trim() != ""){
				showStack("<div class='description-line'>"+tieuChiKetBan+"</div>","info",15000);
			}else{
				stopAllTask();
				showStack("Không có <b class='strong blink-opacity'>tiêu chí kết bạn</b>, vui lòng cấu hình trước khi chạy !","error",500000)
			}

			/** load cấu hình kết bạn tối đa/ngày **/
			let limitInput = qa("input[name='kbdp-add-limit-by-day']");



			if(limitAddByDay != undefined){

			
				debug("Đã tải cấu hình limit đã chọn trước đó : " + limitAddByDay);
				let validLimitValue = false;

				for(let i=0;i<limitInput.length;i++){
					if(limitInput[i].value == limitAddByDay){
						$("input[name='kbdp-add-limit-by-day'][value="+limitAddByDay+"]").attr('checked', 'checked');
						
						validLimitValue = true;
									
						break;
					}
				}
				
			}else{
				limitInput[0].checked = true;
			}

			/** Hiển thị đã mời trước nếu đúng ngày **/
			(function(){
				let counted = configList[varname_SyncCountAdded];
				let LastUpdateDay = configList[varname_SyncDate];
				let today = ddmmyyyy();

				if(LastUpdateDay == today){
					if(counted != null && !isNaN(counted*1)){
						q("#added-show span").innerText = counted;
					}
				}


			})();
			

			/** load cấu hình kết bạn tối đa/ngày **/
} /** create Setting Panel **/


