import { MapPinLine } from "phosphor-react";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer, Title } from "./styles";
import { useTheme } from "styled-components";

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
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}