import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  background: white;
  height: 77px;
  > .centralizer {
    display: flex;
    height: 100%;
    justify-content: space-between;
    gap: 15px;
    flex-wrap: wrap;
    align-items: center;
    > * {
      z-index: 100;
    }
  }
`
export const HeaderNav = styled.nav`
  @media (max-width: 600px) {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    background: white;
    z-index: 99;
    transform: ${({ mobileStatus }) =>
      mobileStatus ? 'translateY(0%);' : 'translateY(-200%);'};
    opacity: ${({ mobileStatus }) => (mobileStatus ? '1' : '0')};
    box-sizing: border-box;
    transition: transform 0.3s, opacity 0.4s;
  }
  ul {
    display: flex;
    gap: 40px;
    text-transform: uppercase;
    font-size: 14px;
    @media (max-width: 600px) {
      flex-direction: column;
      padding: 0 5%;
    }
    li {
      transition: scale 0.2s;
      cursor: pointer;
      :hover {
        transform: scale(1.02);
      }
    }
  }
`
