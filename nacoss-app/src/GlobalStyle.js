import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
`;
// color pallete
export const COLORS = {
  black: "#000",
  white: "#fff",
  green: "rgb(6, 122, 22)",
  lightGreen: "rgba(44, 224, 68, 0.200)",
  purple: "#630872",
};
// Re-usable component used as container across all sections of the website,
// it centers its content
// contains media query
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 414px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
// Re-usable component used as header across all sections of the website
export const SectionHeader = styled.h2`
  display: flex;
  justify-content: center;
  color: ${COLORS.green};
  font-size: 35px;
  padding: 20px;
  @media screen and (max-width: 414px) {
    font-size: 30px;
  }
`;

// export const Section = styled.Section`
// `;

export default GlobalStyle;
