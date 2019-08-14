// ĐỒNG HỒ HIỂN THỊ ĐẦU TRANG 

// Hàm khởi tạo đồng hồ
function clientTime() 
{
    // Lấy Object ngày hiện tại
    var today = new Date();

    // Giờ, phút, giây hiện tại
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    // Chuyển đổi sang dạng 01, 02, 03
    m = checkTime(m);
    s = checkTime(s);

    // Ghi ra trình duyệt
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;

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
  document.getElementById('internet_downlink').innerHTML=navigator.connection.downlink + 'Mb/s';
  document.getElementById('internet_rtt').innerHTML=navigator.connection.rtt + 'ms ';
  document.getElementById('internet_downlinkMax').innerHTML=navigator.connection.downlinkMax + 'Mb/s ';
  document.getElementById('internet_effectiveType').innerHTML=navigator.connection.effectiveType;
  document.getElementById('internet_saveData').innerHTML= 'SD :'+navigator.connection.saveData;
  if (navigator.onLine) {
  	document.getElementById('internet_connect').style.color = 'green';
} else {
  	document.getElementById('internet_connect').style.color = 'red'
}
  
}