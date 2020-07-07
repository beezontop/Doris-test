$('document').ready(function(){

    $('#title-btn').click(function(e){
        $('#pop-up').addClass('d-block');
        $(e.target).preventDefault();
    });
 
    function windowSize() {
        // let width=$(window).width()+"px";
        let height=$(window).height()+"px";
        $('body').css({"width":"100%","height":height});
    };
    $(window).resize(function() {
        windowSize();
    });
    windowSize();


});