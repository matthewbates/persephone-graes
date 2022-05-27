import styled from "styled-components";

export const MenuContainer = styled.div`
  padding: 2rem 0;
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

export const MenuItem = styled.div`
  display: grid;
  gap: 1rem 2rem;
  max-width: 25rem;

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

export const MenuInfo = styled.div`
    
`