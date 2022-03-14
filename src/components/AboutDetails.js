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
        title="Wedding Management"
        para="Marriages represent the blending of two unique people and 
        families, and your wedding should reflect that. We help you 
        in celebrating your wedding with some extra decoration that 
        reflect your wedding stand out from the rest."
      />

      <AboutExtra2
        image="images/design.jpg"
        num="02"
        title="Outdoor Catering"
        para="We provide outdoor catering to extend catering service to a 
        specific group outside the premises in the venue chosen by 
        the host. And we are available for Lalitpur, Bhaktapur 
        and Kathmandu districts."
      />

      <AboutExtra1
        image="images/design.jpg"
        num="03"
        title="Wedding Gift Package"
        para="The purpose of giving wedding gifts to wedding guests is to 
        show your appreciation. A specially picked out gift shows that 
        you put thought and consideration into the gift. We can provide
        and manage the gifts as per your need."
      />

      <AboutExtra2
        image="images/design.jpg"
        num="04"
        title="Wedding Dress Management"
        para="Wedding dress should be special and must suit you. All types of dresses like suit, Daura Suruwal, etc. for groom 
        and gown, saree, etc. for bride can be managed and provided to you."
      />

      <AboutExtra1
        image="images/design.jpg"
        num="05"
        title="Event Management"
        para="We manage all kinds of events:
        Private events like Wedding receptions, Birthday 
        parties, Festival gatherings, etc. 
        Corporate events like Business dinners, 
        Conferences, Seminars, Meetings, etc.
        Charity events like Sports events, Charitable 
        auctions, etc."
      />

      <AboutExtra2
        image="images/design.jpg"
        num="06"
        title="Logistic Management"
        para="Planning an event requires you to stay on top of a lot of things. 
        So, we create an event plan, build a team, and coordinate 
        with you for great and good deliverables to you. We will set up
        as your requirements and purpose."
      />

      <AboutExtra1
        image="images/design.jpg"
        num="07"
        title="Props Management"
        para="We manage all kinds of props like different gifts,
        lighting, sound, setting up mandap and many more that
        is necessary during any event that occurs in our banquet."
      />

      <AboutExtra2
        image="images/design.jpg"
        num="08"
        title="Stall Live Management"
        para="We often create food stall ideas,which serve your tastes in 
        the most visually appealing manner possible. We create the
         stall live in different occasions in different places."
      />
    </>
  );
};

export default AboutDetails;
