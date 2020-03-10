$(function () {

    'use strict';


    // Calculation dropdown
    let dropdownLink = $('.calculation__route_dropdown_link'),
        dropdownList = $('.calculation__route_dropdown_list'),
        dropdownListLink = $('.calculation__route_dropdown_list_item_link'),
        dropdownLinkText = $('.calculation__route_dropdown_link_text');

    dropdownLink.on('click', function(e) {
        e.preventDefault();
        let thisDropdownLink = $(this).attr('href');
        if (!$(this).hasClass('active')) {
            dropdownList.slideUp();
            dropdownLink.removeClass('active');
        }
        $(thisDropdownLink).slideToggle();
        $(this).toggleClass('active');
    });

    dropdownListLink.on('click', function(e) {
        e.preventDefault();
        dropdownLink.removeClass('active');
        dropdownList.slideUp();
        let thisDropdownListLink = $(this).attr('href');
        let thisDropdownListLinkText = $(this).children('span').text();
        $(thisDropdownListLink).text(thisDropdownListLinkText);
        let thisListLink = $(this).attr('data-target');
        $(thisListLink).children().children().removeClass('active');
        $(this).addClass('active');
    });



});