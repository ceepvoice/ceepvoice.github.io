// ĐỒNG HỒ HIỂN THỊ ĐẦU TRANG 

// Hàm khởi tạo đồng hồ
function clientTime() 
{
    // Lấy Object ngày hiện tại
    var today = new Date();

    // Giờ, phút, giây hiện tại
     var t = today.toLocaleTimeString();

    // Ghi ra trình duyệt
    document.getElementById('time').innerHTML = t;

    // Dùng hàm setTimeout để thiết lập gọi lại 0.5 giây / lần
    var t = setTimeout(function() {
        clientTime();
    }, 500);
}

// Hàm này có tác dụng chuyển những số bé hơn 10 thành dạng 01, 02, 03, ...
function checkTime(i) 
{
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};

// KIỂM TRA TỐC ĐỘ INTERNET

	

online = window.navigator.onLine;

navigator.connection.addEventListener('change', internetInfo);
function internetInfo() {
  // Network type that browser uses
  document.getElementById('internet_type').innerHTML = navigator.connection.type;
  document.getElementById('internet_downlinkMax').innerHTML=navigator.connection.downlinkMax + 'Mb/s';
  document.getElementById('internet_effectiveType').innerHTML=navigator.connection.effectiveType;
  document.getElementById('internet_saveData').innerHTML= 'SD :'+navigator.connection.saveData;
  // Vàng và nhấp nháy vàng nếu kết nối dưới 0.5 Mb và xanh nếu kết nối > 1 Mb 
  if (navigator.connection.downlink <= 0.5) {
  	document.getElementById('internet_downlink').innerHTML= '<yellow>'+navigator.connection.downlink + 'Mb/s</yellow>';
 	$("#internet_downlink").addClass("warningFlash");
} else if ( navigator.connection.downlink >= 1 ) {
  	document.getElementById('internet_downlink').innerHTML= '<green>'+navigator.connection.downlink + 'Mb/s</green>';
  	$("#internet_downlink").removeClass("warningFlash");
} else {
	document.getElementById('internet_downlink').innerHTML= navigator.connection.rtt;
	$("#internet_downlink").removeClass("warningFlash");
};
  // Đỏ và nhấp nháy nếu rtt dưới 100ms 
  if (navigator.connection.rtt >= 100) {
  	document.getElementById('internet_rtt').innerHTML= '<red>'+navigator.connection.rtt + 'ms</red>';
 	$("#internet_rtt").addClass("warningFlash");
} else {
  	document.getElementById('internet_rtt').innerHTML= navigator.connection.rtt + 'ms';
  	$("#internet_rtt").removeClass("warningFlash");
};
  // Đỏ và nhấp nháy biểu tượng internet nếu mất kết nối
  if (navigator.onLine) {
  	document.getElementById('internet_connect').style.color = 'green';
 	$("#internet_connect").removeClass("warningFlash");
} else {
  	document.getElementById('internet_connect').style.color = 'red';
  	$("#internet_connect").addClass("warningFlash");
}
};
	