import styled from 'styled-components'

export const FooterStyled = styled.footer`
  .centralizer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 0;
    @media (max-width: 450px) {
      justify-content: center;
    }
    p {
      font-size: 20px;
    }
  }
`
