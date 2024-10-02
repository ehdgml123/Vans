
$(document).ready(function() {
     
    $('#toggleLink').hover(
        function() { 
            $('#submenu').show();
        }, 
        function() { 
            $('#submenu').hide();
        }
    );
});
// MEN
$(document).ready(function() {
    
    $('#toggleLink1').hover(
        function() { 
            $('#submenu1').show();
        }, 
        function() { 
            $('#submenu1').hide();
        }
    );
});

// WOMEN
$(document).ready(function() {
    
    $('#toggleLink2').hover(
        function() { 
            $('#submenu2').show();
        }, 
        function() { 
            $('#submenu2').hide();
        }
    );
});

 // KIDS
 $(document).ready(function() {
    
    $('#toggleLink3').hover(
        function() { 
            $('#submenu3').show();
        }, 
        function() { 
            $('#submenu3').hide();
        }
    );
});

  // CUSTOMS
  $(document).ready(function() {
    
    $('#toggleLink4').hover(
        function() { 
            $('#submenu4').show();
        }, 
        function() { 
            $('#submenu4').hide();
        }
    );
});

 // MORE
 $(document).ready(function() {
    
    $('#toggleLink5').hover(
        function() { 
            $('#submenu5').show();
        }, 
        function() { 
            $('#submenu5').hide();
        }
    );
});

// 토글 메뉴 show/hide 이벤트 끝

// 텍스트 슬라이스
$(document).ready(function () {
   var i = 0;
   var items = $('.slide-container a');
   var itemCount = items.length;

   
   items.eq(i).show();

   function slide() {
       items.eq(i).fadeOut('slow', function () {
           i = (i + 1) % itemCount; 
           items.eq(i).fadeIn('slow');
       });
   }

   setInterval(slide, 3000); 
});

// 신발 슬라이드

var i = 0;
var slideCount = 4; 
var totalSlides = $('.swiper .swiper-ti').length;


$('.swiper .swiper-ti').hide();
$('.swiper .swiper-ti').slice(0, slideCount).show();

function slide() {

    $('.swiper .swiper-ti').slice(i, i + slideCount).fadeOut('slow');
   
    i += slideCount;


   if (i >= totalSlides) {
       i = 0;
    }


    $('.swiper .swiper-ti').slice(i, i + slideCount).fadeIn('slow');
}
setInterval(slide, 5000);



// 신발 이미지 변경 

   function changeImage(){
       document.getElementById('imggg').src = './img/VN000CY2CX11_hover.jpg';
   }
   function resetImage() {
   document.getElementById('imggg').src = './img/VN000CY2CX11.jpg';
 }

 function changeImage1(){
       document.getElementById('imggg1').src = './img/VN0007NTYB21hover.jpg';
   }
   function resetImage1() {
   document.getElementById('imggg1').src = './img/VN0007NTYB21.jpg';
 }

 function changeImage2(){
       document.getElementById('imggg2').src = './img/VN000CP6OCI1_hover.jpg';
   }
   function resetImage2() {
   document.getElementById('imggg2').src = './img/VN000CP6OCI1.jpg';
 }

 function changeImage3(){
       document.getElementById('imggg3').src = './img/VN0009PVY6Z1hover.jpg';
   }
   function resetImage3() {
   document.getElementById('imggg3').src = './img/VN0009PVY6Z1.jpg';
 }

 function changeImage4(){
       document.getElementById('imggg4').src = './img/VN000CP4KCZ1_hover.jpg';
   }
   function resetImage4() {
   document.getElementById('imggg4').src = './img/VN000CP4KCZ1.jpg';
 }

 function changeImage5(){
       document.getElementById('imggg5').src = './img/VN0009QUOLV1_hover.jpg';
   }
   function resetImage5() {
   document.getElementById('imggg5').src = './img/VN0009QUOLV1.jpg';
 }

 function changeImage6(){
       document.getElementById('imggg6').src = './img/VN0A5FCBBWT1_hover.jpg';
   }
   function resetImage6() {
   document.getElementById('imggg6').src = './img/VN0A5FCBBWT1.jpg';
 }

 function changeImage7(){
       document.getElementById('imggg7').src = './img/VN0A5KX66RT1hover.jpg';
   }
   function resetImage7() {
   document.getElementById('imggg7').src = './img/VN0A5KX66RT1.jpg';
 }

// 팝업
$(document).ready(function () {
    // 팝업 클릭 시 숨김 처리
    $('.modal-bg ').on('click', function (e) {
        e.preventDefault();
        $('.modal-bg').fadeOut();
    });


    // 페이지 로드 시 로컬 스토리지 확인
    if (localStorage.getItem('popupClosed') === 'true') {
        $('.modal-bg').hide();
    }
});