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
        <Image src="images/rose.png" alt="" />
        <AboutContainer>
          <TextContainer>
            <h2>welcome to</h2>
            <h3>Nirmal Banquet</h3>
            <p>
              We are located at Bhaktapur, Lukunthali-01. Nirmal Banquet is one
              of the most renowned venues in the hospitality business and has
              been witness to countless wedding ceremonies.
              <br />
              <br /> We provide the best for hosting a large-sized gathering.
              Nirmal Banquet boasts of well-equipped banquet halls that offer
              the finest dining options and guarantees you perfection for every
              event that you plan on hosting here.
            </p>
            <Link to="more" smooth={true} duration={1000}>
              <button>read more</button>
            </Link>
          </TextContainer>
          <ImageContainer>
            <img src="images/about.jpg" alt="" />
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
  top: 0rem;
  right: 0rem;
  max-width: 60rem;
  z-index: 1;
  opacity: 0.8;

  @media (max-width: 768px) {
    top: 50rem;
    right: 7rem;
    opacity: 0.3;
  }
`;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: var(--background-color);

  margin-top: -12rem;

  @media (min-width: 1920px) {
    padding-top: 20rem;
  }

  @media (max-width: 768px) {
    padding-top: 12rem;
  }

  @media (max-width: 500px) {
    padding-top: 0rem;
  }

  @media (max-width: 400px) {
    margin-top: -13rem;
  }
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
  border-left: 0.3rem solid var(--secondary-color);
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

  @media (max-width: 500px) {
    margin: 0 1rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1.2;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 0 5rem;
    margin-top: 5rem;
  }

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

// const BackgroundContainer = styled.div`
//   background-color: var(--background-color);
//   width: 150%;
//   height: 30rem;
//   transform: rotate(5deg);
//   align-self: flex-start;
//   margin: -20rem;
//   z-index: -1;

//   @media (max-width: 768px) {
//     width: 200%;
//   }
// `;
