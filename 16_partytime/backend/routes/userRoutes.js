const router = require("express").Router();

const User = require("../models/user");

// middlewares
const verifyToken = require("../helpers/check-token");

// helpers
const getUserByToken = require("../helpers/get-user-by-token");

router.get("/", verifyToken, async (req, res) => {

    const id = req.body._id; 

    // verify user 
    const user = await User.findOne({ _id: id });

    if (!user) {
        return res.status(400).json({ error: "O usuário não existe!" });
    }

    res.json({ error: null, user });

});

// Atualizar user
router.put("/", verifyToken, async (req, res) => {

    const token = req.header("auth-token");
    const user = await getUserByToken(token);
    const partyId = req.body._id;
    const userReqId = req.body._id;
  
    const userId = user._id.toString();
  
    // check if user id is equal token user id
    if(userId != userReqId) {
  
      res.status(401).json({ error: "Acesso negado!" });
  
    }
  
    try {      
  
      // returns updated data
      const updatedUser = await User.findOneAndUpdate({ _id: userId }, { $set: req.body }, {new: true});
      res.json({ error: null, msg: "Usuário atualizado com sucesso!", data: updatedUser });
  
    } catch (error) {
  
      res.status(400).json({ error })
        
    }
  
  });

module.exports = router;