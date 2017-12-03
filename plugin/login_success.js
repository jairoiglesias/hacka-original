
$(document).ready(function(){

    $('#btn_sair').click(function(){

        var promise = $.ajax({
            url: 'https://hacka-original.herokuapp.com/reset_cached_session'
        })

        promise.then(function(){
            window.location.href = 'index.html'
        })

    })

})