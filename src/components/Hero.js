import React from "react";
import styled from "styled-components";
import Slider from "./Slider/Slider";
import {
  FaFacebookSquare,
  FaInstagram,
  FaViber,
  FaWhatsappSquare,
} from "react-icons/fa";

const Hero = () => {
  return (
    <HeroContainer>
      <BlankContainer></BlankContainer>
      <ImageContainer>
        <Slider />
      </ImageContainer>
      <SocialContainer>
        <a
          href="https://www.facebook.com/nirmalbanquet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.instagram.com/nirmalbanquet074/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background:
              "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
            borderRadius: "10px",
            color: "#fff",
          }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/9779841926838"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#1b8b44",
          }}
        >
          <FaWhatsappSquare />
        </a>
        <a
          href="viber://chat?number=9779841926838"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#59267c",
          }}
        >
          <FaViber />
        </a>
      </SocialContainer>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  background-color: #a8cfe8;
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const BlankContainer = styled.div`
  width: 5vw;

  @media (max-width: 700px) {
    width: 7.5vw;
  }
`;

const ImageContainer = styled.div`
  height: 60rem;
  width: 90vw;
  z-index: 100;

  @media (max-width: 700px) {
    width: 85vw;
    height: 60rem;
  }

  @media (max-width: 500px) {
    order: 2;
    width: 100%;
    padding: 2rem;
  }
`;

const SocialContainer = styled.div`
  width: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: 0.4s;
    font-size: 4rem;
    color: #4267b2;

    &:hover {
      transform: translateY(-5%);
    }
  }

  @media (max-width: 1000px) {
    a {
      font-size: 3rem;
    }
  }

  @media (max-width: 700px) {
    width: 7.5vw;
  }

  @media (max-width: 500px) {
    flex-direction: row;
    order: 1;
    width: 100%;
    a {
      font-size: 4rem;
    }
  }
`;
