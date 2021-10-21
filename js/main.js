$(document).ready(function(){
	/*
    * Translated default messages for the jQuery validation plugin.
    * Locale: RU (Russian; русский язык)
    */
	$.extend( $.validator.messages, {
        required: "Это поле необходимо заполнить.",
        remote: "Пожалуйста, введите правильное значение.",
        email: "Пожалуйста, введите корректный адрес электронной почты.",
        url: "Пожалуйста, введите корректный URL.",
        date: "Пожалуйста, введите корректную дату.",
        dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
        number: "Пожалуйста, введите число.",
        digits: "Пожалуйста, вводите только цифры.",
        creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
        equalTo: "Пожалуйста, введите такое же значение ещё раз.",
        extension: "Пожалуйста, выберите файл с правильным расширением.",
        maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
        minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
        rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
        range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
        max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
        min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
    } );

    $.validator.addMethod('js-input-phone', function(value, element) {
        return this.optional(element) || $(element).inputmask('unmaskedvalue').length === 10;
    }, 'Введите корректный номер');

    $('.js-form').validate({
        submitHandler: function(form) {
            // Отправка формы при успешной валидации
            $(form).trigger('formSubmit');
        },
        errorPlacement: function(error, element) {
            element.parent().append(error);
        }
    });

    $('.js-input-phone').inputmask('+7 (999) 999-99-99');

    $('.accrdn__place').click(function (){
    	const parent = $(this).parent();

    	if (parent.hasClass('accrdn__item_active')) {
    		parent.removeClass('accrdn__item_active');
    	} else {
    		$('.accrdn__item').removeClass('accrdn__item_active');
    		parent.addClass('accrdn__item_active');
    	}
    });

	$('.main__slider').slick({
  		speed: 500,
  		fade: true,
  		dots: true,
  		cssEase: 'linear',
  		prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png"></button>',
  		nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png"></button>'
	});

    $(window).scroll(function () {
        if ($(this).scrollTop() > $('.header').height()){
            $('.navbar').addClass('dark-nav');
        }
        else{
            $('.navbar').removeClass('dark-nav');
        }
    });

    $('.navbar__burger').click(function () {
        $('.navbar').toggleClass('navbar__opened');
        $('.menu__item').click(function () {
            if($('.navbar').hasClass('navbar__opened')) {
                $('.navbar').removeClass('navbar__opened');
            }
        });
    })

    $('.main__btn').click(function () {
        $('html, body').animate({
            scrollTop: $('#request').offset().top
        }, 800);
    });

    $('.form__select').select2({
        minimumResultsForSearch: Infinity
    });
})