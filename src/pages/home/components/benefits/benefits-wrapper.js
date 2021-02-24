import styled from "styled-components"

export const BenefictsWrapper = styled.section`
  padding: 50px 0;
  .centralizer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
  }
`
export const BenefictsCards = styled.div`
  flex: 0 1 491px;
  ul {
    list-style: disc;
    padding-left: 20px;
    li {
      font-size: 15px;
      color: #5d5d5d;
      ul {
        padding-left: 40px;
        list-style: lower-alpha;
      }
    }
  }
`
export const BenefictsCardsTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  h2 {
    color: #5d5d5d;
    font-size: 2.5rem;
  }
  img {
    justify-self: center;
  }
`

export const BenefictsTopic = styled.li`
  font-weight: ${({ strong }) => strong && "bolder"};
`
export const BenefitsObservation = styled.ul`
  padding: 0 !important;
  margin-top: 40px;
li {
    list-style: none;
  }
`
