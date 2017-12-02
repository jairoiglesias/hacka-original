
module.exports = function(app){

    var urlRootOriginalConnect = '//sb-autenticacao-api.original.com.br/OriginalConnect?'
    
    urlRootOriginalConnect += 'scopes=account&callback_url=http://meuservidor.com/myapp&callback_id=1&developer_key=123'

    global.sessionOriginal = []

    app.get('/original_callback', (req, res) => {

        var authCode = req.query.auth_code
        var uid = req.query.uid

        console.log(authCode)
        console.log(uid)

        sessionOriginal.push({
            authCode, uid
        })

        res.send('Callback Original Connect Handled !!!')
        
    })

    app.get('/get_cached_session', (req, res) => {

        res.send(global.sessionOriginal)

    })

    app.get('/reset_cached_session', (req, res) => {

        global.sessionOriginal = []

        res.send('Session Reset Sucess!')

    })

}