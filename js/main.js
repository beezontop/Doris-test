$('document').ready(function () {

    // get html from about-me.html
    $.ajax({
        url: 'about-me.html',
        dataType: 'html',
        success: function (data) {
            $('#iframe-aboutme').html(data);
        }
    });

    // get html from about-me.html
    $.ajax({
        url: 'portfolio.html',
        dataType: 'html',
        success: function (data) {
            $('#iframe-portfolio').html(data);
        }
    });


    //pop-up-menu
    //to about-me.html
    $('body').on("click", "#btn-aboutme", function (e) {
        $('.pop-up-item-content,#iframe-aboutme').addClass('d-block').animate({ "opacity": "1" }, 400);
        e.preventDefault();
    });

    //to portfolio.html
    $('body').on("click", "#btn-portfolio,#aboutme-more", function (e) {
        $('.pop-up-item-content,#iframe-portfolio').addClass('d-block').animate({ "opacity": "1" }, 400);
        e.preventDefault();
    });


    //close pop-up-menu by clicking cover-bg
    $('#cover-bg').click(function () {
        $('#pop-up,.pop-up-item-content').animate({ "opacity": "0" }, 400, function () {
            $('#pop-up,.pop-up-item-content,#iframe-portfolio,#iframe-aboutme').removeClass('d-block');
        });

    })

    //close pop-up-menu by clicking btn
    $('.btn-close').click(function (e) {
        $('.pop-up-item-content').animate({ "opacity": "0" }, 400, function () {
            $('.pop-up-item-content,#iframe-portfolio,#iframe-aboutme').removeClass('d-block');
        });
        e.preventDefault();
    });

    //動畫式


    $('#left-top').addClass('move-left');
    $('#right-top').addClass('move-top');
    $('#right-bottom').addClass('move-right');
    $('#left-bottom').addClass('move-bottom');

    $('.square-left-top').addClass('transparent').addClass('square-left-top-rotate');
    $('.square-right-top').addClass('transparent').addClass('square-right-top-rotate');
    $('.square-right-bottom').addClass('transparent').addClass('square-right-bottom-rotate');
    $('.square-left-bottom').addClass('transparent').addClass('square-left-bottom-rotate');

    setTimeout(function () {
        $('#center-decor-square').addClass('d-none');
        $('#entry').addClass('show').addClass('border-gold');
        $('.entry-bg-c1,.entry-bg-c2').addClass('show');
        $('.letter').removeClass('up').removeClass('down');
    }, 2000);




    function windowSize() {

        let height = $(window).height() + "px";
        $('#new-container').css({ "width": "100%", "height": height });


        $('a#entry-btn').click(function (e) {
            $('#pop-up').addClass('d-block').animate({ "opacity": "1" }, 600);
            $('#left-top,#right-top,#right-bottom,#left-bottom,#center-decor-square').addClass('d-none');
            let popUpItemHeight = $('.pop-up-item').height() + "px";
            // $('#pop-up .pop-up-item').css({ "line-height": popUpItemHeight });
            e.preventDefault();
        });


    };
    $(window).resize(function () {
        windowSize();
    });
    windowSize();



});