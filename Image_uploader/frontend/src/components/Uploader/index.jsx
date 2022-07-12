import React, { useState, useEffect } from "react";
import dragIllustration from "../../img/image.svg";
import { Styles } from "./style";
import SuccessIcon from "..//../img/success-icon.svg";
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
    API.post("/upload", form).then(async (response) => {
      setImageUrl(await response.data);
    });
  };

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(imageUrl);
    e.target.innerText = "Copied!";
    setTimeout(() => {
      e.target.innerText = "Copy Link";
    }, 5000);
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
              <input type="file" onChange={handleImage} />
              <span className="btn">Choose a file</span>
            </div>
          </>
        )}

        {image !== undefined && imageUrl === undefined && (
          <section className="loading__section">
            <p className="uploading__title">Uploading</p>
            <div className="loader">
              <div className="loaderBar"></div>
            </div>
          </section>
        )}
        {image !== undefined && imageUrl !== undefined && (
          <section className="preview__section">
            <img className="success__icon" src={SuccessIcon} alt="Success" />
            <p className="preview__title">Uploaded Succesfully</p>
            <img
              className="preview__image"
              src={imageUrl}
              alt="Uploaded preview"
            />
            <div className="copy__area">
              <input type="text" disabled value={imageUrl} />
              <button onClick={copyToClipboard}>Copy Link</button>
            </div>
          </section>
        )}
      </section>
    </Styles>
  );
};

export default Uploader;
