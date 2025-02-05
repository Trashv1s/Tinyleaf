$(document).ready(function() {

    $('#contact-cta').on('click', function(e) {
        e.preventDefault();

        const target = $($(this).attr('href'));

        
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800); 
    });
});