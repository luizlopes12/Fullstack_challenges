import styled, { keyframes } from "styled-components";

const progressBarAnimation = keyframes`
  0% {
    left:0%;
    right:100%;
    width:0%;
  }
  10% {
    left:0%;
    right:75%;
    width:25%;
  }
  90% {
    right:0%;
    left:75%;
    width:25%;
  }
  100% {
    left:100%;
    right:0%;
    width:0%;
  }
  `;

export const Styles = styled.section`
  .upload__section {
    background: #fff;
    padding: 40px 20px;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.12) 0px 3px 7px -3px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .title {
      font-size: 1.5em;
      font-weight: 500;
      color: #4f4f4f;
      width: fit-content;
      margin: auto;
    }
    .subtitle {
      font-size: 0.8em;
      font-weight: 500;
      color: #828282;
      width: fit-content;
    }
    .drag__drop {
      width: 100%;
      background: #f6f8fb;
      margin: auto;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 30px 60px;
      border-radius: 12px;
      border: 2.5px dashed #97bef4;
      span {
        font-size: 0.8em;
        color: #bdbdbd;
      }
      input {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0;
        top: 0;
        &:hover {
          cursor: pointer;
        }
      }
    }

    .btn__container {
      position: relative;
      background: #2f80ed;
      transition: all 0.2s ease-in-out;
      &:hover {
        background: #2875da;
      }
      border-radius: 8px;
      width: 40%;
      color: #fff;
      display: flex;
      justify-content: center;
      padding: 10px 0;
      input {
        opacity: 0;
        top: 0;
        background: #000;
        position: absolute;
        width: 100%;
        height: 100%;
      }
      span {
        font-weight: 500;
        font-size: 0.8em;
      }
    }
  }
  .loading__section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .uploading__title {
      width: fit-content;
      font-size: 1.5em;
      font-weight: 500;
      color: #4f4f4f;
      margin: auto;
    }
    .loader {
      width: 350px;
      margin: 0 auto;
      border-radius: 10px;
      border: 4px solid transparent;
      position: relative;
      padding: 1px;
    }
    .loader:before {
      content: "";
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      position: absolute;
      top: -2px;
      right: -2px;
      bottom: -10px;
      left: -2px;
    }
    .loader .loaderBar {
      position: absolute;
      border-radius: 10px;
      height: 10px;
      top: 0;
      right: 100%;
      bottom: 0;
      left: 0;
      background: #4088ed;
      width: 0;
      animation: ${progressBarAnimation} 2s linear infinite;
    }
  }
`;
