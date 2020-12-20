// Components
import { Banner } from "./components/banner"
import { ShieldCards } from "./components/shield-cards"
import { WhoWheAre } from "./components/who-whe-are"
import { Benefits } from "./components/benefits"
import { Rules } from "./components/rules"
import { Partners } from "./components/partners"
import { MainBannerComponent } from "../../components/main-banner-component"
import { CarouselComponent } from "../../components/carousel-component"
import { NewsComponent } from "../../components/news-component"
import { ContatcComponent } from "../../components/contact-component"
import { WhatsappComponent } from "../../components/whatsapp-component"
import { Faq } from "./components/faq"

export const Home = () => {
  return (
    <main>
      <Banner />
      <ShieldCards />
      <WhoWheAre />
      <Benefits />
      <Rules />
      <Partners />
      {/* <MainBannerComponent /> */}
      <CarouselComponent />
      {/* <NewsComponent /> */}
      <Faq />
      <ContatcComponent />
      <WhatsappComponent />
    </main>
  )
}
