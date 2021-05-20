const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

router.post("/register", async (req, res) => {

    // verify user email
    const isEmailExists = await User.findOne({ email: req.body.email });

    if (isEmailExists) {
        return res.status(400).json({ error: "O e-mail informado já está em uso." });
    }

    // creating password
    const salt = await bcrypt.genSalt(12);
    const reqPassword = req.body.password;

    const password = await bcrypt.hash(reqPassword, salt);
  
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password
    });

    try {      

        const newUser = await user.save();
        res.json({ error: null, data: newUser._id });

    } catch (error) {

        res.status(400).json({ error })
        
    }

});

router.post("/login", async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    // check if user exists
    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(400).json({ error: "Não há usuário cadastrado com este e-mail!" });
    }

    // check if password match
    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword) {
        return res.status(400).json({ error: "Senha inválida" });
    }

    // create token
    const token = jwt.sign(
        // payload data
        {
        name: user.name,
        id: user._id,
        },
        "nossosecret"
    );

    res.header("auth-token", token).json({
        error: null,
        data: {
          token,
        },
    });


})

module.exports = router;