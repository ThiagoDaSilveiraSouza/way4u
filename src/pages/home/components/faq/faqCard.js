import styled from "styled-components"

// components
import { PlusButton } from "./plusButton"

const Card = styled.label`
  list-style: decimal;
  margin: 0;
  > h4 {
    padding: 0 5px;
    font-weight: 500;
    font-size: 1.8rem;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin: 10px 0;
    cursor: pointer;
    span {
      color: #e20e2d;
    }
  }

  .card-content-checked {
    max-height: 500px;
  }
  > hr {
    margin-top: 10px;
    border-top: 1px solid gray;
    opacity: 0.5;
  }
`
const CardContent = styled.div`
  max-height: ${({ cardIsChecked }) => (cardIsChecked ? "500px" : 0)};
  height: fit-content;
  overflow: hidden;
  transition: max-height 0.3s;
`
const TopicList = styled.ul`
  font-size: 1.5rem;
  list-style: disc;
  p {
    margin: 0;
  }
  li {
    margin-left: 40px;
  }
`
const SubTopicList = styled.ul`
  list-style: decimal;
`
export const FaqCard = ({
  card,
  position,
  selectedCard,
  setNewSelectedCard,
}) => {
  const cardIsChecked = selectedCard === position
  const selecThisCard = () => {
    if (cardIsChecked) {
      setNewSelectedCard(null)
    } else {
      setNewSelectedCard(position)
    }
  }
  return (
    <Card key={card.title}>
      <h4 onClick={selecThisCard}>
        <div>
          <span>{card.id}. </span>
          {card.title}
        </div>
        <PlusButton isChecked={cardIsChecked} />
      </h4>
      <CardContent cardIsChecked={cardIsChecked}>
        {card.paragraphs.map((paragraph, position) => {
          return (
            <TopicList key={position.toString()}>
              <p>{paragraph.text}</p>
              {paragraph.topics &&
                paragraph.topics.map((topic, position) => {
                  return (
                    <li key={position.toString()}>
                      {topic.description}
                      {topic.subTopics && (
                        <SubTopicList>
                          {topic.subTopics.map((subTopics, position) => {
                            return (
                              <li key={position.toString()}>
                                {subTopics.description}
                              </li>
                            )
                          })}
                        </SubTopicList>
                      )}
                    </li>
                  )
                })}
            </TopicList>
          )
        })}
      </CardContent>
      <hr />
    </Card>
  )
}
