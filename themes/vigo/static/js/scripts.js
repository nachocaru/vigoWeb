$(function() {

    // Smooth scrolling
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 87
                }, 1000);
                return false;
            }
        }
    });

    // Filtering

    if ($("#filters").length) {

        var cnt = $("#filters")
            elems = $("article", cnt),
            btns = $(".btn", cnt);

        btns.each(function () {
            var btn = $(this);

            if (btn.attr('data-filter') === "all") {

                btn.click(function () {

                    elems.each(function () {
                        $(this).show();
                    });

                });

            } else {
                btn.click(function () {

                    var filterStr = btn.attr('data-filter').toString();

                    elems.each(function () {

                        if ($(this).attr('data-type').indexOf(filterStr) !== -1 ) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }

                    });

                });
            }

        });

    }

    if ($("#gallery").length) {

        var gallery = $('#gallery');

        if ($('a > img', gallery).length > 0) {
            for (var i = 0; i < $('a > img',gallery).length; i+=1) {
                var current = $('a > img',gallery)[i].parentElement,
                    imgTitle = $('a > img',gallery)[i].alt;
                $(current).click(function (e) {
                    // e.preventDefault();
                });
                if (/.\.(jpe?g||gif||png)$/i.test($(current).attr('href')) == true) {
                    $(current).magnificPopup({
                        type:'image',
                        image: {
                            markup: '<div class="mfp-figure">'+
                            '<div class="mfp-title">'+imgTitle+'</div>'+
                            '<div class="mfp-img"></div>'+
                            '<div class="mfp-close"></div>'+
                            '</div>',
                            titleSrc: function () {
                                return imgTitle;
                            }
                        }
                    });
                }
            }
        }

    }


});

