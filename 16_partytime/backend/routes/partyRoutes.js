const router = require("express").Router();
const jwt = require("jsonwebtoken");
const multer = require("multer");

const Party = require("../models/party")
const User = require("../models/user");

// defining file storage
const diskStorage = require('../helpers/file-storage');
const upload = multer({ storage: diskStorage })

// middlewares
const verifyToken = require("../helpers/check-token");

// helpers
const getUserByToken = require("../helpers/get-user-by-token");

// create new party
router.post("/", verifyToken, upload.fields([{name: "photos"}]), async (req, res) => {

  // req data
  const title = req.body.title;
  const description = req.body.description;
  const partyDate = req.body.party_date;

  let files = [];

  if(req.files) {
    files = req.files.photos;
  }

  // validations
  if(title == "null" || description == "null" || partyDate == "null") {
    return res.status(400).json({ error: "Preencha pelo menos nome, descrição e data." });
  }

  // verify user 
  const token = req.header("auth-token");

  const userByToken = await getUserByToken(token);
  
  const userId = userByToken._id.toString(); 

  const user = await User.findOne({ _id: userId });

  if (!user) {
    return res.status(400).json({ error: "O usuário não existe!" });
  }

  // create photos array with path
  let photos = [];

  if(files && files.length > 0) {    

    files.forEach((photo, i) => {
      photos[i] = photo.path;
    });

  }

  const party = new Party({
    title: title,
    description: description,
    partyDate: partyDate,
    photos: photos,
    privacy: req.body.privacy,
    userId: userId
  });

  try {      

      const newParty = await party.save();
      res.json({ error: null, msg: "Evento criado com sucesso!", data: newParty });

  } catch (error) {

      res.status(400).json({ error })
      
  }

});

// get all public parties
router.get("/all", async (req, res) => {

  try {      

    const parties = await Party.find({ privacy: false }).sort([['_id', -1]]);
    res.json({ error: null, parties: parties });

  } catch (error) {

    res.status(400).json({ error })
      
  }

});

// get user parties
router.get("/userparties", verifyToken, async function (req, res) {

  try {      

    const token = req.header("auth-token");

    const user = await getUserByToken(token);
    
    const userId = user._id.toString();

    const parties = await Party.find({ userId: userId });
    res.json({ error: null, parties: parties });

  } catch (error) {

    res.status(400).json({ error })
      
  }

});

// get user party
router.get("/userparty/:id", verifyToken, async function (req, res) {

  try {      

    const token = req.header("auth-token");

    const user = await getUserByToken(token);
    
    const userId = user._id.toString();
    const partyId = req.params.id;

    const party = await Party.findOne({ _id: partyId, userId: userId });

    console.log(party)

    res.json({ error: null, party: party });

  } catch (error) {

    res.status(400).json({ error })
      
  }

});

// get party (public and private)
router.get("/:id", async (req, res) => {

  // find party
  const id = req.params.id;

  const party = await Party.findOne({ _id: id });

  if(party === null) {
    res.json({ error: null, msg: "Este evento não existe!" });
  }

  // public party
  if(party.privacy === false) {

    res.json({ error: null, party: party });

  // private party
  } else {

    const token = req.header("auth-token");

    const user = await getUserByToken(token);
    
    const userId = user._id.toString();
    const partyUserId = party.userId.toString();

    // check if user can access event
    if(userId == partyUserId) {
      res.json({ error: null, party: party });
    } else {
      res.status(401).json({ error: "Acesso negado!" });
    }

  }  

});

// delete party
router.delete("/", verifyToken, async (req, res) => {

  const token = req.header("auth-token");
  const user = await getUserByToken(token);
  const partyId = req.body.id;
  const userId = user._id.toString();

  try {      

    await Party.deleteOne({ _id: partyId, userId: userId });
    res.json({ error: null, msg: "Evento removido com sucesso!" });

  } catch (error) {

    res.status(400).json({ error })
      
  }

});

// update party
router.put("/", verifyToken, upload.fields([{name: "photos"}]), async (req, res) => {

  console.log(req.body);

  // req data
  const title = req.body.title;
  const description = req.body.description;
  const partyDate = req.body.partyDate;
  const partyId = req.body.id;
  const partyUserId = req.body.user_id;

  let files = [];

  if(req.files) {
    files = req.files.photos;
  }

  // validations
  if(title == "null" || description == "null" || partyDate == "null") {
    return res.status(400).json({ error: "Preencha pelo menos nome, descrição e data." });
  }

  // verify user 
  const token = req.header("auth-token");

  const userByToken = await getUserByToken(token);
  
  const userId = userByToken._id.toString(); 

  const user = await User.findOne({ _id: userId });

  if (!user) {
    return res.status(400).json({ error: "O usuário não existe!" });
  }

  // build party object
  const party = {
    id: partyId,
    title: title,
    description: description,
    partyDate: partyDate,
    privacy: req.body.privacy,
    userId: partyUserId
  }; 

  // create photos array with path
  let photos = [];

  if(files && files.length > 0) {    

    files.forEach((photo, i) => {
      photos[i] = photo.path;
    });

    party.photos = photos;

  }
  
  try {      

    // returns updated data
    const updatedParty = await Party.findOneAndUpdate({ _id: partyId, userId: partyUserId }, { $set: party }, {new: true});
    res.json({ error: null, msg: "Evento atualizado com sucesso!", data: updatedParty });

  } catch (error) {

    res.status(400).json({ error })
      
  }

});

module.exports = router;