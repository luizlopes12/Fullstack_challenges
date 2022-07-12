import React, { useState, useEffect } from "react";
import dragIllustration from "../../img/image.svg";
import { Styles } from "./style";
import API from "../../services/API";

const Uploader = () => {
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState();


  useEffect(() => {
    // API test
    API.get("/").then((response) => {
      console.log(response.data);
    });
  }, []);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setImage((state) => uploadImage(state));
  };
  const uploadImage = async (img) => {
    const form = new FormData();
    form.append("file", img);
    console.log(form.file);
    API.post("/upload", await form).then(async (response) => {
        setImageUrl(await response.data)
    });
  };

  return (
    <Styles>
      <section className="upload__section">
        {image === undefined && (
          <>
            <h1 className="title">Upload your image</h1>
            <p className="subtitle">File should be jpeg, jpg, png...</p>
            <div className="drag__drop">
              <input type="file" onChange={handleImage} />
              <img src={dragIllustration} alt="Drag and drop" />
              <span>Drag and drop your image here</span>
            </div>
            <div className="btn__container">
              <input type="file" onChange={handleImage}/>
              <span className="btn">
                Choose a file
              </span>
            </div>
          </>
        )}

        {image !== undefined && (
          <>Uploading</>
        )}


      </section>
    </Styles>
  );
};

export default Uploader;
