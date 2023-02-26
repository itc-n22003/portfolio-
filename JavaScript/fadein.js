function fade() {
    $(window).scroll(function () {
        $('.fadein').each(function () {
            const targetElement = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200) {
                $(this).addClass('scrollin');
            }
        });
    });
};

$(window).scroll(function (){
    fade();
});