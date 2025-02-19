import { ButtonContainer, ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <p>Total de itens</p>
        <span>R$ 9,90</span>
      </div>

      <div>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </div>

      <div>
        <strong>Total</strong>
        <strong>R$ 29,90</strong>
      </div>

      <ButtonContainer>Confirmar pedido</ButtonContainer>
    </ConfirmationSectionContainer>
  )
}