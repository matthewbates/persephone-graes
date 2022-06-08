import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #414042;
  height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  /* justify-content: center; */
  background-size: cover;

  .about-info {
    padding: 1rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.8rem;
  }
`;

export const AboutText = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  /* margin-top: -28rem; */
  color: #f1f2f1;
  font-family: "Great Vibes";
  line-height: 50px;
`;

export const AboutA = styled.div`
  font-family: "Iskoola Pota";
  color: #f1f2f2;
`;

export const AboutHours = styled.div`
  font-family: "Iskoola Pota";
  text-decoration: none;
`;
