import { ContactSection } from "./contact-section"
import {
  ContactDescription,
  DescriptionContent,
  DescriptionSocialMedia,
} from "./contact-description"
import { ContactForm, FormContent } from "./contact-form"
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"

// components
import { MailChimpComponent } from "./mailchimp-component"
export const ContatcComponent = () => {
  return (
    <ContactSection id='contato'>
      <div className='centralizer'>
        <ContactDescription>
          <h2>Entre em contato conosco</h2>
          <DescriptionContent>
            <div>
              <strong>Telefone</strong>
              <p>(21) 98426-2320</p>
              <p>(21) 99771-3662</p>
            </div>
            <div>
              <strong>E-mail</strong>
              <p>contato@way4u.app.br</p>
            </div>
            {/* <div>
              <strong>Endereço</strong>
              <p>
                0371 Bartoletti Village Suite 206 - Jefferson City, DE / 41387
              </p>
            </div> */}
          </DescriptionContent>
          <DescriptionSocialMedia>
            <h4>Siga-nos nas Redes Sociais</h4>
            <div>
              <a href='https://www.facebook.com/Way4UApp/' target="_blank">
                <FaFacebookSquare size='2.0rem' color='white' />
              </a>
              <a href='https://www.instagram.com/way4u.app/' target='_blank'>
                <FaInstagramSquare size='2.0rem' color='white' />
              </a>
            </div>
          </DescriptionSocialMedia>
        </ContactDescription>
        <MailChimpComponent />
      </div>
    </ContactSection>
  )
  return
}
