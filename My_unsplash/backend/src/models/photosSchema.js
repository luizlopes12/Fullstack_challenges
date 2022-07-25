const mongoose = require('mongoose')

const PhotosSchema = new mongoose.Schema({
    label: String,
    imageUrl: String,
})

const Photo = mongoose.model('Photos', PhotosSchema);

module.exports = Photo;