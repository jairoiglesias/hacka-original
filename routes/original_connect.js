
module.exports = function(app){

    var urlRootOriginalConnect = '//sb-autenticacao-api.original.com.br/OriginalConnect?'
    
    urlRootOriginalConnect += 'scopes=account&callback_url=http://meuservidor.com/myapp&callback_id=1&developer_key=123'

    app.get('original_callback', (req, res) => {

        var authCode = req.query.auth_code
        var uid = req.query.uid

        console.log(authCode)
        console.log(uid)

        
    })

}