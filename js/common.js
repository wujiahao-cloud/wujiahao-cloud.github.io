$(document).scroll(function() {
    if ($(document).scrollTop() === 0) {
        $('.header').css('background-color', 'transparent')
    } else {
        $('.header').css('background-color', '#0b0b0b')
        $('.header').css('transition', 'background-color linear .3s 0s')
    }
});
