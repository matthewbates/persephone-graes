import styled from "styled-components";

export const CardContainer = styled.div`
  .content {
    /* opacity: 50; */
    background: black;
    background-color: black;
    transform: scale(85%);
    transition: 1s;
    padding: 40px;
    border: 2px solid #ffffff;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 20px 38px,
      rgba(0, 0, 0, 0.5) 0px 15px 12px;

    @media (max-width: 969px) {
      padding: 30px;
    }

    @media (max-width: 700px) {
      padding: 20px;
    }

    .animate {
      opacity: 1;
      transition: 1s;
      transform: scale(100%);

      ${({ styleOverrides }) => ({ ...styleOverrides })}
    }
  }
`;
