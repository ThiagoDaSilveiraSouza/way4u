import styled from 'styled-components'

export const BannerCode = styled.div`
  display: flex;
  gap: 0 40px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    gap: 20px;
    padding: 40px 0;
    img {
      :first-child {
        width: 114px;
      }
      :last-child {
        width: 72px;
      }
    }
  }
`
