import { useState, useEffect, useRef } from "react"
import { Header, HeaderNav } from "./header-styled"

// Components
import { MenuHamburger } from "./components/menu-hamburger"

export const HeaderComponent = () => {
  const [navMenuStatus, setNavMenuStatus] = useState(false)
  const changeNavMenuStatus = () => setNavMenuStatus(!navMenuStatus)

  // useEffect(() => {
  //   const headerElement = useRef(null)
  //   const closeMobileMenuWithScroll = window.addEventListener(
  //     "scroll",
  //     () => {
  //       console.log(headerElement)
  //     },
  //     []
  //   )
  // })

  return (
    <Header>
      <div className='centralizer'>
        <img src='./assets/way4u-logo.svg' alt='Away4U' />
        <HeaderNav mobileStatus={navMenuStatus}>
          <ul>
            <li>
              <a href='#quem-somos'>Quem Somos</a>
            </li>
            <li>
              <a href='#parceiros'>Nossos Parceiros</a>
            </li>
            <li>
              <a href='#contato'>Contato</a>
            </li>
          </ul>
        </HeaderNav>
        <MenuHamburger
          menuIsChecked={navMenuStatus}
          changeNavMenuStatus={changeNavMenuStatus}
        />
      </div>
    </Header>
  )
}
