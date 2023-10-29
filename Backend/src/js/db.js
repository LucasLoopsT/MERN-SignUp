const mongoose = require("mongoose");
// Conectando ao Mongo.db
const connectDatabase = () => {
    console.log("Wait connecting to the databse");

    mongoose.connect(
        "mongodb+srv://login:login123@cluster0.m6gz8me.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true }

    ).then(() => console.log("MongoDB Atlas Connected")).catch((error) => console.log(error));
};

module.exports = connectDatabase;