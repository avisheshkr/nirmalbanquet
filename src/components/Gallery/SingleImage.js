import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const SingleImage = ({ showPhoto, viewPhoto, imgSrc }) => {
  return (
    <SingleImageContainer showPhoto={showPhoto}>
      <div>
        <FaTimes onClick={viewPhoto} />
      </div>
      <img src={imgSrc} alt="" />
    </SingleImageContainer>
  );
};

export default SingleImage;

const SingleImageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0);
  transform: ${(props) => (props.showPhoto ? "scale(1)" : "scale(0)")};
  visibility: ${(props) => (props.showPhoto ? "visible" : "hidden")};
  opacity: ${(props) => (props.showPhoto ? "1" : "0")};
  z-index: 3000;
  transition: 0.4s;

  div {
    position: absolute;
    top: 5rem;
    right: 5rem;
    font-size: 3rem;
    color: #fff;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 90vh;
    object-fit: contain;
  }

  @media (max-width: 500px) {
    div {
      font-size: 2.5rem;
      top: 0.5rem;
      right: 0.5rem;
    }
  }
`;
