import { BenefitsData } from "./data/benefits-data"
import {
  BenefictsWrapper,
  BenefictsCards,
  BenefictsCardsTitle,
  BenefictsTopic,
  BenefitsObservation,
} from "./benefits-wrapper"

export const Benefits = () => {
  return (
    <BenefictsWrapper id='beneficios'>
      <div className='centralizer'>
        {BenefitsData.map((benetift, position) => {
          return (
            <BenefictsCards key={"Benefit-" + position}>
              <BenefictsCardsTitle>
                <img src={benetift.imgPath} alt={benetift.title} />
                <h2>{benetift.title}</h2>
              </BenefictsCardsTitle>
              <ul>
                {benetift.topics.map((topic, position) => (
                  <BenefictsTopic
                    key={"benefit-topic-" + position}
                    strong={topic.strong}
                  >
                    {topic.title}
                    {topic.subTopics && (
                      <ul>
                        {topic.subTopics.map((subTopic, position) => {
                          return (
                            <li key={"benefit-subTopic-" + position}>
                              {subTopic}
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </BenefictsTopic>
                ))}
              </ul>
              {benetift.observation && (
                <BenefitsObservation>
                  {benetift.observation.map((currentObservation, position) => (
                    <BenefictsTopic
                      key={position}
                      strong={currentObservation.strong}
                    >
                      {currentObservation.title}
                    </BenefictsTopic>
                  ))}
                </BenefitsObservation>
              )}
            </BenefictsCards>
          )
        })}
      </div>
    </BenefictsWrapper>
  )
}
