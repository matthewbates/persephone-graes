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
  gap: 4rem 2rem;
  justify-items: center;
  margin-bottom: 50px;
  border: 2px solid #fff;

  @media screen and (min-width: 768px) {
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
  padding-top: 0.8rem;
  text-align: center;
  /* font-size: 12px; */
  padding: 0 auto;
  margin-bottom: 10px;
`;

export const MenuHeader = styled.header`
  text-decoration: underline;
  color: #f1f2f2;
  font-size: 6rem;
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const MenuH4 = styled.h4`
  font-family: "Great Vibes";
  font-size: 2.2rem;
  width: 100%;
  line-height: 1.25;
  margin-bottom: 0.75rem;

  @media screen and (min-width: 800px) {
    line-height: 1;
  }
`;

export const MenuInfo = styled.div`
  /* border: 2px solid #fff; */
`;

export const MenuItem = styled.p`
  color: #f1f2f2;
  margin-bottom: 1.25rem;
`;

export const MenuPrice = styled.p`
  font-weight: bold;
`;

export const MenuSubtext = styled.p`
  color: #f1f2f2;
  line-height: 20px;
  text-align: center;
  align-items: center;
  font-size: 12px;
  /* margin-left: 18rem; */

  @media screen and (max-width: 420px) {
    font-size: 10px;
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: center;
    align-items: center;
  }
`;
