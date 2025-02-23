import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ButtonContainer, ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const {cartItemsTotal, cartQuantity} = useCart()

  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedTotal = formatMoney(cartTotal)
  const formatDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <p>Total de itens</p>
        <span>R$ {formattedItemsTotal}</span>
      </div>

      <div>
        <p>Entrega</p>
        <span>R$ {formatDeliveryPrice}</span>
      </div>

      <div>
        <strong>Total</strong>
        <strong>R$ {formattedTotal}</strong>
      </div>

      <ButtonContainer disabled={cartQuantity <= 0} type="submit">
        Confirmar pedido
      </ButtonContainer>
    </ConfirmationSectionContainer>
  )
}