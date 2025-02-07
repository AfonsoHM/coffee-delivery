import { Intro } from "../components/Intro";
import { ListCoffees } from "../components/ListCoffees";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <ListCoffees />
    </HomeContainer>
  )
}