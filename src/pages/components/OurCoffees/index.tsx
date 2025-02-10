import { CoffeeCard } from "../CoffeeCard";
import { CoffeesList, OurCoffeesContainer } from "./styles";


export function OurCoffees() {
  return(
    <OurCoffeesContainer className="container">
      <h1>Nossos cafés</h1>

      <CoffeesList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeesList>
    </OurCoffeesContainer>
  )
}