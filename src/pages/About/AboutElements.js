import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #414042;
  height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
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

// export const CardContainer = styled.div`
//   .content {
//     /* opacity: 50; */
//     transform: scale(85%);
//     transition: 1s;
//     padding: 40px;
//     border: 2px solid black;
//     border-radius: 15px;
//     box-shadow: rgba(0, 0, 0, 0.7) 0px 20px 38px,
//       rgba(0, 0, 0, 0.5) 0px 15px 12px;

//     @media (max-width: 969px) {
//       padding: 30px;
//     }

//     @media (max-width: 700px) {
//       padding: 20px;
//     }

//     .animate {
//       opacity: 1;
//       transition: 1s;
//       transform: scale(100%);

//       ${({ styleOverrides }) => ({ ...styleOverrides })}
//     }
//   }
// `;
