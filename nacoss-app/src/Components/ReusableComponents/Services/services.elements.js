import styled from "styled-components";
import { COLORS } from "../../../GlobalStyle";

export const ServicesDescriptionTitle = styled.h3`
  color: ${COLORS.green};
  font-size: 25px;
  @media screen and (max-width: 414px) {
    font-size: 25px;
  }
`;

export const ServicesDescriptionText = styled.p`
  color: ${COLORS.black};
  margin: 20px auto;

  @media screen and (max-width: 414px) {
    width: 350px;
    height: 200px;
    margin: 10px auto;
  }
`;

export const ServicesDescriptionContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${COLORS.black};
  text-align: center;
  width: 400px;
`;

export const ServicesIllustration = styled.img`
  width: 500px;
  height: 500px;
  @media screen and (max-width: 414px) {
    width: 250px;
    height: 250px;
    margin: 10px auto;
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: ${({ isReversed }) => (isReversed ? "row-reverse" : "row")};
  margin: 0px;
  @media screen and (max-width: 414px) {
    flex-direction: column;
  }
`;
