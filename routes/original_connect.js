
module.exports = function(app){

    // var rp = require('request-promise').defaults({simple:false})

    // var urlRootOriginalConnect = '//sb-autenticacao-api.original.com.br/OriginalConnect?'
    
    // urlRootOriginalConnect += 'scopes=account&callback_url=http://meuservidor.com/myapp&callback_id=1&developer_key=123'

    // global.sessionOriginal = []
    // global.accessToken = 'Bearer OWFiMTBlMTAtZDgxZi0xMWU3LWJjNTEtMDA1MDU2OWE3MzA1OmV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUowZVhCbElqb2lUMEYxZEdnaUxDSnBZWFFpT2pFMU1USXpNREUyT1RRc0ltVjRjQ0k2TVRVeE1qY3pNelk1TkN3aVlYVmtJam9pWVRabE16RmxOVEFpTENKcGMzTWlPaUphZFhBdWJXVWdSMkYwWlhkaGVTSXNJbk4xWWlJNklqbGhZakV3WlRFd0xXUTRNV1l0TVRGbE55MWlZelV4TFRBd05UQTFOamxoTnpNd05TSXNJbXAwYVNJNkltUTRNMk00TkRnd0xXUTRNV1l0TVRGbE55MWlZelV4TFRjeE5HUXdZMlkwTWpBeFl5SjkueF9YZ1NoSkt2OG41ZDZWdERkODJENGx0M245S2ZVek13bWRSdVJVb0VJMA=='

    // app.get('/get_extract', (req, res) => {

    //     var url = 'https://sandbox.original.com.br/accounts/v1/transaction-history?dateFrom=20160101'

    //     var requestOptions = {
    //         uri: url,
    //         resolveWithFullResponse: true,
    //         headers:{
    //             'developer-key': '28f9a5c9063a29e01343f1a910050e569a57fac0',
    //             'Authorization': global.accessToken
    //         }
    //     }

    //     rp(requestOptions).then(function(response){

    //         res.send(response.body)

    //     })

    // })
    
    app.get('/original_callback', (req, res) => {

        var authCode = req.query.auth_code
        var uid = req.query.uid

        // var requestOptions = {
        //     method: 'POST',
        //     uri : 'https://sb-autenticacao-api.original.com.br/OriginalConnect/AccessTokenController',
        //     form:{

        //     }
        // }


        console.log(authCode)
        console.log(uid)

        sessionOriginal.push({
            authCode, uid
        })

        res.render('callback_original')
        
    })

    app.get('/get_cached_session', (req, res) => {

        res.send(global.sessionOriginal)

    })

    app.get('/reset_cached_session', (req, res) => {

        global.sessionOriginal = []

        res.send('Session Reset Sucess!')

    })

}