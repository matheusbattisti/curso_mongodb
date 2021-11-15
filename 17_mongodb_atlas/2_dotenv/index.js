// Configurações
require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const notesRoutes = require('./routes/notes')

const db = require('./db/connection')

const app = express()
const port = 8000

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/notes', notesRoutes)

// Rotas
app.get('/', function (req, res) {
  ;(async () => {
    const notes = await db.getDb().db().collection('notes').find({}).toArray()

    // console.log(notes)

    res.render('home', { notes })
  })().catch((err) => console.log(err))
})

db.initDb((err, db) => {
  if (err) {
    console.log(err)
  } else {
    app.listen(port, () => {
      console.log(`Nossa variável de ambiente: ${process.env.MY_VARIABLE}`)
      console.log(`Projeto rodando na porta:${port}`)
    })
  }
})
