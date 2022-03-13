import React from "react";
import styled from "styled-components";

const AboutExtra1 = ({ image, num, title, para }) => {
  return (
    <>
      <AboutExtraContainer>
        <img src={image} alt="" />
        <TextContainer>
          <div>{num}</div>
          <h4>{title}</h4>
          <p>{para}</p>
        </TextContainer>
      </AboutExtraContainer>
    </>
  );
};

export default AboutExtra1;

const AboutExtraContainer = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 114rem;
  gap: 5rem;
  padding: 10rem 0 0 0;
  justify-content: center;
  align-items: center;
  img {
    height: 38rem;
    flex: 1;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    max-width: 95rem;

    img {
      max-width: 50%;
    }
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 10rem 5rem 0rem 5rem;
  }

  @media (max-width: 768px) {
    padding: 5rem;
    flex-direction: column;
    img {
      max-width: 100%;
    }
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-bottom: 0.3rem solid var(--primary-color);
  margin-right: 7rem;
  height: 38rem;

  h4 {
    padding: 1.5rem 0;
  }

  div {
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 4rem;

    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  @media (max-width: 1200px) {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    align-items: center;
    padding-bottom: 5rem;

    h4,
    p {
      text-align: center;
    }
  }
`;
