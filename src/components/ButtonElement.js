import styled from "styled-components";

export const BtnLink = styled.button`
  font-family: "Iskoola Pota";
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#414042" : "#010606")};
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#414042" : "#f1f2f2")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    font-family: "Iskoola Pota";
    transition: all 0.2s ease-in-out;
    /* change these colors to restaurant primaries on completion */
    background: ${({ primary }) => (primary ? "#f1f2f2" : "#414042")};
    color: #414042;
  }
`;
