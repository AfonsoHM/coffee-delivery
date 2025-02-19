import { Intro } from "../Home/components/Intro";
import { OurCoffees } from "./components/OurCoffees";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}