import styled from "styled-components"

export const PartNerModalDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    z-index: 0;
    position: absolute;
    max-width: 80%;
    max-height: 100%;
    opacity: 0.05;
    filter: grayscale(100%);
  }
  > div {
    z-index: 1;
    min-height: 340px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const PartnerModalDescription = styled.div`
  z-index: 2;
  h2 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.5rem;
    font-weight: 500;
  }
  ul {
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 500;
  }
`
export const PartnerModalHashtag = styled.p`
  font-size: 1.5rem;
`
export const PartnerModalSocialMedia = styled.div`
  display: flex;
  gap: 10px;
  margin: 40px 0;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    padding: 5px;
    box-sizing: border-box;
    background: red;
    transition: 0.2s;
    :hover {
      box-shadow: 0 0 5px 0 gray;
      transform: scale(1.1);
    }
  }
`
