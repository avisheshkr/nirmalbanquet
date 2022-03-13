import React from "react";
import styled from "styled-components";
// import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const Restaurant = () => {
  return (
    <>
      <MainContainer>
        {/* <ParallaxProvider>
          <Parallax
            className="custom-class"
            y={[-20, 20]}
            tagOuter="figure"
          ></Parallax>
        </ParallaxProvider> */}
        <Image src="images/parallax.png" alt="" />
        <RestaurantContainer>
          <TextContainer>
            <h2>RESTAURANT & BAR</h2>
            <h3>Get ready for the fresh & healthy dining</h3>
            <p>
              Spend your quality time and evenings enjoying the peaceful
              atmosphere of the bar. We serve fresh beverages along with fresh
              juices and some delicious cocktails. Experience the excellent
              taste of hygienic multi cuisines. We provide you with warm and
              friendly service. Get the facility of attentive and gracious
              quality service from us. Enjoy the beautiful scenario with the
              serving of some mouth watery beverages and drinks. Have a great
              experience with quality food service as well as some friendly
              staffs.
            </p>
            <button href="#">read more</button>
          </TextContainer>
          {/* <ImageContainer>
            <img src="images/couple.jpg" alt="" />
          </ImageContainer> */}
        </RestaurantContainer>

        <BackgroundContainer></BackgroundContainer>
      </MainContainer>
    </>
  );
};

export default Restaurant;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 6rem;

  background-color: var(--background-color);
`;

const Image = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  max-width: 60rem;
  z-index: 1;
  opacity: 0.3;
`;

const RestaurantContainer = styled.div`
  max-width: 114rem;
  // display: flex;
  padding: 10rem 0 7rem 0;
  // gap: 5rem;
  // align-items: center;
  // justify-content: space-between;
  z-index: 2;
`;

const TextContainer = styled.div`
  // flex: 1;
  // border-left: 0.3rem solid var(--primary-color);
  padding: 0 5rem;

  h2,
  h3 {
    text-align: center;
  }

  h3 {
    padding-top: 1rem;
  }

  p {
    padding: 4rem 0;
    text-align: center;
  }
  button {
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    h3 {
      line-height: 4.3rem;
    }
  }

  @media (max-width: 350px) {
    p {
      padding: 0 3rem;
    }
  }
`;

// const ImageContainer = styled.div`
//   flex: 1.2;
// `;

const BackgroundContainer = styled.div`
  background-color: var(--background-color);
  width: 150%;
  height: 30rem;
  transform: rotate(5deg);
  // align-self: flex-start;
  margin: -20rem;
  z-index: -1;
`;
