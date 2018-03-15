"use strict";

$( document ).ready(function() {
    
    // filter dropdown
    $('.list__filter').click(function(){

        let dropdown = $('.filter__dropdown');
        let filter = $('.list__filter');

        dropdown.toggleClass("filter__dropdown--active");
        filter.toggleClass("list__filter--active");
        
    });

    // modals

    let briefing = $('#briefing'),
        overlay = $('.profile__modals-overlay'),
        modal = $('.profile__modals'),
        cross = $('.profile__modal-cross'),
        wrapper = $('.wrapper');

    briefing.click(function(){

        overlay.css("display", "block");
        modal.css("display", "block");
        wrapper.addClass('blur');

    });

    overlay.click(function(){

        $(this).css("display", "none");
        modal.css("display", "none");
        wrapper.removeClass('blur');

    });

    cross.click(function(){

        overlay.css("display", "none");
        modal.css("display", "none");
        wrapper.removeClass('blur');

    });

});