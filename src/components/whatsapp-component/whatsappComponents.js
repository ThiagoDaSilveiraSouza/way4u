import { WhatsAppLink } from "./whatsappLink"
import { generateWhatsappMessage } from "../../services/whatsappLinkGenerator"
export const WhatsappComponent = () => {
  const phoneNumber = "21984262320"
  const message = "Olá! Acabei de vistar o site da Way4U e gostaria de mais informações! Pode me ajudar?"

  return (
    <WhatsAppLink
      href={generateWhatsappMessage(phoneNumber, message)}
      target='_blank'
    >
      <img src='./assets/whatsapp-component/whatsapp-icon.png' alt='whatsapp-icon' />
    </WhatsAppLink>
  )
}
