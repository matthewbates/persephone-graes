import styled from "styled-components";

export const MenuContainer = styled.div`
  background: #f1f2f2;
  padding: 5rem 0;
  width: 100%;
  display: grid;
  justify-items: center;
  min-height: 692px;

  /* 
  @media screen and (max-width: 680) {
    padding: 100px 0;
  } */
`;

export const MenuCategories = styled.div``;

export const MenuItems = styled.div`
  display: grid;
`;

// .menu {
//   padding: 5rem 0;
// }
// .section-center {
//   width: 90vw;
//   margin: 0 auto;
//   max-width: 1170px;
//   display: grid;
//   gap: 3rem 2rem;
//   justify-items: center;
// }
// .menu-item {
//   display: grid;
//   gap: 1rem 2rem;
//   max-width: 25rem;
// }
// .photo {
//   object-fit: cover;
//   height: 200px;
//   width: 100%;
//   border: 0.25rem solid var(--clr-gold);
//   border-radius: var(--radius);
//   display: block;
// }
// .item-info header {
//   display: flex;
//   justify-content: space-between;
//   border-bottom: 0.5px dotted var(--clr-grey-5);
// }
// .item-info h4 {
//   margin-bottom: 0.5rem;
// }
// .price {
//   color: var(--clr-gold);
// }
// .item-text {
//   margin-bottom: 0;
//   padding-top: 1rem;
// }

// @media screen and (min-width: 768px) {
//   .menu-item {
//     grid-template-columns: 225px 1fr;
//     gap: 0 1.25rem;
//     max-width: 40rem;
//   }
//   .photo {
//     height: 175px;
//   }
// }
// @media screen and (min-width: 1200px) {
//   .section-center {
//     width: 95vw;
//     grid-template-columns: 1fr 1fr;
//   }
//   .photo {
//     height: 150px;
//   }
// }
