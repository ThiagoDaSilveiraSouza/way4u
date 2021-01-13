import styled from "styled-components"

export const BannerCode = styled.div`
  display: flex;
  gap: 0 20px;
  padding: 0 10px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    gap: 20px;
    padding: 40px 0;
    a {
      display: flex;
      width: 114px;
      transition: 0.2s;
      img {
        min-width: 100%;
        max-width: 100%;
      }
      :hover {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
        transform: scale(1.02);
      }
    }
    > img {
      max-width: 72px;
    }
  }
`
