import styled from "styled-components";

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
`;