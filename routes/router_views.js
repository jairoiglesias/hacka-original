

// Simulação de banco de dados baseado em JSON

// var db = global

// db.interested = []
// db.property = []
// db.contracts = []
// db.novoContrato = 0

var db = global

db.conversation = []

function getRandomArbitrary(min, max) {

  return Math.floor(Math.random() * (max - min) + min)

}

module.exports = function(app) {

  var frases = []
  var curState = 0

  frases.push(
    {
      palavras: 'conta,indevida,indevido,recebi conta indevida,cobranca',
      resposta: 'Ok! Qual o valor da conta?',
      state: 1
    },
    {
      palavras: '[Number]',
      where: '<=100',
      resposta: 'Acho que o valor de [Number] não é muito viavel para iniciar um processo! Tem certeza que deseja prosseguir?',
      state: 2.1
    },
    {
      palavras: '[Number]',
      where: '>100',
      resposta: 'OK! Iremos prosseguir com o andamento do processo',
      state: 2.2
    },
    {
      palavras: 'sim,Sim,SIM',
      resposta: 'OK! Iremos prosseguir com o andamento do processo',
      state: 2.3
    }
  )

  app.get('/', (req, res) => {
    res.render('index')
  })

  app.get('/chat', (req, res) => {

    var text = req.query.text.split(' ')
    var total = text.length

    console.log(text)

    frases.forEach(function(value, index){

      var palavras = value.palavras
      var resposta = value.resposta

      if(total == 1){

        if(palavras == '[Number]'){

          try{
  
            var analise = eval(text + '' + value.where)

            console.log(analise)

            if(analise){

              var resp = resposta.replace('[Number]', text)
              res.send(resp)
              return

            }

          }
          catch(e){

          }
        }
        else{

          text.forEach(function(value2, index){

            if(palavras.indexOf(value2) != -1){
              res.send(resposta)
              return
            }

          })


        }

        curState = value.state
        console.log(curState)

      }
      else{

        text.forEach(function(value2, index){

          if(palavras.indexOf(value2) == -1){
            res.send(resposta)
            return
          }

        })

        curState = value.state
        console.log(curState)

      }


    })

    res.send('Não entendi o seu caso! Pode explicar com mais detalhes?')

  })

  app.get('/add_message', (req, res) => {
    
    var msg = req.query.msg
    var name = req.query.name

    db.conversation.push({
      msg, name
    })

    res.send('1')

  })

  app.get('/get_conversation', (req, res) => {

    res.send(db.conversation)

  })

  app.get('/reset_chat', (req, res) => {

    db.conversation = []

  })

  // Adicionar um interesse em um imovel
  app.post('/add_interest', (req, res) => {

    var nome = req.body.nome
    var idImovel = req.body.idImovel
    var valor = req.body.valor

    db.interested.push({
      nome,
      idImovel
    })

    var interested = db.interested.filter(function(value){
      return value.idImovel == idImovel
    })

    var totalInterested = interested.length

    var curProperty = ''

    property.forEach(function(value, index){
      if(value.id == idImovel){
        curProperty = value
      }
    })

    console.log(totalInterested)

    if(curProperty.capacity < totalInterested){
      console.log('Capacidade do imovel atingida')
    }
    else if(curProperty.capacity == totalInterested){
      
      property.forEach(function(value, index){

        console.log(value.id, idImovel)

        if(value.id == idImovel){
          console.log('Alugado !')
          value.alugado = true
          value.contrato = getRandomArbitrary(15000000, 10000000)
          db.novoContrato = idImovel
        }
      })

    }

    console.log(curProperty)
    console.log(interested)

    res.send('1')

  })

  app.get('/get_interest', (req, res) => {

    res.send(db.interested)

  })

  app.post('/break_contract', (req, res) => {
   

  })

  app.get('/check_new_contract', (req, res) => {

    if(db.novoContrato == 0){
      res.send('0')
    }
    else{

      property.forEach(function(value, index){
        if(value.id == db.novoContrato){
          db.novoContrato = 0
          res.send(value)
        }
      })

    }

  })

  app.get('/restart', (req, res) => {

    db.property = []
    populateDb()

    res.send('1')

  })

  app.get('/', (req, res) => {
    res.send(db.property)
  })

  app.post('/top5_comparativo_mes_concorrencia_v2', function(req, res){


    var ano = req.body.ano
    var mes = req.body.mes
    var categories = req.body.categories

    categories = JSON.parse(categories)

    // console.log(categories)
    // process.exit()

    var sql = `

      	SELECT B.* FROM (SELECT
            ANO_FABRICACAO,
            MID(DATA_EMPLACAMENTO, '5', '2') AS MES,
        MARCA,
            count(estado) AS TOTAL
          FROM
            empl_2015_2017
          WHERE
            ANO_FABRICACAO = '${ano}'
          AND MID(DATA_EMPLACAMENTO, '5', '2') = '${mes}' and MARCA != 'FIAT'
          GROUP BY
            ANO_FABRICACAO,
            MID(DATA_EMPLACAMENTO, '5', '2'),
            MARCA
          ORDER BY
            count(estado) DESC
          LIMIT 5) AS B

    
    `

    conn.query(sql, function(err, rows, fields){
      
      if(err) throw err

      var resultados = []

      var promiseConc = new Promise(function(resolve, reject){

        rows.forEach(function(value, index) {
          
          var tmp = categories[index]
          var estado = tmp.split('|')[0].trim()
          var MUNICIPIO = tmp.split('|')[1].trim()
          var marca = value.MARCA

          var sql = `

            SELECT B.* FROM (SELECT
                ANO_FABRICACAO,
                MID(DATA_EMPLACAMENTO, '5', '2') AS MES,
                estado,
                MUNICIPIO,
            MARCA,
                count(estado) AS TOTAL
              FROM
                empl_2015_2017
              WHERE
                ANO_FABRICACAO = '${ano}'
              AND MID(DATA_EMPLACAMENTO, '5', '2') = '${mes}' and MARCA = '${marca}' 
              GROUP BY
                ANO_FABRICACAO,
                MID(DATA_EMPLACAMENTO, '5', '2'),
                estado,
                MUNICIPIO,
                MARCA
              ORDER BY
                count(estado) DESC
              LIMIT 5) AS B

        
          `
          conn.query(sql, function(err, rows, fields){

            // rows.forEach(function(value, index){
            //   resultados.push(value)
            // })

            console.log(rows)

            resultados.push({categoria: rows})

            if(index == (categories.length - 1)){
              resolve(resultados)
            }

          })
            

        })


      })

      promiseConc.then(function(resultados){

        console.log(resultados)
        res.send(resultados)

      })
  
    })


  })

  app.get('/dashboard', function(req, res){
    res.render('dashboard')
  })

  app.get('/conversa', function(req, res){
    res.render('conversa')
  })

}