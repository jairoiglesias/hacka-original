
$(document).ready(function(){

    $('#btn_conectar').click(function(e){
        e.preventDefault()

        // Efetua o reset de sessão cacheada no Heroku
        var promise = $.ajax({
            url: 'https://hacka-original.herokuapp.com/get_cached_session'
        })

        promise.then(function(result){

            if(result.length == 0){
                window.location.href = 'login_original_connect.html'
            }
            else{
                window.location.href = 'login_success.html'
            }

        })

    })

    $('#btn_sair').click(function(){

        var promise = $.ajax({
            url: 'https://hacka-original.herokuapp.com/reset_cached_session'
        })

        promise.then(function(){
            $('#status').text('Sessão finalizada!')
        })

    })

    var checkLogin = function(){

        // Efetua o reset de sessão cacheada no Heroku
        var promise = $.ajax({
            url: 'https://hacka-original.herokuapp.com/get_cached_session'
        })

        promise.then(function(result){

            if(result.length != 0){
                window.location.href = 'login_success.html'
            }

        })

    }

    checkLogin()

})