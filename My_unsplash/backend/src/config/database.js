const mongoose = require("mongoose");

mongoose
  .connect(
    "",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Conectado ao banco de dados"))
  .catch((err) => console.log(err));

const db = mongoose.connection;
module.exports = db;
