const mongoose = require("mongoose");
require('dotenv').config()
mongoose.connect(
  process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Conectado ao banco de dados"))
  .catch((err) => console.log(err));

const db = mongoose.connection;
module.exports = db;
