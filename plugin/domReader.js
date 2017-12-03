$(function(){

    var ticketNumber = 'ALO10'
    var creditCardNumber = '9874.3658.3543.5065'
    var process = false

    setInterval(function(){

        $('#ticket-number').val(ticketNumber)

        var curValue = $('#ticket-number').val()

        if(curValue.length > 0 && process == false) {

            setTimeout(function(){

                $('#creditCard-cardNumber').val(creditCardNumber)

                $.notify("Compra efetuada com sucesso!", 
                {
                    className: 'info',
                    position:"bottom right"
                })

            }, 15000)

            process = true

        }

    }, 1000)


});