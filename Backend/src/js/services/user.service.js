const User = require("../models.js");

//.create é um metodo do mongoose para criar um novo documento no mongoDB
const createService = (body) => User.create(body);

//.find é um método de consulta do Mongoose para consultar as coleções
const findAllService = () => User.find();

//findById é um método de consulta do Mongoose que é utilizado para recuperar um único documento com base no ID.
const findByIdService = (id) => User.findById(id);

module.exports = {
    createService,
    findAllService,
    findByIdService
};