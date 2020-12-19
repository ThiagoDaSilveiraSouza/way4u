import { useState } from 'react'
// Compoents
import { ModalComponent } from '../../../../components/modal-component'
import { PartnersSection, PartnersWrapper } from './partners-styled'
import { PartnerModal } from './components/partner-modal'

// Data
import { partnersList } from './data/partnes-list'

const partnersImg = (partner, showModalFuncion) => {
  return (
    <div key={partner.id}>
      <img
        src={partner.imgPath}
        alt={partner.name}
        onClick={() => showModalFuncion(partner)}
      />
    </div>
  )
}

export const Partners = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const [modalPartner, setModalPartner] = useState(undefined)
  const showModal = (partner) => {
    setModalStatus(true)
    setModalPartner(partner)
  }
  return (
    <PartnersSection id="parceiros">
      <div className="centralizer">
        <h2>Nossos Parceiros</h2>
        <PartnersWrapper>
          {partnersList.map((partner) => partnersImg(partner, showModal))}
        </PartnersWrapper>
      </div>
      <ModalComponent hideOrShowModal={[modalStatus, setModalStatus]}>
        <PartnerModal partner={modalPartner} />
      </ModalComponent>
    </PartnersSection>
  )
}
