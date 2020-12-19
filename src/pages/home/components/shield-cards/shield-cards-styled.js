import styled from 'styled-components'

export const ShieldCardsSection = styled.section`
  padding: 50px 0;
  .centralizer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 60px;
  }
`
export const ShieldCard = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  p {
    font-size: 14px;
    text-align: center;
    color: #5D5D5D;
  }
`
