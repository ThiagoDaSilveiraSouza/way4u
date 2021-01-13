import { FaPhoneAlt, FaInstagram, FaFacebookF } from "react-icons/fa"
import { IoIosGlobe } from "react-icons/io"

// Components
import {
  PartNerModalDiv,
  PartnerModalDescription,
  PartnerModalSocialMedia,
} from "./partner-modal-styled"

export const PartnerModal = ({ partner }) => {
  return (
    <PartNerModalDiv>
      <PartnerModalDescription>
        <h2>{partner !== undefined ? partner.name : "Piza Super Hot"}</h2>
        <p>
          {partner !== undefined
            ? partner.description
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </p>
      </PartnerModalDescription>

      <PartnerModalSocialMedia>
        {partner && partner.contacts.phone && (
          <a
            href={partner !== undefined ? partner.contacts.phone : "#"}
            target='_blank'
          >
            <FaPhoneAlt color='white' size='100%' />
          </a>
        )}
        {partner && partner.contacts.facebook && (
          <a
            href={partner !== undefined ? partner.contacts.facebook : "#"}
            target='_blank'
          >
            <FaFacebookF color='white' size='100%' />
          </a>
        )}
        {partner && partner.contacts.instagram && (
          <a
            href={partner !== undefined ? partner.contacts.instagram : "#"}
            target='_blank'
          >
            <FaInstagram color='white' size='100%' />
          </a>
        )}
        {partner && partner.contacts.site && (
          <a
            href={partner !== undefined ? partner.contacts.site : "#"}
            target='_blank'
          >
            <IoIosGlobe color='white' size='100%' />
          </a>
        )}
      </PartnerModalSocialMedia>
    </PartNerModalDiv>
  )
}
