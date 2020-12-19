// Component
import { ShieldCardsSection, ShieldCard } from "./shield-cards-styled"

// Data
import { shieldCardList } from "./data/shield-card-list"

export const ShieldCards = () => {
  return (
    <ShieldCardsSection>
      <div className='centralizer'>
        {shieldCardList.map((shieldCard) => {
          return (
            <ShieldCard key={shieldCard.id}>
              <img src={shieldCard.imgPath} alt={shieldCard.title} />
              <p>{shieldCard.description}</p>
            </ShieldCard>
          )
        })}
      </div>
    </ShieldCardsSection>
  )
}
