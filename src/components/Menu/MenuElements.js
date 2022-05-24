import styled from "styled-components";

export const MenuContainer = styled.div`
  /* background: ${({ lightBg }) => (lightBg ? "#f1f2f2" : "#414042")}; */
  background: #f1f2f2;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const MenuWrapper = styled.div`
  background-color: #f1f2f2;
  display: grid;
  z-index: 1;
  /* height: 860px; */
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
