const express = require('express')
const Photo = require('../models/photosSchema')

class photosController {

    static getAllPhotos = async (req, res) =>{
        let allPhotos = await Photo.find({})
        res.json(allPhotos)
    }
    static getPhotosByLabel = async (req, res) =>{
        let photosWithLabel = await Photo.find({label: req.params.label})
        res.json(photosWithLabel)
    }
    static postPhotos = (req, res) =>{
        
    }
    static updatePhotos = (req, res) =>{
        
    }
    static deletePhotos = (req, res) =>{
        
    }


}


module.exports = photosController;