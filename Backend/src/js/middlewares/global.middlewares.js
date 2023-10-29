const mongoose = require("mongoose");
const userService = require("../services/user.service.js");//essa variavel ta no use.crontrolles.js

// Funções que ocorrem para valicação antes de cada controller
const validId = (req, res, next) => {
    try {
        const id = req.params.id;

        //esse codigo é um padrão do mongoose para testar id se é valido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "Invalid ID" });
        }
        next();
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
};
const validUser = async (req, res, next) => {
    try {
        const id = req.params.id;

        const user = await userService.findByIdService(id);

        if (!user) {
            return res.status(400).send({ message: "User not found" });
        }

        req.id = id;
        req.user = user;
        next();
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
};

module.exports = {
    validId,
    validUser
}