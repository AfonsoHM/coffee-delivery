import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";

import Logo from "../../assets/Logo.svg"
import {MapPin, ShoppingCart} from 'phosphor-react'
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={Logo}/>
        </NavLink>
        
        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            São Bernado do Campo, SP
          </HeaderButton>

          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}