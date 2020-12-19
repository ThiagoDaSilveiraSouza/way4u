import styled, { keyframes } from "styled-components"

const shaked = keyframes`
  0%{
    transform: translateX(0)
  }
  1%{
    transform: translateX(5px)
  }
  2%{
    transform: translateX(-5px)
  }
  3%{
    transform: translateX(5px)
  }
  4%{
    transform: translateX(-5px)
  }
  5%{
    transform: translateX(0)
  }
`
export const WhatsAppLink = styled.a`
  position: fixed;
  right: 30px;
  bottom: 60px;
  display: flex;
  box-sizing: border-box;
  animation: ${shaked} 10s linear infinite;
  transition: transform 0.3s;
  width: 10rem;
  :hover {
    transform: scale(1.1);
  }
  img {
    width: 100%;
  }
`
