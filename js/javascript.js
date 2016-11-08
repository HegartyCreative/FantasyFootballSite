var menu = function() {
    $('.icon-menu').click(function() {
        $('.menu').animate({left:'0px'}, 200);
    });

    $('.icon-close').click(function() {
        $('.menu').animate({left:'-300px'}, 200);

        $('body').animate({left:'0px'}, 200);
    });
};

$(document).ready(menu);
