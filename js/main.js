$('document').ready(function () {

    //pop-up-menu
    //to portfolio.html
    $('body').on("click", "#btn-portfolio,#aboutme-more", function (e) {
        $('#pop-up-item-content,#iframe-portfolio').addClass('d-block').animate({ "opacity": "1" }, 400);
        e.preventDefault();
    });

    //to about-me.html
    $('body').on("click", "#btn-aboutme", function (e) {
        $('#pop-up-item-content,#iframe-aboutme').addClass('d-block').animate({ "opacity": "1" }, 400);
        e.preventDefault();
    });

    //close pop-up-menu by clicking cover-bg
    $('#cover-bg').click(function () {
        $('#pop-up,#pop-up-item-content').animate({ "opacity": "0" }, 400, function () {
            $('#pop-up,#pop-up-item-content,#iframe-portfolio,#iframe-aboutme').removeClass('d-block');
        });

    })

    //close pop-up-menu by clicking btn
    $('.btn-close').click(function (e) {
        $('#pop-up-item-content').animate({ "opacity": "0" }, 400, function () {
            $('#pop-up-item-content,#iframe-portfolio,#iframe-aboutme').removeClass('d-block');
        });
        e.preventDefault();
    })


    //手機板(sm) + 平板(md) : #new-container:hover
    //互動式
    /* $('#new-container').mouseenter(function(e){

        $('#left-top').delay(300).animate({"left": "-900px"},1000,function(e){
            $('#left-top').addClass('d-none');
        });
        $('#right-top').delay(300).animate({"top": "-900px"},1000,function(e){
            $('#right-top').addClass('d-none');
        });
        $('#right-bottom').delay(300).animate({"right": "-900px"},1000,function(e){
            $('#right-bottom').addClass('d-none');
        });
        $('#left-bottom').delay(300).animate({"top": "900px"},1000,function(e){
            $('#left-bottom,#center-decor-square').addClass('d-none');
        });
    }); */
    //動畫式

  
    $('#left-top').addClass('move-left');
    $('#right-top').addClass('move-top');
    $('#right-bottom').addClass('move-right');
    $('#left-bottom').addClass('move-bottom');
    
    $('.square-left-top').addClass('transparent').addClass('square-left-top-rotate');
    $('.square-right-top').addClass('transparent').addClass('square-right-top-rotate');
    $('.square-right-bottom').addClass('transparent').addClass('square-right-bottom-rotate');
    $('.square-left-bottom').addClass('transparent').addClass('square-left-bottom-rotate');

    setTimeout(() => {
        $('.square-left-top,.square-right-top,.square-right-bottom,.square-left-bottom').addClass('d-none');
        $('#entry').addClass('show').addClass('border-gold');
        $('.entry-bg-c1,.entry-bg-c2').addClass('show');
        $('.text').removeClass('up').removeClass('down');
    
    }, 2000);

  

    /* $('#left-top').delay(300).animate({ "left": "-900px" }, 1000, function (e) {
        $('#left-top').addClass('d-none');
    }); */
    
    /* $('#right-top').delay(300).animate({ "top": "-900px" }, 1000, function (e) {
        $('#right-top').addClass('d-none');
    });
    $('#right-bottom').delay(300).animate({ "right": "-900px" }, 1000, function (e) {
        $('#right-bottom').addClass('d-none');
    });
    $('#left-bottom').delay(300).animate({ "top": "900px" }, 1000, function (e) {
        $('#left-bottom').addClass('d-none');
    }); */

    


    function windowSize() {

        let height = $(window).height() + "px";
        $('#new-container').css({ "width": "100%", "height": height });


        $('a#btn').click(function (e) {
            $('#pop-up').addClass('d-block').animate({ "opacity": "1" }, 600);
            $('#left-top,#right-top,#right-bottom,#left-bottom,#center-decor-square').addClass('d-none');
            let popUpItemHeight = $('.pop-up-item').height() + "px";
            $('#pop-up .pop-up-item').css({ "line-height": popUpItemHeight });
            e.preventDefault();
        });

    };
    $(window).resize(function () {
        windowSize();
    });
    windowSize();



});