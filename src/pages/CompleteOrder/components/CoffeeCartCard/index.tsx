import { Trash } from "phosphor-react";
import { ActionContainer, CoffeeCartCardContainer, RegularText, RemoveButton } from "./styles";
import { QuantityInput } from "../../../../components/QuantityInput";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";


interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({coffee}: CoffeeCartCardProps) {
  const {changeCartItemQuantity, removeCartItem} = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity;
  const formatPrice = formatMoney(coffeeTotal)
  
  return (
    <CoffeeCartCardContainer>
    <div>
      <img src={`/coffees/${coffee.photo}`} />
      <div>
        <RegularText>{coffee.name}</RegularText>
        <ActionContainer>
          <QuantityInput               
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={coffee.quantity}
            size="small" 
          />
          <RemoveButton onClick={handleRemove}>
            <Trash size={16} />
            Remover
          </RemoveButton>
        </ActionContainer>
      </div>
    </div>

    <p>R$ {formatPrice}</p>
  </CoffeeCartCardContainer>
  )
}