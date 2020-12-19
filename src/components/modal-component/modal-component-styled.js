import styled from 'styled-components'

export const ModalSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${({ modalVisibility }) => (modalVisibility ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`
export const ModalBG = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`
export const ModalWrapper = styled.div`
  width: 660px;
  max-width: 90vw;
  background: white;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-sizing: border-box;
`
export const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  margin: 10px;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  span {
    width: 80%;
    height: 3px;
    background: var(--red-color);
    border-radius: 5px;
    display: flex;
    transform: rotate(45deg);
    :after {
      content: '';
      width: 100%;
      height: 100%;
      background: var(--red-color);
      border-radius: 5px;
      transform: rotate(-90deg);
    }
  }
`
