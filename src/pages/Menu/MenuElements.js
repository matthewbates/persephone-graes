import styled from "styled-components";

export const MenuContainer = styled.div`
  padding: 2rem 0;
  background-color: #414042;
`;

export const MenuCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  gap: 3rem 2rem;
  justify-items: center;
  margin-bottom: 50px;
  @media screen and (min-width: 1200px) {
    width: 95vw;
    grid-template-columns: 1fr 1fr;
  }
`;

export const MenuWrapper = styled.div`
  display: grid;
  gap: 1rem 2rem;
  max-width: 25rem;
  /* border: 1px solid #f1f2f2; */
  @media screen and (min-width: 768px) {
    grid-template-columns: 225px 1fr;
    gap: 0 1.25rem;
    max-width: 40rem;
  }
`;

export const MenuImage = styled.img`
  background-color: #414042;
  /* was originally cover */
  object-fit: contain;
  height: 200px;
  width: 100%;
  display: block;
  @media screen and (min-width: 768px) {
    .photo {
      height: 200px;
    }
  }
  @media screen and (min-width: 1200px) {
    .photo {
      height: 215px;
    }
  }
`;

export const MenuText = styled.div`
  color: #f1f2f2;
  font-family: "Iskoola Pota";
  /* margin-bottom: 0; */
  /* margin-top: 0; */
  padding-top: 0.8rem;
  text-align: center;
  /* font-size: 12px; */
`;

export const MenuHeader = styled.header`
  text-decoration: underline;
  color: #f1f2f2;
  font-size: 6rem;
  display: flex;
  text-align: center;
  justify-content: space-between;
  /* border-bottom: 1.8px solid var(--clr-grey-5); */
`;

export const MenuH4 = styled.h4`
  font-family: "Great Vibes";
  font-size: 1.6rem;
  width: 100%;
  font-weight: bold;
  letter-spacing: var(--spacing);
  line-height: 1.25;
  margin-bottom: 0.75rem;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 800px) {
    line-height: 1;
  }
`;

export const MenuInfo = styled.div``;

export const MenuItem = styled.p`
  color: #f1f2f2;
  margin-bottom: 1.25rem;
`;

export const MenuPrice = styled.p`
  font-weight: bold;
`;

export const MenuSubtext = styled.p`
  margin-left: 10rem;
  margin-right: 10rem;
  /* border: 1px solid black; */
  display: flex;
  color: #f1f2f2;
  text-align: center;
  align-items: center;
  font-size: 10px;
  /* margin-left: 18rem; */

  @media screen and (max-width: 420px) {
    font-size: 6px;
    text-align: center;
    align-items: center
  }
`;
