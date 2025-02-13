import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../components/QuantityInput";

import { AddCartWrapper, CardFooter, CoffeeCardContainer, CoffeeDescription, CoffeeTitle, Price, Tags } from "./styles";
import { formatMoney } from "../../../utils/formatMoney";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({coffee}: CoffeeProps) {
  const formattedPrice = formatMoney(coffee.price)

  return(
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />

      <Tags>
      {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <CoffeeTitle>{coffee.name}</CoffeeTitle>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <CardFooter>
        <Price>
          <span>R$</span>
          <strong>{formattedPrice}</strong>
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