const router = require("express").Router();
const jwt = require("jsonwebtoken");

const Party = require("../models/Party")
const User = require("../models/user");

// middlewares
const verifyToken = require("../helpers/check-token");

// helpers
const getUserByToken = require("../helpers/get-user-by-token");

// create new party
router.post("/", verifyToken, async (req, res) => {

  const id = req.body.user_id; 

  // verify user 
  const user = await User.findOne({ _id: id }, { password: 0 });

  if (!user) {
    return res.status(400).json({ error: "O usuário não existe!" });
  }

  const party = new Party({
    title: req.body.title,
    description: req.body.description,
    partyDate: req.body.party_date,
    photos: req.body.photos,
    privacy: req.body.privacy,
    userId: id
  });

  try {      

      const newParty = await party.save();
      res.json({ error: null, data: newParty });

  } catch (error) {

      res.status(400).json({ error })
      
  }

});

// get all public parties
router.get("/all", async (req, res) => {

  try {      

    const parties = await Party.find({ privacy: false });
    res.json({ error: null, data: parties });

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

    console.log(userId);

    const parties = await Party.find({ userId: userId });
    res.json({ error: null, data: parties });

  } catch (error) {

    res.status(400).json({ error })
      
  }

});

// get party (public and private)
router.get("/", async (req, res) => {

  // find party
  const id = req.body.id;

  const party = await Party.findOne({ _id: id });

  if(party === null) {
    res.json({ error: null, msg: "Este evento não existe!" });
  }

  // public party
  if(party.privacy === false) {

    res.json({ error: null, data: party });

  // private party
  } else {

    const token = req.header("auth-token");

    const user = await getUserByToken(token);
    
    const userId = user._id.toString();
    const partyUserId = party.userId.toString();

    // check if user can access event
    if(userId == partyUserId) {
      res.json({ error: null, data: party });
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
  const partyUserId = req.body.userId;

  const userId = user._id.toString();

  // check if user owns the party
  if(userId != partyUserId) {

    res.status(401).json({ error: "Acesso negado!" });

  }

  try {      

    await Party.deleteOne({ _id: partyId });
    res.json({ error: null, msg: "Evento removido com sucesso!" });

  } catch (error) {

    res.status(400).json({ error })
      
  }

});

// Atualizar party
router.put("/", verifyToken, async (req, res) => {

  const token = req.header("auth-token");
  const user = await getUserByToken(token);
  const partyId = req.body._id;
  const partyUserId = req.body.userId;

  const userId = user._id.toString();

  // check if user owns the party
  if(userId != partyUserId) {

    res.status(401).json({ error: "Acesso negado!" });

  }

  try {      

    // returns updated data
    const updatedParty = await Party.findOneAndUpdate({ _id: partyId }, { $set: req.body }, {new: true});
    res.json({ error: null, msg: "Evento atualizado com sucesso!", data: updatedParty });

  } catch (error) {

    res.status(400).json({ error })
      
  }

});

module.exports = router;