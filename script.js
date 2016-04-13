$(document).ready(function () {

    $('.accountChoice').click(function () {
        $('.choice').toggleClass('fa-circle-o fa-dot-circle-o');
    });

//$('.infoHover').hover(function() {
//    $('.IBAN').addClass('visible');
//});

//$('.policy').click( function() {
//    $('.policyBox').removeClass('unvisible');
//    $('.policyBox').addClass('visible');
//});
//
//$('.closeX').click(function() {
//    $('.policyBox').removeClass('visible');
//    $('.policyBox').addClass('unvisible');
//});


    $('.policy').click(function () {
        $('.policyBox').toggleClass('unvisible visible');

    });

$('#submitButton').click(function(event) {

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

    }});



});

//$('.closePopUp').click(function()   {
//    $('#PopUp-wrapper').attr('style', 'display:none');
//});
//
//$('.logInButton').click(function()  {
//    $('#PopUp-wrapper').removeAttr('style', 'display:none');
//})