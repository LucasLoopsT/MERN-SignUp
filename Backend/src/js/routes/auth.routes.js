const {Router} = require("express");
const authRouter = Router();

//Classe de autentificação
const AuthController = require("../controllers/auth.controller.js"); 
const auth = new AuthController();

// Funções de Autentificação
authRouter.post("/", auth.login);

module.exports = authRouter;