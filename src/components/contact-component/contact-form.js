import styled from "styled-components"

export const ContactForm = styled.form`
  background: white;
  padding: 30px;
  color: #5d5d5d;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 1.8rem;
    line-height: 1.8rem;
  }
  input[type="button"] {
    border: none;
    background: #e20e2d;
    font-size: 1.4rem;
    color: white;
    width: 16.6rem;
    height: 3.2rem;
    align-self: flex-end;
    margin-top: 20px;
    outline: none;
    transition: box-shadow .2s;
    cursor: pointer;
    :hover{
      box-shadow: 0 0 0.5rem 0 black;
    }
  }
`
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 1.4rem;
    line-height: 1.4rem;
    font-weight: 700;
  }
  input {
    height: 3.2rem;
  }
  textarea{
    resize: none;
    height: 6.6rem;
  }
`
