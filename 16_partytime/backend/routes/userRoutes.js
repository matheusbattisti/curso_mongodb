const router = require("express").Router();

router.get("/profile", async (req, res) => {

    res.send("Bem vindo ao seu perfil!")

});

module.exports = router;