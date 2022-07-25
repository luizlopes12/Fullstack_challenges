const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://luizlopes12:admin@nodedb.yfbap.mongodb.net/my-unsplash?retryWrites=true&w=majority')
  .then(() => console.log('Conectado ao banco de dados'))
  .catch((err) => console.log(err))

const db = mongoose.connection
module.exports = db;
