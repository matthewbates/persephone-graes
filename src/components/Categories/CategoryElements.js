import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const ButtonFilter = styled.button`
  color: #f1f2f2;
  font-family: "Iskoola Pota";
  background: transparent;
  border-color: transparent;
  font-size: 1rem;
  text-transform: capitalize;
  cursor: pointer;
  margin: 0 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 10px;
  transition: var(--transition);

  &:hover {
    background: #f1f2f2;
    color: #414042;
  }
`;
