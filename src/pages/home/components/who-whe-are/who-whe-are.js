// Component
import { WhoWheAreSection, WhoWheAreDescription } from "./who-whe-are-styled"

export const WhoWheAre = () => {
  return (
    <WhoWheAreSection id='quem-somos'>
      <div className='centralizer'>
        <WhoWheAreDescription>
          <h3>A Way4U</h3>
          <h2>Quem Somos</h2>
          <p>
            Somos uma empresa brasileira, localizada em Teresópolis – RJ, que
            surgiu a partir da ideia de melhorar a qualidade e segurança do
            transporte de passageiros na Cidade, principalmente para o setor
            feminino.
          </p>

          <p>
            Trabalhando como motoristas de aplicativo na cidade há quase 2 anos,
            seus idealizadores, reinventam o serviço com uma visão de melhoria
            na qualidade dos serviços prestados, principalmente a segurança no
            que tange ao público feminino, bem como beneficiando tanto os/as
            motoristas como os passageiros de uma forma geral.
          </p>

          <p>
            Não somente o atendimento de qualidade será o nosso foco, mas também
            o custo-benefício de uso da plataforma de transporte de passageiros,
            considerando em total 4 categorias, sendo elas:
          </p>
          <ul>
            <li>Transporte do público Feminino</li>
            <li>Unissex</li>
            <li>Pets</li>
            <li>Delivery para empresas.</li>
          </ul>
          <h4>Os donos:</h4>
          <p>
            Empresários, com vasta experiencia em gerencia de projetos e
            relacionamento público.
          </p>
          <a href='#contato'>Para mais informações, entre em contato ›</a>
        </WhoWheAreDescription>

        <img
          src='./assets/who-whe-are/sobre-nos-img.jpg'
          alt='Quem nós somos'
        />
      </div>
    </WhoWheAreSection>
  )
}
