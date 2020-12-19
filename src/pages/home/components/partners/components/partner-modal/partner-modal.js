import { FaPhoneAlt, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { IoIosGlobe } from 'react-icons/io'

// Components
import {
  PartNerModalDiv,
  PartnerModalDescription,
  PartnerModalSocialMedia,
} from './partner-modal-styled'

export const PartnerModal = ({ partner }) => {
  return (
    <PartNerModalDiv>
      <PartnerModalDescription>
        <h2>{partner !== undefined ? partner.name : 'Piza Super Hot'}</h2>
        <p>
          {partner !== undefined
            ? partner.description
            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        </p>
      </PartnerModalDescription>

      <PartnerModalSocialMedia>
        <a href={partner !== undefined ? partner.contacts.phone : '#'}>
          <FaPhoneAlt color="white" />
        </a>
        <a href={partner !== undefined ? partner.contacts.facebook : '#'}>
          <FaFacebookF color="white" />
        </a>
        <a href={partner !== undefined ? partner.contacts.instagram : '#'}>
          <FaInstagram color="white" />
        </a>
        <a href={partner !== undefined ? partner.contacts.site : '#'}>
          <IoIosGlobe color="white" />
        </a>
      </PartnerModalSocialMedia>
    </PartNerModalDiv>
  )
}
