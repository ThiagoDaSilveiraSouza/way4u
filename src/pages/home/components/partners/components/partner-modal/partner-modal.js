import { FaPhoneAlt, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa"
import { IoIosGlobe } from "react-icons/io"

// services
import { generateWhatsappMessage } from "../../../../../../services/whatsappLinkGenerator"
// Components
import {
  PartNerModalDiv,
  PartnerModalDescription,
  PartnerModalSocialMedia,
  PartnerModalHashtag,
} from "./partner-modal-styled"

export const PartnerModal = ({ partner = false }) => {
  if (!partner) {
    return <h2>Sem modal selecionado</h2>
  }
  return (
    <PartNerModalDiv background={partner.imgPath}>
      {partner.imgPath && <img src={partner.imgPath} alt={partner.name} />}
      <div>
        <PartnerModalDescription>
          {partner.name && <h2>{partner.name}</h2>}
          {partner.description &&
            partner.description.map((description, position) => (
              <p key={position.toString()}>{description}</p>
            ))}
          {partner.skillList && (
            <ul>
              {partner.skillList.map((skill, position) => (
                <li key={position.toString()}>{skill}</li>
              ))}
            </ul>
          )}
        </PartnerModalDescription>
        {partner.hashtag && (
          <PartnerModalHashtag>{partner.hashtag}</PartnerModalHashtag>
        )}

        <PartnerModalSocialMedia>
          {partner.contacts.phone && (
            <a href={partner.contacts.phone} target='_blank' rel='noreferrer'>
              <FaPhoneAlt color='white' size='100%' />
            </a>
          )}
          {partner.contacts.facebook && (
            <a
              href={partner.contacts.facebook}
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebookF color='white' size='100%' />
            </a>
          )}
          {partner.contacts.instagram && (
            <a
              href={partner.contacts.instagram}
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram color='white' size='100%' />
            </a>
          )}
          {partner.contacts.whatsapp && (
            <a
              href={generateWhatsappMessage(partner.contacts.whatsapp, 'Ola! Vi seu contato no site da Way4u! Gostaria de mais informações.')}
              target='_blank'
              rel='noreferrer'
            >
              <FaWhatsapp color='white' size='100%' />
            </a>
          )}
          {partner.contacts.site && (
            <a href={partner.contacts.site} target='_blank' rel='noreferrer'>
              <IoIosGlobe color='white' size='100%' />
            </a>
          )}
        </PartnerModalSocialMedia>
      </div>
    </PartNerModalDiv>
  )
}
