import styled from "styled-components";
import { COLORS } from "../../GlobalStyle";
import NACOSlogo from "../../Images/NACOSlogo.jpg";
import HeroImage from "../../Images/HeroImage.jpg";

export const NacosLogo = styled.div`
  background: url(${NACOSlogo});
  background-position: center;
  background-size: 150px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px auto;
`;
export const HeroHeading = styled.h1`
  text-align: center;
  font-size: 60px;
  width: 900px;
  margin: 20px auto;
  @media screen and (max-width: 414px) {
    font-size: 35px;
    margin-bottom: 100px;
    width: 90%;
  }
`;
export const HeroHeading2 = styled.h2`
  text-align: center;
  font-size: 33px;
  margin-bottom: 100px;
  @media screen and (max-width: 414px) {
    font-size: 20px;
    /* margin-bottom: 200px; */
  }
`;
export const HeroHeading3 = styled.h2`
  text-align: center;
  font-size: 18px;
  font-style: italic;
  @media screen and (max-width: 414px) {
    font-size: 14px;
  }
`;
export const HeroOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 155, 55, 0.89);
  color: ${COLORS.white};
`;
export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${HeroImage});
  background-position: center;
  background-size: 100%;
  @media screen and (max-width: 414px) {
    background-repeat: no-repeat;
    max-width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: top right;
  }
`;
