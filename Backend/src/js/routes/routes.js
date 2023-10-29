const {Router} = require("express");

// Importando rotas
const userRouter = require("./user.routes");
const authRouter = require("./auth.routes");

const router = Router();
router.use("/users", userRouter);
router.use("/auth", authRouter);

module.exports = router;