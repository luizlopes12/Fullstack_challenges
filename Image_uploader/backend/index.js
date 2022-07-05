const express = require('express')
const multer = require('multer')
const { storage } = require('./multerConfig')

const upload = multer({storage: storage})


const app = express()

app.use('/files', express.static('uploads'))

app.post('/upload', upload.single('file'), (req, res)=>{
    return res.json(req.file?.filename)
})


app.listen(3001)