// Component
import {
  ModalSection,
  ModalBG,
  ModalWrapper,
  CloseButton,
} from './modal-component-styled'

export const ModalComponent = ({ children, hideOrShowModal }) => {
  const [modalStatus, setModalStatus] = hideOrShowModal

  return (
    <ModalSection modalVisibility={modalStatus}>
      <ModalBG onClick={() => setModalStatus(false)} />
      <ModalWrapper>
        <CloseButton onClick={() => setModalStatus(false)}>
          <span></span>
        </CloseButton>
        {children}
      </ModalWrapper>
    </ModalSection>
  )
}
