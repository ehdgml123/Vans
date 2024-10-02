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