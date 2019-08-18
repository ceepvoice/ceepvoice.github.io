// CÁC BIẾN ĐẾM QUAN TRỌNG 
var postNumber = 10 ; // Đây là số bài viết sẽ hiển thị ở mỗi chủ đề trong trang chủ
var color = ['#FF0000','#FF3300','#FFFF00','#00CC00','#009999','#00FFFF','#9900CC','#FF0099','#FF6600','#CCFF33','#660000','#CC0099','#003300']; // Đây là các màu sắc mà nó sẽ border hình ảnh cái bài viết hiển thị trên trang chủ

// CÁC BIẾN THIẾT LẬP MÀU SẮC TÙY CHỈNH CHO NGƯỜI DÙNG
var categoryColor = '#0e540f'; // Màu sắc cho khung category 

function userColor(){
	$('.category').css ('background-color',categoryColor);
};
// MỘT SỐ HÀM KIỂM TRA LỖI TRONG TRANG
function checkError() {
	// KIỂM TRA SỐ BÀI VIẾT postNumber HIỂN THỊ CÓ BẰNG SỐ MÀU SẮC TRONG BIẾN COLOR KHÔNG
	if (postNumber != color.length){
		document.getElementById('logging').innerHTML = "Thiết lập không cân bằng giữa postNumber và số lượng màu sắc có trong biến color";
	}
}
// ĐỒNG HỒ HIỂN THỊ ĐẦU TRANG 

// Hàm khởi tạo đồng hồ
function clientTime() 
{
    // Lấy Object ngày hiện tại
    var today = new Date();
    // Giờ, phút, giây hiện tại
     var t = today.toLocaleTimeString();
    // Ghi ra trình duyệt
    $('#time').html (t);
    // Dùng hàm setTimeout để thiết lập gọi lại 0.5 giây / lần
    setTimeout(function() {
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
  $('#internet_type').html(navigator.connection.type+'');
  $('#internet_downlinkMax').html(navigator.connection.downlinkMax + ' Mb/s');
  $('#internet_effectiveType').html(navigator.connection.effectiveType);
  
  // Xanh nếu save data vàng nếu không save data
  if (navigator.connection.saveData == false) {
  	$('#internet_saveData').html( navigator.connection.saveData+'');
  	$('#internet_saveData').css('color','#d15706');
  } else {
  	$('#internet_saveData').html('<green>'+navigator.connection.saveData+'</green>');
  };
  // Vàng và nhấp nháy vàng nếu kết nối dưới 0.5 Mb và xanh nếu kết nối > 1 Mb 
  if (navigator.connection.downlink <= 0.5) {
  	$('#internet_downlink').html(navigator.connection.downlink + 'Mb/s');
  	$('#internet_downlink').css('color','#d15706');
  	$("#internet_downlink").addClass("warningFlash");
  } else if ( navigator.connection.downlink >= 1 ) {
  	$('#internet_downlink').html('<green>'+navigator.connection.downlink + 'Mb/s</green>');
  	$("#internet_downlink").removeClass("warningFlash");
  } else {
  	$('#internet_downlink').html(navigator.connection.downlink+' Mb/s');
  	$("#internet_downlink").removeClass("warningFlash");
  };
  // Đỏ và nhấp nháy nếu rtt dưới 100ms 
  if (navigator.connection.rtt > 100) {
  	$('#internet_rtt').html('<red><b>'+navigator.connection.rtt + 'ms</b></red>');
  	$("#internet_rtt").addClass("warningFlash");
  } else {
  	$('#internet_rtt').html(navigator.connection.rtt + 'ms');
  	$("#internet_rtt").removeClass("warningFlash");
  };
  // Đỏ và nhấp nháy biểu tượng internet nếu mất kết nối
  if (navigator.onLine) {
  	$('#internet_connect').css('color', 'green');
  	$('#internet_connect').html('Connect');
  	$("#internet_connect").removeClass("warningFlash");
  } else {
  	$('#internet_connect').css('color', 'red');
  	$('#internet_connect').html('Disconnect');
  	$("#internet_connect").addClass("warningFlash");
  }
};
// ĐOẠN JS ĐỂ LÀM MÀU CHO CÁC BÀI VIẾT

function colorBorder (){
	for (i=0; i < (postNumber + 1 ); i++ ) { 
	var a = '.box:nth-child('+(i+1)+') img';
	$(a).css ('border-color',color[i]);
	}
};
