// CÁC BIẾN ĐẾM QUAN TRỌNG 
var postNumber = 10; // Đây là số bài viết sẽ hiển thị ở mỗi chủ đề trong trang chủ
var color = ['#FF0000', '#FF3300', '#FFFF00', '#00CC00', '#009999', '#00FFFF', '#9900CC', '#FF0099', '#FF6600', '#CCFF33', '#660000', '#CC0099', '#003300', '#636018', '#002e03', '#9e13b0', '#13b07e', '#9e13b0', '#f06573']; // Đây là các màu sắc mà nó sẽ border hình ảnh cái bài viết hiển thị trên trang chủ

// CÁC BIẾN THIẾT LẬP MÀU SẮC TÙY CHỈNH CHO NGƯỜI DÙNG
var categoryColor = '#0e540f'; // Màu sắc cho khung category 
var bloggerUrl = 'https://www.googleapis.com/blogger/v3/blogs/'
var bloggerApiKey = 'AIzaSyD6l0knzX0Muw_YnhAlwcUSvLyxrqte_Og';
var blogId = '3672902208348460125';
var postShow = 5; // <= 10;
function userColor() {
    $('.category').css('background-color', categoryColor);
};
// MỘT SỐ HÀM KIỂM TRA LỖI TRONG TRANG

// Hàm khởi tạo đồng hồ
function clientTime() {
    // Lấy Object ngày hiện tại
    var today = new Date();
    // Giờ, phút, giây hiện tại
    var t = today.toLocaleTimeString();
    // Ghi ra trình duyệt
    $('#time').html(t);
    // Dùng hàm setTimeout để thiết lập gọi lại 0.5 giây / lần
    setTimeout(function() {
        clientTime();
    }, 500);
}

