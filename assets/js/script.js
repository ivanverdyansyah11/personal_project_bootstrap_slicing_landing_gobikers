AOS.init({
    once: true
});

$('.button-hamburger').on('click', function() {
    $(this).toggleClass('active')
    $('.topbar').toggleClass('active')
})