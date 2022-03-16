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

/* Amenities */

let isOpen = false
let amenityCurrentlyOpen = ""

$('section#amenities .mpb').on('click', function (e) {

    if (isOpen && amenityCurrentlyOpen == $(this).attr('data-id')) {
        // hide
        isOpen = false
        amenityCurrentlyOpen = ""

        // Remove classes from the amenities section, the text and the icon
        $('#amenities .mpb').removeClass('vis').removeClass('hid');
        $('#amenities .mpb .text').removeClass('vis').removeClass('hid');
        $('#amenities').removeClass();

        // Add the class hid into amenities-stage and close
        $('section#amenities .amenities-stage').addClass('hid');

    } else {
        // show
        isOpen = true
        amenityCurrentlyOpen = $(this).attr('data-id')

        // Remove vis and hid classes from the text and the icon, in case it has
        $('section#amenities .mpb').removeClass('vis').addClass('hid');
        $('section#amenities .mpb .text').removeClass('vis').addClass('hid');

        // Add the class vid from the li of the correspond data-id
        $(this).removeClass('hid').addClass('vis');

        // remove all classes from #amenities, in case it has
        $('#amenities').removeClass();

        // save the act num and add it to #amenities as a class
        let idClass = $(this).attr('data-id');
        $('#amenities').addClass('open').addClass(idClass);

        // Remove hid from amenities-stage
        $('section#amenities .amenities-stage').removeClass('hid');
    }
});
