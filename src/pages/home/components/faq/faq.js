import { useState } from "react"
import styled from "styled-components"

// components
import { FaqCard } from "./faqCard"
// data
import { faqData } from "./services/data/faq-data"

const FaqContent = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 30px 0;
  .centralizer {
    display: flex;
    flex-direction: column;
    align-items: center;
    > h2 {
      text-align: center;
      font-size: 2.5rem;
    }
  }
`
const FaqArrowButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 1px solid #e20e2d;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: box-shadow;
  :hover {
    box-shadow: 0 0 5px 0 black;
  }
  > span {
    position: absolute;
    border-right: 1px solid #e20e2d;
    border-bottom: 1px solid #e20e2d;
    width: 15px;
    height: 15px;
    transition: 0.3s;
    transform: rotate(${({ faqIsShow }) => (faqIsShow ? "-135deg" : "45deg")});
    top: ${({ faqIsShow }) => (faqIsShow ? "10px" : "5px")};
  }
`
const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  height: fit-content;
  transition: max-height 0.3s;
  overflow: hidden;
  margin: 20px 0;
  max-height: ${({ faqIsShow }) => (faqIsShow ? "2500px" : 0)};
`
export const Faq = () => {
  const [selectedCard, setSelectedeCard] = useState(null)
  const setNewSelectedCard = (position) => {
    setSelectedeCard(position)
  }

  const [faqIsShow, setfaqIsShow] = useState(false)
  const showFaq = () => {
    setfaqIsShow(!faqIsShow)
  }

  return (
    <FaqContent>
      <div className='centralizer'>
        <h2>Perguntas frequentes</h2>
        <FaqArrowButton faqIsShow={faqIsShow} onClick={showFaq}>
          <span></span>
        </FaqArrowButton>
        <CardSection faqIsShow={faqIsShow}>
          {faqData.map((card, position) => (
            <FaqCard
              card={card}
              position={position}
              selectedCard={selectedCard}
              setNewSelectedCard={setNewSelectedCard}
              key={"card-" + position.toString()}
            />
          ))}
        </CardSection>
      </div>
    </FaqContent>
  )
}
