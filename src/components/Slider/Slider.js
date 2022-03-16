import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { data } from "./sliderData";
import "./Slider.css";

const Slider = () => {
  const length = data.length;
  const [x, setX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setX(x === -(length - 1) * 100 ? 0 : x - 100);
      setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1);
    }, 7000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <>
      <SlideContainer>
        {data.map((item, index) => {
          const { imageUrl, imageUrl1, imageUrl2, imageUrl3 } = item;

          let src;

          if (window.innerWidth > "1024") {
            src = imageUrl;
          } else if (window.innerWidth <= "1024" && window.innerWidth > "768") {
            src = imageUrl1;
          } else if (window.innerWidth <= "768" && window.innerWidth > "500") {
            src = imageUrl2;
          } else {
            src = imageUrl3;
          }

          return (
            <div key={index} style={{ transform: `translateX(${x}%)` }}>
              <img src={src} alt="" />
            </div>
          );
        })}
      </SlideContainer>
      <Dots>
        {data.map((item, index) => {
          return (
            <div
              key={item.id}
              className={`${activeIndex === index ? "dot active" : "dot"}`}
              onClick={() => {
                setX(-index * 100);
                setActiveIndex(index);
              }}
            ></div>
          );
        })}
      </Dots>
    </>
  );
};

export default Slider;

const SlideContainer = styled.div`
  width: 100%;
  height: 60rem;
  display: flex;
  align-items: center;
  margin: 0 auto 2rem auto;
  overflow: hidden;
  // background: ;

  div {
    height: auto;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: 1920px) {
    height: 80rem;
  }

  @media (max-width: 1024px) {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    height: 75rem;
  }

  @media (max-width: 500px) {
    height: 60.5rem;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 1024px) {
    margin-top: -1rem;
  }

  @media (max-width: 400px) {
    margin-top: -4rem;
  }

  @media (max-width: 350px) {
    margin-top: -8rem;
  }
`;
