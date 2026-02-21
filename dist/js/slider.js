document.addEventListener("DOMContentLoaded", function () {

    var tab1_slider = tns({
        container: '#tab-1-content',
        items: 2,
        slideBy: 2,
        autoplay: false,
        loop: false,
        controls: false,
        navContainer: '#tab-1-slider-nav',
        navAsThumbnails: false,
        disable: true,
        responsive: {
            768: {
                disable: false,
            },
            900: {
                disable: true,
            }
        }
    });

    var tab3_slider = tns({
        container: '#tab-3-content',
        items: 2,
        slideBy: 2,
        autoplay: false,
        loop: false,
        controls: false,
        navContainer: '#tab-3-slider-nav',
        navAsThumbnails: false,
        disable: true,
        responsive: {
            768: {
                disable: false,
            },
            900: {
                disable: true,
            }
        }
    });

});