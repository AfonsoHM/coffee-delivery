import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";

import { CoffeesList, OurCoffeesContainer } from "./styles";


export function OurCoffees() {
  return(
    <OurCoffeesContainer className="container">
      <h1>Nossos cafés</h1>

      <CoffeesList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeesList>
    </OurCoffeesContainer>
  )
}