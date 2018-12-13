$(document).ready(function () {

  console.log('scripts init');

  // Init Content viewer
  initContentViewer();

    // Slider about

    $(".slider_about").owlCarousel({
        items:1,
        loop: true,
        nav: true,
        navText: []
    });

    // Slider partners

    $(".slider_partners").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        navText: [],
        responsive : {
            0 : {
                items: 1
            },
            650: {
                items: 2
            },
            930: {
                items: 3
            },
            1110: {
                items: 5
            },
        }
    });

    // Top

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () {
        $('body, html').animate({scrollTop: 0}, 1000);
    });

    // Menu

    $('.button').on('click', function(){
        $('.menu_block').toggleClass('active');
    });

    $('.menu_block ul li a').on('click', function(){
        $('.menu_block').removeClass('active');
    });

    // Services_list services_list


    var h = $('.services_list > ul > li.active > ul').height() + 70;
    $('.slide_2').css("margin-bottom", h);

    $('.services_list > ul > li > a').on('click', function(){
        if ($(this).parent().hasClass('active')){

        } else{
            $('.services_list > ul > li').removeClass('active');
            $(this).parent().addClass('active');
            var h = ($(this).parent().children( "ul" ).height() + 70);
            $('.slide_2').css("margin-bottom", h);
        }
    });

    // type

    $('.type ul.type_list li').on('click', function(){
        if($(this).hasClass('active')) {

        }  else {
            $('.type ul.type_list li').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.type ul.type_list2 li').on('click', function(){
        if($(this).hasClass('active')) {

        }  else {
            $('.type ul.type_list2 li').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.region ul li').on('click', function(){
        if($(this).hasClass('active')) {

        }  else {
            $('.region ul li').removeClass('active');
            $(this).addClass('active');
        }
    });


    function initContentViewer(){
        var slideContainer = $('.slide_1');

        if(slideContainer.length === 0) return false;

        var controlLine = slideContainer.find('.control-line');
        var controlArrow = controlLine.find('.control-arrow');
        var sliderBlock = slideContainer.find('.slider-block');

        controlArrow.on('click', function(e){
            e.preventDefault();

            var direction = $(this).data('direction');

            showBlockContent(direction);
        });

        function showBlockContent(dir){
            sliderBlock.removeClass('active');
            controlLine.removeClass('right left');

            sliderBlock.map((key, item) => {
                if(!$(item).hasClass(dir + '_block')){
                    $(item).addClass('active');
                }
            });

            $(controlLine).addClass(dir);
        }
    }

});