import React from "react";
import { Container } from "../../../GlobalStyle";
import {
  ServicesDescriptionContainer,
  ServicesDescriptionTitle,
  ServicesDescriptionText,
  ServicesIllustration,
  ServicesContainer,
} from "./services.elements";

export const Services = (props) => {
  const { Title, Text, ImgUrl, isReversed } = props;
  return (
    <>
      {/* <Container> */}
      <ServicesContainer isReversed={isReversed}>
        <ServicesIllustration src={ImgUrl} />
        <ServicesDescriptionContainer>
          <ServicesDescriptionTitle>{Title}</ServicesDescriptionTitle>
          <ServicesDescriptionText>{Text}</ServicesDescriptionText>
        </ServicesDescriptionContainer>
      </ServicesContainer>
      {/* </Container> */}
    </>
  );
};
