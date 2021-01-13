import styled from "styled-components"

export const PartNerModalDiv = styled.div``
export const PartnerModalDescription = styled.div`
  h2 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.5rem;
  }
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
