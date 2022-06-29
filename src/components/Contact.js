import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Heading from "./Heading";
import styled from "styled-components";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef();

  const changeFormData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const getFormData = (e) => {
    e.preventDefault();
    const { fullName, email, message } = formData;
    console.log({ fullName, email, message });
    if (!fullName || !email || !message) {
      setIsErr(true);
      setMessage("Please fill all the fields!!!!!");
    } else {
      setIsErr(false);
      setMessage("Message sent successfully");
    }
    setFormData({ fullName: "", email: "", message: "" });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jzschdy",
        "template_9yzpbv8",
        form.current,
        "jF6qLkftTlt3CXtLN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setResult(true);
    setTimeout(() => setResult(false), 10000);

    // Post Contact Form details to database
    // postContact(e);
    getFormData(e);
  };
  return (
    <>
      <MainContainer id="contacts">
        <OverlayImg src="images/rose.png" alt="" />
        <Heading letter="C" title="contact us" subTitle="connect" />
        <Row>
          <ContactContainer isErr={isErr}>
            <p>
              We are looking forward to organize Your wedding and to create
              unforgettable memories of your Big Day!
            </p>
            {result && (
              <p
                style={{
                  margin: "20px 0",
                  color: "#fff",
                  textAlign: "center",
                }}
                className="message"
              >
                {message}
              </p>
            )}
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <input
                  type="text"
                  placeholder="Full Name:"
                  name="fullName"
                  value={formData.fullName}
                  onChange={changeFormData}
                />
                <input
                  type="email"
                  placeholder="Email:"
                  name="email"
                  value={formData.email}
                  onChange={changeFormData}
                />
              </div>
              <textarea
                type="text"
                placeholder="Message:"
                name="message"
                value={formData.message}
                onChange={changeFormData}
              />
              <button type="submit">Send</button>
            </form>
          </ContactContainer>
          <Map
            href="https://www.google.com/maps/place/Nirmal+Banquet/@27.6761103,85.3618849,17z/data=!4m5!3m4!1s0x39eb1a1bc5e5612d:0xfba2f509e7c2c769!8m2!3d27.6765478!4d85.3619189"
            target="_blank"
          >
            <img src="images/map.png" alt="" />
          </Map>
        </Row>
      </MainContainer>
    </>
  );
};

export default Contact;

const MainContainer = styled.div`
  position: relative;
`;

const OverlayImg = styled.img`
  position: absolute;
  top: -5rem;
  left: 10rem;
  max-width: 60rem;
  z-index: -1000;
  width: 100%;
  height: auto;
}

@media (max-width: 1600px) {
    opacity: 0.3;
}

@media (max-width: 1024px) {
    left: 0;
}
`;

const Row = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 114rem;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: 1200px) {
    padding: 0 10rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
    gap: 0;
  }
`;

const ContactContainer = styled.div`
  flex: 1;

  .message {
    background-color: ${(props) => (props.isErr ? "#C12026" : "green")};
  }

  p {
    text-align: left;
    padding: 3rem 0;
    max-width: 60rem;
    margin: 0 auto;
  }

  form {
    margin: 0 auto;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div {
      display: flex;
      gap: 2rem;

      input {
        flex: 1;
        padding: 1.5rem 2rem;
        border: 1px solid rgba(0, 0, 0, 0.25);
        font-family: "PT Serif", serif;
        font-size: 1.6rem;
        letter-spacing: 0.1rem;
        color: #000;

        &::placeholder {
          color: rgba(0, 0, 0, 0.8);
        }

        &:focus {
          outline: none;
          box-shadow: 0 0.1rem 2rem 0rem rgba(0, 0, 0, 0.1);
        }
      }
    }

    textarea {
      padding: 1.5rem 2rem;
      height: 20rem;
      border: 1px solid rgba(0, 0, 0, 0.25);
      font-family: "PT Serif", serif;
      font-size: 1.6rem;
      letter-spacing: 0.1rem;
      color: #000;

      &::placeholder {
        color: rgba(0, 0, 0, 0.8);
      }

      &:focus {
        outline: none;
        box-shadow: 0 0.1rem 2rem 0rem rgba(0, 0, 0, 0.1);
      }
    }

    button {
      margin-top: 2rem;
      max-width: 16rem;
    }
  }

  @media (max-width: 1024px) {
    p {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    form {
      max-width: 100%;
      padding: 0 5rem;
    }
  }

  @media (max-width: 600px) {
    p {
      padding: 3rem 5rem;
    }

    form {
      div {
        flex-direction: column;
      }
    }
  }

  @media (max-width: 500px) {
    form {
      padding: 0 1rem;
    }

    p {
      padding: 3rem 1rem;
    }
  }
`;

const Map = styled.a`
  flex: 1;
  margin-top: 5rem;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    padding: 0;
  }
`;
