    function loadMore() {
        $(".display").attr("style", "display:block");
        $(".display2").attr("style", "display:block");
    };

    function goTo(name) {
        var res = $(name).attr("name");
        $('html, body').animate({
            scrollTop: $("." + res).offset().top
        }, 1000);
    };