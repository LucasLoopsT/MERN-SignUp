// Autentificar o Usuário
const bcrypt = require("bcryptjs");
const loginService = require("../services/auth.service.js");

class AuthController{
    login = async (req, res) => {
        const {email, password} = req.body;
        try{

            const user = await loginService(email);
            const passwordIsValid = await bcrypt.compare(password, user.password);

            if(!user){
                return res.status(404).send({message: "Usuário ou senha não incorreto"});
            }
            
            if(!passwordIsValid){
                return res.status(400).send({message: "Usuário ou senha incorreto"});
            }

            res.status(200).send(user);            
        } catch(err){
            res.status(500).send(err.message);
        };

    }
}

module.exports = AuthController