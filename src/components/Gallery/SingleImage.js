import React from "react";
import styled from "styled-components";
import { FaTimes, FaAngleRight, FaAngleLeft } from "react-icons/fa";

const SingleImage = ({
  showPhoto,
  viewPhoto,
  imgSrc,
  getSrc,
  setId,
  id,
  num,
}) => {
  return (
    <SingleImageContainer showPhoto={showPhoto}>
      <CloseBtn>
        <FaTimes onClick={viewPhoto} />
      </CloseBtn>
      <Prev
        onClick={() => {
          setId(id === 1 ? num : id - 1);
          getSrc(id);
        }}
      >
        <FaAngleLeft />
      </Prev>
      <img src={imgSrc} alt="" />

      <Next
        onClick={() => {
          setId(id === num ? 1 : id + 1);
          getSrc(id);
        }}
      >
        <FaAngleRight />
      </Next>
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

  img {
    width: 100%;
    height: 90vh;
    object-fit: contain;
    transition: 0.4s;

    /* transform: ${(props) =>
      props.animate ? "translateX(0%)" : "translateX(-100%)"};*/
  }

  @media (max-width: 500px) {
    div {
      font-size: 2.5rem;
      top: 0.5rem;
      right: 0.5rem;
    }
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 5rem;
  right: 5rem;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(1.3);
  }
`;

const Prev = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) scale(1);
  background: transparent;
  font-size: 5rem;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    background-color: transparent;
    transform: translateY(-50%) scale(1.2);
  }
`;

const Next = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) scale(1);
  background: transparent;
  font-size: 5rem;
  cursor: pointer;
  transition: 0.4s;
  color: #fff;
  margin-right: 1rem;

  &:hover {
    transform: translateY(-50%) scale(1.2);
    background-color: transparent;
  }
`;
