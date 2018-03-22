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
        $finals = $('#finals'),
        $this = $(this),
        $overlay = $('.profile__modals-overlay'),
        $modal_briefing = $('.profile__modals'),
        $modal_presentation = $('.profile__modals-presentation'),
        $modal_fail = $('.profile__modals-fail'),
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
        $modal_fail.css("display", "none");
        $wrapper.removeClass('blur');

    });

    $cross.click(function () {

        $overlay.css("display", "none");
        $modal_briefing.css("display", "none");
        $modal_presentation.css("display", "none");
        $modal_fail.css("display", "none");
        $wrapper.removeClass('blur');

    });

    function showFail(){
        $overlay.css("display", "block");
        $modal_fail.css("display", "block");
        $wrapper.addClass('blur');
    };


    $('.profile__item--failed').on('click', function(){
        showFail();
    });

    // items' backgrounds

    if ($briefing.is('.profile__item--active')) {
        $briefing.addClass('profile__item-icon--idea-white')
    }

    if ($finals.is('.profile__item--active')) {
        $finals.addClass('profile__item-icon--finals-active')
    } else if ($finals.is('.profile__item--success')) {
        $finals.addClass('profile__item-icon--finals-success')
    }

    if ($presentation.is('.profile__item--active')) {
        $presentation.addClass('profile__item-icon--presentation-active')
    } else if ($presentation.is('.profile__item--success')) {
        $presentation.addClass('profile__item-icon--presentation-success')
    }

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
    $docxPresentation = $('#docxPresentation'),
    $pptx = $('#pptx'),
    $docx = $('#docx'),
    $image = $('#image'),
    $labelDocx = $('#labelDocx'),
    $labelImage = $('#labelImage'),
    $labelPresentation = $('#labelPresentation'),
    $labelDesc = $('#labelDesc'),
    $attchBtn = $('.profile__attachments-btn');


function changeDocx() {
    $docx.removeClass('hidden');
    $docx.addClass('show');
    $labelDocx.addClass('hidden');
};

function changeImage() {
    $image.removeClass('hidden');
    $image.addClass('show');
    $labelImage.addClass('hidden');
    $attchBtn.addClass('btn--active');
};

function changeDesc() {
    $docxPresentation.removeClass('hidden');
    $docxPresentation.addClass('show');
    $labelDesc.addClass('hidden');
};

function changePresentation() {
    $pptx.removeClass('hidden');
    $pptx.addClass('show');
    $labelPresentation.addClass('hidden');
    $attchBtn.addClass('btn--active');
};

function previewFile() {

    let preview = document.querySelector('#image');
    let file = document.querySelector('#imgInput').files[0];
    let reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}