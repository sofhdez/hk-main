$(window).on('load', function () {


    /* Splide carousels */
    Splide.defaults = {
        type: 'slide',
        arrows: false,
        autoplay: false,
        lazyLoad: 'sequential'
    }


    var splideMP = new Splide('#masterplan-slider', {
        type: 'fade',
    });
    splideMP.mount();


    var splideTK = new Splide('#takealook-slider', {
        type: 'fade'
    });
    splideTK.mount();

    var splideHM = new Splide('#honestmaterials-slider', {
        type: 'slide',
        arrows: false,
        autoplay: false,
        interval: 8000,
        lazyLoad: 'nearby',
        perPage: 6,
        perMove: 1,
        padding: '3em',
        gap: '1em',
        pagination: false,
        breakpoints: {
            2000: {
                destroy: true,
            },
            1000: {
                perPage: 3,
            }
        }
    });
    splideHM.on('moved', function (data) {
        $('.honestmaterials-slider-act').html(data + 1);
    });
    splideHM.on('mounted', function (data) {
        $('.honestmaterials-slider-tot').html("&nbsp;|&nbsp;" + splideHM.length);
    });
    splideHM.mount();

}
)
