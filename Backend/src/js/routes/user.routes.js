const {Router} = require("express");
const userRouter = Router();

// Classe dos usuários
const UserController = require("../controllers/user.controller.js"); 
const controller = new UserController();

// Importando middlewares
const {validId, validUser} = require("../middlewares/global.middlewares.js");

// Funções de Usuário
userRouter.post("/", controller.create);
userRouter.get("/", controller.findAll);
userRouter.get("/:id", validId, validUser, controller.findById);

module.exports = userRouter;