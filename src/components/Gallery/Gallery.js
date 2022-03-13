import React, { useState } from "react";
import Heading from "../Heading";
import styled from "styled-components";
import SingleImage from "./SingleImage";
import { galleryData } from "./galleryData";

const Gallery = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const viewPhoto = () => {
    setShowPhoto(!showPhoto);
  };

  const getImageSrc = (src) => {
    setImgSrc(src);
  };

  return (
    <>
      <div id="gallery"></div>
      <Heading letter="G" title="our gallery" subTitle="photos" />
      <ImageContainer>
        <SingleImage
          viewPhoto={viewPhoto}
          imgSrc={imgSrc}
          showPhoto={showPhoto}
        />
        <Column>
          {galleryData.map((image, index) => {
            return (
              <img
                key={index}
                src={image.url}
                alt=""
                onClick={() => {
                  getImageSrc(image.url);
                  viewPhoto();
                }}
              />
            );
          })}
        </Column>

        {/* <Column>
          <img src="images/1.jpg" alt="" />

          <img src="images/4.jpg" alt="" />
        </Column>

        <Column>
          <img src="images/2.jpg" alt="" />
          <img src="images/8.jpg" alt="" />
        </Column>

        <Column>
          <img src="images/5.jpg" alt="" />
          <img src="images/6.jpg" alt="" />
        </Column>

        <Column>
          <img src="images/7.jpg" alt="" />
          <img src="images/3.jpg" alt="" />
        </Column> */}
      </ImageContainer>
    </>
  );
};

export default Gallery;

const ImageContainer = styled.div`
  position: relative;
  margin: 5rem auto;
  max-width: 114rem;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    padding: 0 5rem;
  }
`;

const Column = styled.div`
  column-count: 4;
  column-width: 25%;

  img {
    margin-top: 1rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }

  @media (max-width: 1024px) {
    column-count: 2;
    column-width: 50%;
  }

  @media (max-width: 500px) {
    column-count: 1;
    column-width: 100%;
  }

  // flex: 25%;
  // max-width: 25%;
  // padding: 0 0.5rem;

  // img {
  //   margin-top: 1rem;
  //   vertical-align: middle;
  // }

  // @media (max-width: 1024px) {
  //   flex: 50%;
  //   max-width: 50%;
  // }

  // @media (max-width: 500px) {
  //   flex: 100%;
  //   max-width: 100%;
  // }
`;
