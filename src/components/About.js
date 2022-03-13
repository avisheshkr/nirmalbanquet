import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import AboutDetails from "./AboutDetails";
// import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const About = () => {
  return (
    <>
      <MainContainer id="about">
        {/* <ParallaxProvider>
          <Parallax
            className="custom-class"
            y={[-20, 20]}
            tagOuter="figure"
          ></Parallax>
        </ParallaxProvider> */}
        <Image src="images/parallax.png" alt="" />
        <AboutContainer>
          <TextContainer>
            <h2>welcome</h2>
            <h3>to Our Site</h3>
            <p>
              Belle Fleur’s mission is to deliver a heartfelt planning
              experience so you have a heart filled wedding day.
              <br />
              <br /> You can count on us to be calm, loving, hands-on and, most
              importantly, professional throughout your entire planning process.
            </p>
            <Link to="more" smooth={true} duration={1000}>
              <button>read more</button>
            </Link>
          </TextContainer>
          <ImageContainer>
            <img src="images/couple.jpg" alt="" />
          </ImageContainer>
        </AboutContainer>

        {/* <BackgroundContainer></BackgroundContainer> */}
      </MainContainer>

      <AboutDetails />
    </>
  );
};

export default About;

const Image = styled.img`
  position: absolute;
  top: 10rem;
  right: 0rem;
  max-width: 60rem;
  z-index: 1;
  opacity: 0.8;

  @media (max-width: 768px) {
    top: 50rem;
    right: 7rem;
  }
`;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: var(--background-color);

  margin-top: -12rem;
`;

const AboutContainer = styled.div`
  max-width: 114rem;
  display: flex;
  padding: 25rem 0 7rem 0;
  gap: 5rem;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

  @media (max-width: 1200px) {
    max-width: 95rem;
    gap: 0;
    align-items: flex-start;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 25rem 5rem 7rem 5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    padding: 20rem 0 7rem 0;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  border-left: 0.3rem solid var(--primary-color);
  padding: 0 5rem;

  p {
    padding: 4rem 0;
  }

  @media (max-width: 768px) {
    border-left: 0;
    border-bottom: 0.3rem solid var(--primary-color);
    padding: 0 0 5rem 0;
    margin: 0 5rem;
    h2,
    h3,
    p {
      text-align: center;
    }

    button {
      margin: 0 auto;
      display: block;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1.2;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 0 5rem;
    margin-top: 5rem;
  }
`;

const BackgroundContainer = styled.div`
  background-color: var(--background-color);
  width: 150%;
  height: 30rem;
  transform: rotate(5deg);
  align-self: flex-start;
  margin: -20rem;
  z-index: -1;

  @media (max-width: 768px) {
    width: 200%;
  }
`;
