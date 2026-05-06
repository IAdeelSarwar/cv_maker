$(function() {
    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this).attr('href');
        if (target === '#' || target.length < 2) return;
        const $el = $(target);
        if ($el.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $el.offset().top - 80
            }, 600);
        }
    });

    // Navbar scroll effect
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Fade in elements as they enter viewport
    function checkVisibility() {
        $('.feature-card').each(function() {
            const $this = $(this);
            const top = $this.offset().top;
            const bottom = top + $this.outerHeight();
            const viewBottom = $(window).scrollTop() + $(window).height();
            if (viewBottom > top + 50) {
                $this.addClass('visible');
            }
        });
    }

    $(window).on('scroll resize', checkVisibility);
    checkVisibility();
});