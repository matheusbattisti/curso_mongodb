const { MongoClient } = require('mongodb')
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const url = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.khyn2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

let _db

const initDb = (cb) => {
  MongoClient.connect(url, { useUnifiedTopology: true })
    .then((client) => {
      _db = client
      cb(null, _db)
    })
    .catch((err) => {
      cb(err)
    })
}

const getDb = () => {
  return _db
}

module.exports = {
  initDb,
  getDb,
}
