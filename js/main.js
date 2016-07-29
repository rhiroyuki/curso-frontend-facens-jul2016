$(document).ready(function () {
    var nav = document.querySelector('nav');
    var links = document.querySelector('nav a');
    
    console.log('eae', nav, links);
    
    $('.scroll').click(function () {
        var target = $(this.hash);
        
        $('html, body').animate({
            scrollTop: target.offset().top}, 500);
    
        return false;
    });
});

