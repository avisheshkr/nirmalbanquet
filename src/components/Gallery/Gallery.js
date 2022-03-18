import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import styled from "styled-components";
import SingleImage from "./SingleImage";
import { galleryData } from "./galleryData";

const Gallery = () => {
  const [data, setData] = useState(galleryData);
  const [showPhoto, setShowPhoto] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [id, setId] = useState(null);

  let num = data.length;

  const getSrc = (id) => {
    const newData = galleryData.filter((data) => data.id === id);

    if (newData[0]) {
      setImgSrc(newData[0].url);
      console.log(newData[0].url);
    }
  };

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
    setData(updatedItems);
  };

  useEffect(() => {
    const preData = galleryData
      .slice(0, 8)
      .filter((data) => data.category === "photos");
    setData(preData);
  }, []);

  return (
    <>
      <div id="gallery"></div>
      <Heading letter="G" title="our gallery" subTitle="photos" />
      <FilterButtons>
        <button onClick={() => filterItems("photos")}>Photos</button>
        <button onClick={() => filterItems("videos")}>Videos</button>
      </FilterButtons>
      <ImageContainer>
        <SingleImage
          viewPhoto={viewPhoto}
          imgSrc={imgSrc}
          showPhoto={showPhoto}
          id={id}
          getSrc={getSrc}
          setId={setId}
          num={num}
        />
        <Column>
          {data.map((item, index) => {
            return (
              <div key={index}>
                {item.category === "photos" ? (
                  <img
                    src={item.url}
                    alt=""
                    onClick={() => {
                      getImageSrc(item.url);
                      setId(item.id);
                      viewPhoto();
                    }}
                  />
                ) : (
                  <video controls>
                    <source src={item.url} type="video/mp4" />
                  </video>
                )}
              </div>
            );
          })}
        </Column>
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

    img,
    video {
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
`;
