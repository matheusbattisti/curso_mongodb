const Router = require('express').Router;
const db = require("../db/connection");
const {ObjectId} = require('mongodb');

const router = Router();

router.get('/', function(req, res) {

  res.render('notes/create');

})

router.get('/:id', function(req, res) {

  (async() => {

    const id = new ObjectId(req.params.id);

    const note = (await db.getDb().db().collection('notes').find({ _id: id}).toArray())[0]
    
    // console.log(note) 

    res.render('notes/detail', {note});

  })()
    .catch(err => console.log(err))
  
});

router.get('/edit/:id', function(req, res) {

  (async() => {

    const id = new ObjectId(req.params.id);

    const note = (await db.getDb().db().collection('notes').find({ _id: id}).toArray())[0]
    
    // console.log(note) 

    res.render('notes/edit', {note});

  })()
    .catch(err => console.log(err))
  
});
  
router.post('', function(req, res) {

  const data = req.body;
  const title = data.title;
  const desc = data.description;

  db.getDb()
  .db().collection('notes').insertOne({title: title, desc: desc})

  res.redirect('/', 301, { msg: "Nota adicionada!"});

});

module.exports = router;
