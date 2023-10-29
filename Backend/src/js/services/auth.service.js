//Responsável pela comunicação com o banco
//Veremos se o email passado por parâmetro confere dentro do banco
const User = require("../models.js");

const loginService = (email) => User.findOne({email: email}).select("+password");

module.exports = loginService;