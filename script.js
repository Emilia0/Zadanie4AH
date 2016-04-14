$(document).ready(function () {

    $('.accountChoice').click(function () {
        $('.choice').toggleClass('fa-circle-o fa-dot-circle-o');
    });

    $('.policyClick').click(function () {
        $('.policyBox').removeClass('invisible');
        $('.policyBox').addClass('visible');
    });

    $('.closeX').click(function () {
        $('.policyBox').toggleClass('visible invisible');
    });

    $('#submitButton').click(function (event) {
        event.preventDefault();
        if (($('.firstName').val()) == '') {
            $('.fNameError').attr('style', 'visibility:visible');
            $('.firstName').addClass('red');
        } else {
            $('.fNameError').removeAttr('style', 'visibility:visible');
            $('.firstName').removeClass('red');
        }
        if (($('.lastName').val()) == '') {
            $('.lNameError').attr('style', 'visibility:visible');
            $('.lastName').addClass('red');
        } else {
            $('.lNameError').removeAttr('style', 'visibility:visible');
            $('.lastName').removeClass('red');
        }
    });

});
