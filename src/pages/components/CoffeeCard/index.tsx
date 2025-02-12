import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../components/QuantityInput";

import { AddCartWrapper, CardFooter, CoffeeCardContainer, CoffeeDescription, CoffeeTitle, Price, Tags } from "./styles";

export function CoffeeCard() {
  return(
    <CoffeeCardContainer>
      <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/1314017-xicara-de-cafe-vista-de-cima-gratis-vetor.jpg" />

      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>

      <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
      <CoffeeDescription>O tradicional café feito com água quente e grãos moídos</CoffeeDescription>

      <CardFooter>
        <Price>
          <span>R$</span>
          <strong>9,90</strong>
        </Price>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}