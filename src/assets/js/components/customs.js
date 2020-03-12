$(function() {

    'use strict';


    // Navigation anchors
    $('.js-anchor').on('click', function(e){
        e.preventDefault();

        let navScroll = $(this).attr('href'),
            navScrollBlock = $(navScroll).offset().top;
        $('html, body').animate({
            scrollTop: navScrollBlock
        }, 2000);
    });


    // Modal
    $('.btn-modal-call').on('click', function (e) {
        e.preventDefault();
        $('html, body').addClass('modal-active');
        $('.modal-call').fadeIn();
    });
    $('.modal-close').on('click', function (e) {
        e.preventDefault();
        $('html, body').removeClass('modal-active');
        $('.modal-call').fadeOut();
    });


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



    // Range slider
    let rangeWeight = document.getElementById('calculation__range_weight'),
        rangeVolume = document.getElementById('calculation__range_volume'),
        rangeWeightValue = $('#calculation__range_weight_value'),
        rangeVolumeValue = $('#calculation__range_volume_value');

    noUiSlider.create(rangeWeight, {
        start: 10,
        connect: [true, false],
        range: {
            'min': 0,
            'max': 20
        },
        format: wNumb({
            decimals: 0,
        })
    });

    rangeWeight.noUiSlider.on('update', function() {
        rangeWeightValue.text(rangeWeight.noUiSlider.get());
    });

    noUiSlider.create(rangeVolume, {
        start: 10,
        connect: [true, false],
        range: {
            'min': 0,
            'max': 20
        },
        format: wNumb({
            decimals: 0,
        })
    });

    rangeVolume.noUiSlider.on('update', function() {
        rangeVolumeValue.text(rangeVolume.noUiSlider.get());
    });



});