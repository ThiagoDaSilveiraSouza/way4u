import styled from "styled-components"

const Button = styled.button`
  min-width: 25px;
  height: 25px;
  background: #e20e2d;
  border-radius: 100%;
  border: none;
  user-select: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  transition: box-shadow 0.2s;
  :hover {
    box-shadow: 0 0 5px 0 black;
  }
  hr {
    position: absolute;
    width: 40%;
    height: 0.5px;
    background: white;
    :first-child {
      transform: ${({ isChecked }) => (isChecked ? "none" : "rotate(90deg)")};
    }
  }
`
export const PlusButton = ({ isChecked = true }) => {
  return (
    <Button isChecked={isChecked}>
      <hr></hr>
      <hr></hr>
    </Button>
  )
}
