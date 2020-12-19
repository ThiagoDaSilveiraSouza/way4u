import styled from "styled-components"

export const PartnersSection = styled.section`
  padding: 50px 0;
  .centralizer {
    h2 {
      text-align: center;
      font-size: 25px;
    }
  }
`
export const PartnersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 20px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
  div {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    :hover {
      img {
        transform: scale(1.1);
      }
    }
    img {
      cursor: pointer;
      width: 13rem;
      transition: transform 0.2s;
    }
  }
`
