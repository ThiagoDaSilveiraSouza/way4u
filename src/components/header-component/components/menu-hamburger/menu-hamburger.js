import styled from 'styled-components'

export const HamburgerBox = styled.div`
  width: 50px;
  height: 50px;
  display: none;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    display: flex;
  }
  span {
    width: 80%;
    height: 5px;
    background: black;
    border-radius: 10px;
    position: relative;
    transition: transform 0.2s;
    transform: ${({ menuStatus }) => (!menuStatus ? 'unset' : 'rotate(45deg)')};
    ::before,
    ::after {
      content: '';
      width: 100%;
      height: 100%;
      background: black;
      position: absolute;
      border-radius: 10px;
      transform: ${({ menuStatus }) =>
        !menuStatus ? 'unset' : 'rotate(-90deg)'};
      transition: 0.2s;
    }
    :before {
      top: ${({ menuStatus }) => (!menuStatus ? '-10px' : '0px')};
    }
    :after {
      top: ${({ menuStatus }) => (!menuStatus ? '10px' : '0px')};
    }
  }
`
