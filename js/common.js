$(document).ready(function() {
    // $('.nav-item').eq(0).css('min-width', '76px');
    // $('.nav-item').eq(1).css('min-width', '76px');
    // $('.nav-item').eq(2).css('min-width', '104px');
    // $('.nav-item').eq(3).css('min-width', '104px');
})
$(document).scroll(function() {
    if ($(document).scrollTop() === 0) {
        $('.header').css('background-color', 'transparent')
    } else {
        $('.header').css('background-color', '#0b0b0b')
        $('.header').css('transition', 'background-color linear .3s 0s')
    }
});
