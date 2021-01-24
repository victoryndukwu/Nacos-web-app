import React from "react";
import {
  HeroHeading,
  NacosLogo,
  HeroHeading2,
  HeroHeading3,
  HeroOverlay,
  HeroSection,
} from "./Hero.elements";

function Hero() {
  return (
    <>
      <HeroSection>
        <HeroOverlay>
          <NacosLogo />
          <HeroHeading>Nigeria Association of Computing Students</HeroHeading>
          <HeroHeading2>YabaTech Chapter</HeroHeading2>
          <HeroHeading3>...towards advanced technology</HeroHeading3>
        </HeroOverlay>
      </HeroSection>
    </>
  );
}

export default Hero;
