import styled from 'styled-components'

export const WhoWheAreSection = styled.section`
  background: var(--background-gray-color);
  padding: 50px 0;
  .centralizer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 40px;
    > * {
      max-width: 468px;
      width: 100%;
    }
  }
`
export const WhoWheAreDescription = styled.div`
  h2 {
    font-size: 25px;
  }
  h3 {
    font-size: 12px;
    font-weight: 400;
  }
  h4, p, li {
    font-size: 14px;
  }
  h4{
    text-transform: uppercase;
    margin: 30px 0 0 0;
  }
  p{
    margin: 14px 0;
  }
  ul{
    list-style: disc;
    padding-left: 20px;
    box-sizing: border-box;
  }
  a {
    color: var(--red-color);
    font-weight: 400;
    font-size: 15px;
    :hover {
      text-decoration: underline;
    }
  }
`
