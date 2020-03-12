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


    // Form Validation
    $('.js-input-tel').inputmask("+7 (999) 999 - 99 - 99");

    $.validator.addMethod( "mobileRU", function( phone_number, element ) {
        var ruPhone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
        return this.optional( element ) || ruPhone_number.length > 9 && /^((\+7|7|8)+([0-9]){10})$/.test( ruPhone_number );
    }, "Please specify a valid mobile number" );

    $("#s7-form").validate({

        rules: {
            s7_input_name: {
                required: true,
                minlength: 2
            },
            s7_input_tel: {
                required: true,
                mobileRU: true
            },
        },
        messages: {
            s7_input_name: {
                required: "Это поле обязательно к заполнению",
                minlength: jQuery.validator.format("Длина имени должна составлять не менее {0} букв.")
            },
            s7_input_tel: {
                required: "Это поле обязательно к заполнению",
                mobileRU: "Пожалуйста, укажите действительный номер мобильного телефона"
            },
        },
        focusCleanup: true,
        focusInvalid: false,
        errorClass: "form__input_error",
        validClass: "form__input_success"
    });

    $("#mc-form").validate({

        rules: {
            mc_input_name: {
                required: true,
                minlength: 2
            },
            mc_input_tel: {
                required: true,
                mobileRU: true
            },
        },
        messages: {
            mc_input_name: {
                required: "Это поле обязательно к заполнению",
                minlength: jQuery.validator.format("Длина имени должна составлять не менее {0} букв.")
            },
            mc_input_tel: {
                required: "Это поле обязательно к заполнению",
                mobileRU: "Пожалуйста, укажите действительный номер мобильного телефона"
            },
        },
        focusCleanup: true,
        focusInvalid: false,
        errorClass: "form__input_error",
        validClass: "form__input_success"
    });


    // Services mobile
    let s3Item = $('.js-s3-list-item');
    s3Item.on('click', function (e) {
        e.preventDefault();
        let s3Items = $(this).attr('data-target');
        $(s3Items).slideToggle();
    });



});