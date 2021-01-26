import React from "react";
import { AboutSection } from "./About.elements";
import { SectionHeader } from "../../GlobalStyle";
import { Services } from "../ReusableComponents/Services/Services";
import MentorshipImg from "../../Illustrations-SVG/SCENE1.svg";
import VisionImg from "../../Illustrations-SVG/SCENE2.svg";
import MissionImg from "../../Illustrations-SVG/SCENE7.svg";

const About = () => {
  return (
    <>
      <AboutSection>
        <SectionHeader>About Us</SectionHeader>
        {/* Mission statement */}
        <Services
          Title={"Our Mission"}
          Text={
            "Committed to improving the lives of our students, by equiping them with vital in computing technology  "
          }
          isReversed
          ImgUrl={MissionImg}
        />
        {/* Vision statement */}
        <Services
          Title={"Our Vision"}
          Text={
            "We will be the leading student association in the college, by leveraging our technological advantage"
          }
          ImgUrl={VisionImg}
        />
        {/* Mentorship program */}
        <Services
          Title={"Mentorship Program"}
          Text={
            "This is an initiative, that prepares our students to excel in their chosen careers in technological fields, by teaching in-demand tech skills"
          }
          isReversed
          ImgUrl={MentorshipImg}
        />
      </AboutSection>
    </>
  );
};
export default About;
