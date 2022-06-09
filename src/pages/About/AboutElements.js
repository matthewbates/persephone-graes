import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #f1f2f2;
  height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  background-size: cover;

  @media screen and (max-width: 420px) {
    font-size: 0.8rem;
  }

  .card {
    transform: scale(85%);
    transition: 1s;
    padding: 10px;
    margin-top: 2rem;
    border: 2px solid black;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 20px 30px,
      rgba(0, 0, 0, 0.5) 0px 15px 12px;

    @media (max-width: 969px) {
      padding: 10px;
    }

    @media (max-width: 700px) {
      padding: 20px;
    }
  }
`;

export const AboutImage = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  align-items: center;
  text-align: center;
  justify-content: center;

  /* @media screen and (max-width: 820px) {
    margin-left: 30%;
  }

  @media screen and (max-width: 420px) {
    margin-left: 2.1rem;
  } */
`;

export const AboutText = styled.div`
  color: black;
  /* margin-top: -28rem; */
  font-family: "Great Vibes";
  line-height: 40px;
`;

export const AboutBio = styled.div`
  line-height: 30px;
`;
