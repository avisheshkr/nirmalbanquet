import React from "react";
import AboutExtra1 from "./AboutExtra1";
import AboutExtra2 from "./AboutExtra2";
import Heading from "./Heading";

const AboutDetails = () => {
  return (
    <>
      <Heading letter="A" title="what we do" subTitle="about us" />
      <div id="more"></div>
      <AboutExtra1
        image="images/design.jpg"
        num="01"
        title="Event Design"
        para="We will create a design plan for your wedding. We will cover
        everything from attire, to stationery, to personalized details,
        florals, and rentals to ensure a cohesive look for your event."
      />

      <AboutExtra2
        image="images/design.jpg"
        num="02"
        title="Online Planning Portal"
        para="Our online planning portal is where all of your wedding information & to dos will be stored. Your checklist, timeline, budget, guest list tracking, seating, contacts & additional notes."
      />

      <AboutExtra1
        image="images/design.jpg"
        num="03"
        title="Wedding Day Execution"
        para="Our team is ready to lead the entire vendor team on wedding day. We will attend your wedding rehearsal, as well as be on site for vendors, set up, as well as at your getting ready location."
      />
    </>
  );
};

export default AboutDetails;
