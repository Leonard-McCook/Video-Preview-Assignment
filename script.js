var video = $("#video");

$(video).on('canplay', function () {
    $(video).mouseenter(function () {
        $(this).get(0).play();
    }).mouseleave(function () {
        $(this).get(0).pause();
    })
});