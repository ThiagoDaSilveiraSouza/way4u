import styled from "styled-components"

export const ContactDescription = styled.div`
  color: white;
  h2 {
    font-size: 2.5rem;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    padding: 15px 0;
  }
`
export const DescriptionContent = styled.div`
  gap: 20px 0;
  > div {
    flex: 1 1 50%;
    strong {
      font-weight: 700;
    }
    p {
      font-weight: 400;
    }
    strong,
    p {
      font-size: 1.5rem;
    }
  }
`
export const DescriptionSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 1.5rem;
    margin: 1.5rem 0;
    font-weight: 700;
  }
  div {
    display: flex;
    gap: 10px;
  }
`


