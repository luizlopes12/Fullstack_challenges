import API from "./services/API";
import React, {useEffect, useState} from "react";
function App() {
  // Setting the image file state
  const [image, setImage] = useState()
  useEffect(()=>{
    // API test
    API.get('/')
    .then(response =>{
      console.log(response.data)
    })
  },[])
  // Setting the image to be uploaded
  const handleImage = (e) =>{
    setImage(e.target.files[0])
  }
  // Uploading image and getting the url to access it
  const uploadImage = async (e) =>{
    e.preventDefault()
    const form = new FormData()
    form.append('file', image)
    API.post('/upload', await form)
      .then(async response =>{
        let imageUrl = await response.data
        console.log(imageUrl)
      })
  }

  return (
    <>
    
    <form onSubmit={uploadImage} encType='multipart/form-data'>
        <input type='file' file={image} onChange={handleImage}/>
        <input type='submit' value='enviar'/>
    </form>
    
    </>
  );
}

export default App;
