import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { ActionContainer, CoffeeCartCardContainer, RegularText, RemoveButton } from "./styles";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
    <div>
      <img src="" />
      <div>
        <RegularText>Espresso Tradicional</RegularText>
        <ActionContainer>
          <QuantityInput size="small" />
          <RemoveButton>
            <Trash size={16} />
            Remover
          </RemoveButton>
        </ActionContainer>
      </div>
    </div>

    <p>R$ 9,90</p>
  </CoffeeCartCardContainer>
  )
}