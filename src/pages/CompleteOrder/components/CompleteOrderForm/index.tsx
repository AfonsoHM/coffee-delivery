import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer, Title } from "./styles";
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";

export function CompleteOrderForm() {
  const { colors} = useTheme()

  return (
    <CompleteOrderFormContainer>
      <Title>
        Complete seu pedido
      </Title>

      <FormSectionContainer>
        <SectionTitle 
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
        />

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle 
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
        />

      
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}