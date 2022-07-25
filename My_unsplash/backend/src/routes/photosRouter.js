const express = require('express')
const photosController = require('../controllers/photosController')

const router = express.Router()

router
    .get('/photos/all', photosController.getAllPhotos)
    .get('/photos/:label', photosController.getPhotosByLabel)
    .post('/photos', photosController.postPhotos)
    .put('/photos', photosController.updatePhotos)
    .delete('/photos', photosController.deletePhotos)


module.exports = router