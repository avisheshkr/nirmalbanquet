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
    }, 3000);

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
          return (
            <div key={index} style={{ transform: `translateX(${x}%)` }}>
              <img src={item.imageUrl} alt="" />
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
  box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  div {
    height: 100%;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
