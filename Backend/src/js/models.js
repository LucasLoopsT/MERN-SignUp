//Models é a forma de bolo de um usuário
const mongoose = require('mongoose'); //Biblioteca Node.js
const bcrypt = require("bcryptjs"); //Criptografar as senhas

//Schema é uma metodo do mongoose
//Este é o modelo que será armazenado em uma coleção do mongo.db
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true , //para cada email ser unico
        lowercase:true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    }
})

//Criptografia:
//Esse 10 indica que var ter 10 saltos de criptografia
UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;