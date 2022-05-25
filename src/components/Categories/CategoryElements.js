import styled from "styled-components";

export const CategoryContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

export const CategoryButton = styled.button`
  background: transparent;
  border-color: transparent;
  font-family: "Iskoola Pota";
  /* font-size: 1rem; */
  display: flex;
  text-transform: capitalize;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #414042;
    color: #f1f2f2;
    border-radius: 10px;
  }
`;

// .btn-container {
//   margin-bottom: 4rem;
//   display: flex;
//   justify-content: center;
// }
// .filter-btn {
//   background: transparent;
//   border-color: transparent;
//   font-size: 1rem;
//   text-transform: capitalize;
//   margin: 0 0.5rem;
//   letter-spacing: 1px;
//   padding: 0.375rem 0.75rem;
//   color: var(--clr-gold);
//   cursor: pointer;
//   transition: var(--transition);
//   border-radius: var(--radius);
// }
// .filter-btn:hover {
//   background: var(--clr-gold);
//   color: var(--clr-white);
// }