// Hàm này có tác dụng chuyển những số bé hơn 10 thành dạng 01, 02, 03, ...
function checkTime(i) {
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
    $('#internet_type').html(navigator.connection.type + '');
    $('#internet_downlinkMax').html(navigator.connection.downlinkMax + ' Mb/s');
    $('#internet_effectiveType').html(navigator.connection.effectiveType);

    // Xanh nếu save data vàng nếu không save data
    if (navigator.connection.saveData == false) {
        $('#internet_saveData').html(navigator.connection.saveData + '');
        $('#internet_saveData').css('color', '#d15706');
    } else {
        $('#internet_saveData').html('<green>' + navigator.connection.saveData + '</green>');
    };
    // Vàng và nhấp nháy vàng nếu kết nối dưới 0.5 Mb và xanh nếu kết nối > 1 Mb 
    if (navigator.connection.downlink <= 0.5) {
        $('#internet_downlink').html(navigator.connection.downlink + 'Mb/s');
        $('#internet_downlink').css('color', '#d15706');
        $("#internet_downlink").addClass("warningFlash");
    } else if (navigator.connection.downlink >= 1) {
        $('#internet_downlink').html('<green>' + navigator.connection.downlink + 'Mb/s</green>');
        $("#internet_downlink").removeClass("warningFlash");
    } else {
        $('#internet_downlink').html(navigator.connection.downlink + ' Mb/s');
        $("#internet_downlink").removeClass("warningFlash");
    };
    // Đỏ và nhấp nháy nếu rtt dưới 100ms 
    if (navigator.connection.rtt > 100) {
        $('#internet_rtt').html('<red><b>' + navigator.connection.rtt + 'ms</b></red>');
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

function colorBorder() {
    for (i = 0; i < (postShow + 1); i++) {
        var a = '.category_body .box:nth-child(' + (i + 1) + ') img';
        $(a).css('border-color', color[i]);
    }
};

function colorBorderMenu() {
    for (i = 0; i < (($('.menu_container .box').length) + 1); i++) {
        var b = '.menu_container .box:nth-child(' + (i + 1) + ') img';
        $(b).css('border-color', color[i]);
        $('.menu_container .box:nth-child(11) img').css('border-color', 'red')
    }

};

// ADD CÁC CHỨC NĂNG ĐÓNG MỞ THU NHỎ CHO CÁC WINDOWS
function addCloseOpen() {
        $('.window_taskbar').each(
            function() {
                a = $(this).find('span')
                b = a.length;
                c = ['zoomOut', 'zoomIn', 'zoomOut']
                for (i = 0; i < b; i++)
                    a.eq(i).attr('class', c[i])

            }
        );
        $('.zoomOut').click(
            function() {
                d = $(this).parent().parent().parent();
                d.addClass('hidden');
            }
        );
        $('.zoomIn').click(
            function() {
                e = $(this).parent().parent().parent()
                e.toggleClass('zoom')
            }
        );
        // ké các code add chức năng cho thanh toolbar
        f = $('.taskbar_icons').find('a');
        h = f.length;
        g = ['memberInfo','searchBox','menu','randomPosts','versionInfo'];
        for ( i =0;i<h;i++){
            f.eq(i).attr('data-id',g[i])
        }

    }
    // CÁI NÀY HIỂN THỊ HOẶC ẨN CÁC WINDOW KHI CLICK
function openOrClose(){
    $('.taskbar_icons a').each(
        function(){
            $('#'+$(this).attr('data-id')).addClass('hidden');
        })
    $('.taskbar_icons a').click(
        function () {
        a = $(this).attr('data-id');
        c = $('#'+a) ;
        if ( c.hasClass("hidden") ){

            
            d = $('.window').length;
            for ( i = 0; i < d; i++){
                if ( $('.window').eq(i).hasClass('hidden')  ) {
                    //
                } else {
                    $('.window').eq(i).addClass('hidden')
                }
            }
            c.removeClass('hidden');
        } else {
            c.addClass('hidden')
        } 


        
// CÁI NÀY CỰC KÌ QUAN TRỌNG ĐỂ GIÚP CHO HÀM MOVE CÓ THỂ HOẠT ĐỘNG ĐƯỢC

        
        })
}

    
// CAÍ NÀY CÓ CHỨC NĂNG THÊM TẤT CẢ CÁC CHỦ ĐỀ THEO NHÃ VÀO BÀI VIẾT
function category() {
    var label = {
        'Templates': 'coder.jpg',
        'Hacking': 'coder.jpg',
        'Blogspot': 'coder.jpg',
        'Linux': 'coder.jpg'
    }
    a = Object.keys(label).length;

    var e = $('.category');

    var d = $('.category_body .box');
    /* nhân bản các thẻ bõ */
    for (var i = 0; i < (postShow - 1); i++) {
        d.clone().insertAfter(d);
    }
    /* nhân bản các category */
    for (var i = 0; i < (a - 1); i++) {
        e.clone().insertAfter(e);
    }

    var b = document.getElementsByClassName("category");
    for (n = 0, length = b.length; n < length; n++) {
        b[n].setAttribute('data-label', Object.keys(label)[n]);
        b[n].setAttribute('data-label-image', Object.values(label)[n])
    };
    $('.category').each(function() {
        $(this).find('.category_image img').attr('data-src', $(this).attr('data-label-image'));
        $(this).find('.category_title span').text($(this).attr('data-label'));
        var a = $(this).attr('data-label');
        $(this).attr('data-label-json', bloggerUrl + blogId + '/posts?labels=' + a + '&maxResults=' + postShow + '&fetchImages=true&fetchBodies=false&fields=items(title,id,images)&key=' + bloggerApiKey)
    });
}


function addIdTitle() {
        var a = $(".category").length;
        for (let i = 0; i < (a + 1); i++) {
            b = $('.category').eq(i);
            c = b.attr('data-label-json');
            $.getJSON(c, function(re) {
                var d = re.items.length;
                e = $('.category').eq(i);
                if (postShow > d) {

                    for (i = 0; i < (postShow - d); i++) {
                        e.find('.box').eq(d + i).empty()

                    };

                }

                for (let i = 0; i < postShow; i++) {
                    e.find('.title').eq(i).text(re.items[i].title);
                    e.find('.box').eq(i).attr('data-post-id', re.items[i].id);
                    e.find('.image').eq(i).attr('data-src', re.items[i].images[0].url)
                }
                loadImage();
            })
        }
    }
    // BẮT ĐẦU TẢI VÀ ĐÍNH ẢNH SAU KHI TOÀN BỘ ĐƯỢC LOAD OK
function loadImage() {
    // load img form data-src
    $('img').each(function() {
        var a = $(this).attr('data-src');
        $(this).attr('src', a)
        $(this).removeAttr('data-src')

    })
    $('img').each(function() {
            $(this).one('error', function() {
                $(this).removeAttr('src')
            })
        })
        // load font awesome i 
    $('i').each(function() {
            var a = $(this).attr('data-class');
            $(this).attr('class', a)
            $(this).removeAttr('data-class')

        })
        // load css
    $('link').each(function() {
            var a = $(this).attr('data-href');
            $(this).attr('href', a)
            $(this).removeAttr('data-href')

        })
        // display body
         $('body').removeAttr('style');  

}