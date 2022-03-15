import React from "react";
import styled from "styled-components";

const AboutExtra2 = ({ image, num, title, para }) => {
  return (
    <>
      <AboutExtraContainer className="reverse">
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

export default AboutExtra2;

const AboutExtraContainer = styled.div`
  margin: 0 auto;
  max-width: 114rem;
  display: flex;
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

  @media (max-width: 500px) {
    padding: 5rem 1rem;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-bottom: 0.3rem solid var(--secondary-color);
  margin-left: 7rem;
  height: 38rem;

  p {
    text-align: justify;
  }

  h4 {
    padding: 1.5rem 0;
    text-align: right;
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

  // p {
  //   text-align: right;
  // }

  @media (max-width: 1200px) {
    margin-left: 0;
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
