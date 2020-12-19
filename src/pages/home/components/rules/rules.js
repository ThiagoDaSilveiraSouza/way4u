import styled from "styled-components"

const RulesSection = styled.section`
  padding: 50px 0;
  .centralizer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h2 {
      font-size: 2.5rem;
      color: #3d3d3d;
      margin: 0;
    }
  }
`
const RulesContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`
const RulesSubtitle = styled.h3`
  margin: 0;
`
const RulesList = styled.ul`
  margin: 0;
  padding-left: 20px;
  li {
    list-style: decimal;
    ul {
      padding-left: 20px;
      li {
        list-style: lower-alpha;
      }
    }
  }
`
export const Rules = () => {
  const rulesList = [
    {
      id: 1,
      title: "O motorista poderá cancelar uma corrida nos seguintes casos:",
      topics: [
        {
          title:
            "Após 5 minutos de ter chegado ao local de embarque (sinalizado no aplicativo) no caso do passageiro não aparecer.",
          subTopics: [
            "	Neste caso será cobrada uma taxa de R$ 5,00 (cinco reais) ao passageiro para compensar o deslocamento do motorista e tempo de espera",
            "Apelando ao bom senso do motorista, espera-se que o mesmo antes dos 5 minutos, entre em contato com o passageiro via CHAT do aplicativo.",
            "Apelando ao bom senso do passageiro também, o mesmo deverá avisar ao motorista via CHAT pela demora antes dos 5 minutos.",
          ],
        },
        {
          title:
            "Em caso de acidente ou pane do carro antes de chegar, ou estando, no local de embarque.",
          subTopics: [
            "Neste caso o motorista deverá informar a Central do ocorrido para tomada de providencias.",
            "Neste caso não haverá cobrança de taxa de cancelamento.",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "• O passageiro poderá cancelar uma corrida nos seguintes casos: ",
      topics: [
        {
          title:
            "A qualquer momento antes do carro chegar até o local de embarque",
          subTopics: [
            "Neste caso não haverá cobrança de taxa de cancelamento.",
            "Solicitamos, se possível, que o passageiro informe ao motorista que irá cancelar a corrida.",
          ],
        },
        {
          title:
            "Após o carro ter chegado no local de embarque antes de completar 5 minutos:",
          subTopics: [
            "Neste caso será cobrada uma taxa de até R$ 5,00 (cinco reais) ao passageiro para compensar o deslocamento do motorista até o local.",
          ],
        },
        {
          title:
            "Após o carro ter chegado no local de embarque e ultrapassados 5 minutos:",
          subTopics: [
            "Neste caso será cobrada uma taxa de até R$ 5,00 (cinco reais) ao passageiro para compensar o deslocamento e espera do motorista no local.",
          ],
        },
      ],
    },
  ]
  return (
    <RulesSection>
      <div className='centralizer'>
        <h2>Regras de cancelamento</h2>
        {rulesList.map((rule) => {
          return (
            <RulesContent key={rule.id}>
              <RulesSubtitle>{rule.title}</RulesSubtitle>
              <RulesList>
                {rule.topics.map((topic, position) => {
                  return (
                    <li key={"topic-" + position}>
                      {topic.title}
                      {topic.subTopics && (
                        <ul>
                          {topic.subTopics.map((subTopic, position) => {
                            return (
                              <li key={"subTopic-" + position}>{subTopic}</li>
                            )
                          })}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </RulesList>
            </RulesContent>
          )
        })}
      </div>
    </RulesSection>
  )
}
