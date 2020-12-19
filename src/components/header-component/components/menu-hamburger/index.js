import { HamburgerBox } from './menu-hamburger'

export const MenuHamburger = ({ menuIsChecked, changeNavMenuStatus }) => {
  return (
    <HamburgerBox menuStatus={menuIsChecked} onClick={changeNavMenuStatus}>
      <span></span>
    </HamburgerBox>
  )
}
