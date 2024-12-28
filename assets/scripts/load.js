if (window.location.hash) {
    history.replaceState(null, null, window.location.href.split('#')[0]);
}

$(window).on('load', function () {
    $('.loader-wrapper').fadeOut(1000); // Fade out loader after 1 second
});