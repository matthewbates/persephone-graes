import styled from "styled-components";

export const GoogleStyles = styled.div`
  justify-content: center;
  margin-top: 10px;
  z-index: 4;
  position: absolute;
  padding: 0px;
  border-width: 0px;
  display: flex;
  filter: drop-shadow(0, 0, 0, 0.6);

  @media screen and (max-width: 319px) {
    margin-top: 900px;
    height: 100vw;
    width: 100%;
  }
  /* display: flex;
  margin: 10px 50px;
  filter: drop-shadow(0, 0, 0, 0.2);
  margin-top: 30px;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
`;

export const GoogleViewport = styled.div`
  height: 100vw;
  width: 100%;
`;

export const AboutHeader = styled.h2`
  display: absolute;
  text-align: center;
  align-items: center;
  margin-top: 1.5rem;
  right: 0;
  left: 0;
  font-family: "Great Vibes";
  /* border-bottom: 1.8px solid var(--clr-grey-5); */
`;

export const AboutInfoText = styled.h3`
  display: absolute;
  text-align: center;
  font-family: "Great Vibes";
`;

export const AboutNumber = styled.h3`
  display: absolute;
  text-align: center;
  font-family: "Great Vibes";
`;
