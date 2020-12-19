import styled from "styled-components"

export const NewsSection = styled.section`
  padding: 50px 0;
  .centralizer {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 1.8rem;
      text-transform: uppercase;
      font-weight: 500;
      text-align: center;
    }
  }
`
export const NewsForm = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
  input{
    font-size: 1.4rem;
    height: 3.2rem;
  }
  input[type="email"] {
    flex: 0 1 323px;
    padding: 0 20px;
    border: 1px solid #5d5d5d;
    box-sizing: border-box;
    ::placeholder{
      color: #5D5D5D;
    }
  }
  input[type="button"] {
    flex: 0 1 148px;
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
    background: #e20e2d;
    transition: box-shadow 0.3s;
    text-transform: uppercase;
    :hover {
      box-shadow: 0 0 5px 0 black;
    }
  }
`
