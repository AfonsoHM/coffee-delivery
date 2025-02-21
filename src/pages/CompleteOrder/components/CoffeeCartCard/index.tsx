import { Trash } from "phosphor-react";
import { ActionContainer, CoffeeCartCardContainer, RegularText, RemoveButton } from "./styles";
import { QuantityInput } from "../../../../components/QuantityInput";

export function CoffeeCartCard() {

  
  return (
    <CoffeeCartCardContainer>
    <div>
      <img src="" />
      <div>
        <RegularText>Espresso Tradicional</RegularText>
        <ActionContainer>
          <QuantityInput               
            // onIncrease={handleIncrease}
            // onDecrease={handleDecrease}
            // quantity={coffee.quantity}
            size="small" 
          />
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