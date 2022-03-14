import React, { useState } from "react";
import Heading from "../Heading";
import styled from "styled-components";
import SingleImage from "./SingleImage";
import { galleryData } from "./galleryData";

const Gallery = () => {
  const [data, setData] = useState(galleryData);
  const [showPhoto, setShowPhoto] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const viewPhoto = () => {
    setShowPhoto(!showPhoto);
  };

  const getImageSrc = (src) => {
    setImgSrc(src);
  };

  const filterItems = (curItem) => {
    const updatedItems = galleryData.filter(
      (item) => curItem === item.category
    );
    console.log(updatedItems);
    setData(updatedItems);
  };

  return (
    <>
      <div id="gallery"></div>
      <Heading letter="G" title="our gallery" subTitle="photos" />
      <FilterButtons>
        <button onClick={() => setData(galleryData)}>All</button>
        <button onClick={() => filterItems("photos")}>Photos</button>
        <button onClick={() => filterItems("videos")}>Videos</button>
      </FilterButtons>
      <ImageContainer>
        <SingleImage
          viewPhoto={viewPhoto}
          imgSrc={imgSrc}
          showPhoto={showPhoto}
        />
        <Column>
          {data.map((image, index) => {
            return (
              <div key={index}>
                <img
                  src={image.url}
                  alt=""
                  onClick={() => {
                    getImageSrc(image.url);
                    viewPhoto();
                  }}
                />
              </div>
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

const FilterButtons = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 400px) {
    button {
      padding: 1rem 2rem;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin: 5rem auto;
  max-width: 114rem;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    padding: 0 5rem;
  }

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  div {
    width: 25rem;
    height: 20rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        transform: scale(1.05);
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 1024px) {
    div {
      width: 30rem;
      height: 25rem;
    }
  }

  @media (max-width: 720px) {
    div {
      width: 40rem;
      height: 25rem;
    }
  }

  @media (max-width: 420px) {
    div {
      width: 30rem;
      height: 20rem;
    }
  }

  // @media (max-width: 500px) {
  //   column-count: 1;
  //   column-width: 100%;
  // }

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
