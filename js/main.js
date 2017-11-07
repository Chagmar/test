// Меню

$(document).ready(function(){
    $('.menu-toggle').on('click', function(e){
        e.preventDefault();
        $('nav ul').slideToggle();
    });
    $(window).resize(function(){
        if ($(window).width() > 768) {
            $('nav ul').removeAttr('style');
        }
    });
});

// Прилипающее меню

$(document).ready(function(){
    var navPos, winPos, navHeight;
    
    function refreshVar() {
        navPos = $('nav').offset().top;
        navHeight = $('nav').outerHeight(true);
    }
    refreshVar();
    $(window).resize(refreshVar);
    $('<div class="clone-nav"></div>').insertBefore('nav').css('height', navHeight).hide();
    
    $(window).scroll(function(){
        winPos = $(window).scrollTop();
        if (winPos >= navPos) {
            $('nav').addClass('fixed');
            $('.clone-nav').show();
        }
        else {
            $('nav').removeClass('fixed');
            $('.clone-nav').hide();
        }
    });
});

// Аккордеон

$(document).ready(function(){
    $('.accordeon article').not(':first').hide();
    
    $('.accordeon .block-title').on('click', function(){
        var findArticle = $(this).next('article');
        var findWrapper = $(this).closest('.accordeon');
        if (findArticle.is(':visible')) {
            findArticle.slideUp();
        }
        else {
            findWrapper.find('article').slideUp();
            findArticle.slideDown();
        }
    });
});

// Вкладки

$(document).ready(function(i){
    $('.tab-content > div').not(':first').hide();
    
    $('.tab-menu li').each(function(i){
        $(this).attr('data-tab', 'tab-' + i);
    });
    
    $('.tab-content div').each(function(i){
        $(this).attr('data-tab', 'tab-' + i);
    });
    
    $('.tab-menu li').on('click',function(){
        var dataTab = $(this).data('tab');
        var getWrapper = $(this).closest('.tab-wrapper');
        
        getWrapper.find('.tab-menu li').removeClass('active');
        $(this).addClass('active');
        
        getWrapper.find('.tab-content > div').hide();
        getWrapper.find('.tab-content > div[data-tab='+ dataTab +']').show();
    });
});

// Слайдер

$(document).ready(function(){
    var width = $('#slider-wrapper').width();
    $('.slides > li').width(width);
    $('.slides').width(width * $('.slides > li').length);
    
    $('.slides').css('left',-width);
    $('.slides > li:last-child').prependTo('.slides');
    
    function nextSlide() {
        $('.slides').animate({
            'margin-left':-width
        }, 500, function(){
            $('.slides li:first-child').appendTo('.slides');
            $('.slides').css('margin-left', 0);
        })
    }
    function prevSlide() {
        $('.slides').animate({
            'margin-left':width
        }, 500, function(){
            $('.slides li:last-child').prependTo('.slides');
            $('.slides').css('margin-left', 0);
        })
    }
    
    $('.next').on('click', nextSlide);
    $('.prev').on('click', prevSlide);
});

// Tooltip

$(document).ready(function(){
    var $parent, windowHeight, windowWidth;
    
    function winSize() {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
    }
    winSize();
    $(window).resize(winSize);
    
    // Появление и исчезание
    
    $('.tooltip').each(function(){
        $(this).parent().hover(function(){
            $(this).find('.tooltip').fadeIn('fast');
        }, function(){
            $(this).find('.tooltip').fadeOut('fast');
            
        });
    });
    
    $(document).mousemove(function(e){
        var mouseY = e.clientY,
        mouseX = e.clientX,
        tooltipeHeight,
        tooltipeWidth;
        
        $('.tooltip').each(function(){
            var $tooltipe = $(this);
            $parent = $tooltipe.parent();
            tooltipeHeight = $tooltipe.outerHeight();
            tooltipeWidth = $tooltipe.outerWidth();
            
            $tooltipe.css({
                 'left':mouseX,
                 'top':mouseY + 20
            });
            
            // Не выходим за пределы экрана
            
            if (tooltipeWidth + mouseX > windowWidth) {
               $tooltipe.css({
                   'left': mouseX - tooltipeWidth - 20
               });
            }
            
            if (tooltipeHeight + mouseY > windowHeight) {
               $tooltipe.css({
                   'top':mouseY - tooltipeHeight - 20
               });
            }
        });
    });
});

















