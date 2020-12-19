// Component
import { FooterStyled } from './footer-styled'

export const FooterComponent = () => {
  const atualYear = new Date().getFullYear()
  return (
    <FooterStyled>
      <div className="centralizer">
        <img src="./assets/way4u-logo.svg" alt="Way4u" />
        <p>© {atualYear} Copyright Way4U</p>
      </div>
    </FooterStyled>
  )
}
