const userService = require("../services/user.service.js");

class UserController {
    //Função de callback
    //async para dizer que é uma função assincrona
    create = async (req, res) => {
        try {//constante que verifica todos os campos
            const { name, email, password} = req.body;

            if (!name || !email || !password) {
                res.status(400).send({ message: "Preencha todos os espaços" });
            }

            //await é usado junto com async
            const user = await userService.createService(req.body);

            if (!user) {
                return res.status(400).send({ message: "Erro ao criar usuário" });
            }

            res.status(201).send({
                message: "Usuário criado com sucesso!",
                user: {
                    id: user._id,
                    name,
                    email,
                }
            });
        } catch (err) {
            res.status(500).send({ message: err.mensage });
        }
    }

    findAll = async (req, res) => {
        try {
            const users = await userService.findAllService();

            if (users.length === 0) {
                return res.status(400).send({ message: "There are no registered users" });
            }
            res.send(users);
        } catch (err) {
            res.status(500).send({ message: err.message })
        }
    };

    findById = async (req, res) => {
        try {
            const user = req.user;
            res.send(user);
        } catch (err) {
            res.status(500).send({ message: err.mensage })
        }
    }
}

module.exports = UserController;