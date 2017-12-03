
$(document).ready(function(){

    setTimeout(function(){
        var urlConnect = 'https://sb-autenticacao-api.original.com.br/OriginalConnect?scopes=account&callback_url=https://hacka-original.herokuapp.com/original_callback&callback_id=1&developer_key=28f9a5c9063a29e01343f1a910050e569a57fac0'
        
        chrome.tabs.create({
            url: urlConnect
        })

    }, 2000)

})