import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Dream = () => {
  return (
    <>
      <DreamContainer>
        <div>
          <h2>dream location</h2>
          <h3>in nepal</h3>
          <Link to="contacts" smooth={true} duration={1000}>
            <button>Contact Us</button>
          </Link>
        </div>
      </DreamContainer>
    </>
  );
};

export default Dream;

const DreamContainer = styled.div`
  background-image: url("images/location.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.7;
  height: 70rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15rem 0 0 0;

  div {
    background-color: rgba(255, 255, 255, 0.85);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 78rem;
    padding: 8rem 10rem;

    h2 {
      color: #000;
      font-size: 6rem;
    }

    h3 {
      font-size: 7rem;
      letter-spacing: 0.8rem;
      text-transform: capitalize;
      padding: 3rem 0 5rem 0;
    }
  }

  @media (max-width: 1024px) {
    div {
      max-width: 60rem;
      padding: 5rem;
      h2 {
        font-size: 4.5rem;
        text-align: center;
      }

      h3 {
        font-size: 5rem;
      }
    }
  }

  @media (max-width: 600px) {
    div {
      max-width: 30rem;
    }
  }
`;
