import { BannerCode } from "./BannerCode"
import { BannerWrap } from "./BannerWrap"
import { BannerSection } from "./BannerSection"

export const Banner = () => (
  <BannerSection>
    <div className='centralizer'>
      <BannerWrap>
        <h1>Mais segurança para você!</h1>
        <p>
          Garantimos qualidade e profissionalidade do transporte de passageiros
          na cidade, especialmente para o setor feminino, uma vez que cerca dos
          70% dos passageiros são mulheres.
        </p>
        <h3>Baixe agora mesmo o nosso app:</h3>
        <BannerCode>
          <div>
            <img src='./assets/banner/ios-en-us.png' alt='playstore link' />
            <img src='./assets/banner/qr-code-ios.svg' alt='QR code' />
          </div>
          <div>
            <img src='./assets/banner/android-en-us.png' alt='playstore link' />
            <img src='./assets/banner/qr-code-android.svg' alt='QR code' />
          </div>
        </BannerCode>
      </BannerWrap>
    </div>
  </BannerSection>
)
