import { NewsSection, NewsForm } from "./news-component-style"
import { GoMail } from "react-icons/go"

export const NewsComponent = () => {
  return (
    <NewsSection id="contato">
      <div className='centralizer'>
        <GoMail size='5.0rem' color='#e20e2d' />
        <h2>Inscreva-se para receber descontos exclusivos</h2>
        <NewsForm>
          <input type='email' placeholder="Digite seu E-mail" />
          <input type="button" value="Inscrever-se"/>
        </NewsForm>
      </div>
    </NewsSection>
  )
}
