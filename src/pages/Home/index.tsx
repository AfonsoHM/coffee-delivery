import { useCart } from "../../hooks/useCart";
import { Intro } from "../Home/components/Intro";
import { OurCoffees } from "./components/OurCoffees";
import { HomeContainer } from "./styles";

export function HomePage() {
  const {cartItems} = useCart()
  
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}