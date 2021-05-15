const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017/notesDb";

let _db;

const initDb = cb => {

  MongoClient.connect(url, { useUnifiedTopology: true })
    .then(client => {
      _db = client;
      cb(null, _db);
    })
    .catch(err => {
      cb(err);
    });

}

const getDb = () => {

  return _db;

}

module.exports = {
  initDb,
  getDb
}