"use strict";

$(document).ready(function () {

    // filter dropdown
    $('.list__filter').click(function () {

        let $dropdown = $('.filter__dropdown');
        let $filter = $('.list__filter');

        $dropdown.toggleClass("filter__dropdown--active");
        $filter.toggleClass("list__filter--active");

    });

    // popups

    let $briefing = $('#briefing'),
        $presentation = $('#presentation'),
        $overlay = $('.profile__modals-overlay'),
        $modal_briefing = $('.profile__modals'),
        $modal_presentation = $('.profile__modals-presentation'),
        $cross = $('.profile__modal-cross'),
        $wrapper = $('.wrapper');

    // Бриф
    $briefing.click(function () {

        $overlay.css("display", "block");
        $modal_briefing.css("display", "block");
        $wrapper.addClass('blur');

    });



    // Презентация
    $presentation.click(function () {

        $overlay.css("display", "block");
        $modal_presentation.css("display", "block");
        $wrapper.addClass('blur');

    });
    // overlay & cross

    $overlay.click(function () {

        $(this).css("display", "none");
        $modal_briefing.css("display", "none");
        $modal_presentation.css("display", "none");
        $wrapper.removeClass('blur');

    });

    $cross.click(function () {

        $overlay.css("display", "none");
        $modal_briefing.css("display", "none");
        $modal_presentation.css("display", "none");
        $wrapper.removeClass('blur');

    });
    // jQuery Knob

    // $(".dial").knob({
    //     'min': 0,
    //     'max': 10,
    //     'rotation': "anticlockwise"
    // });
    let $dial = $(".dial");
    $dial.knob({
        'min': 0,
        'max': 10,
        'rotation': "anticlockwise",
        'change': function (v) {
            console.log(v);
            let color;
            if (v <= 4) {
                color = '#E72E36';
            } else if (v <= 7) {
                color = '#F5913B';
            } else {
                color = '#009639';
            }
            $dial.trigger(
                'configure', {
                    "fgColor": color
                }
            );
        }
    });





});
// popups files

let $inputName = $('.profile__attachments-input'),
    $this = $(this),
    $docx = $('#docx'),
    $image = $('#image'),
    $labelDocx = $('#labelDocx'),
    $labelImage = $('#labelImage'),
    $attchBtn = $('.profile__attachments-btn');


function changeDocx() {
    $docx.removeClass('hidden');
    $docx.addClass('show');
    $labelDocx.addClass('hidden');
}

function changeImage() {
    $image.removeClass('hidden');
    $image.addClass('show');
    $labelImage.addClass('hidden');
    $attchBtn.addClass('btn--active');
}

