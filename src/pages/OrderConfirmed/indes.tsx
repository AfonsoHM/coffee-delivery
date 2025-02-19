import { OrderConfirmedContainer, OrderConfirmedTitle, OrderDetailsContainer } from "./styles";
import Illustration from '../../assets/Illustration.svg'
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";

export function OrderConfirmedPage() {
  const {colors} = useTheme()

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <OrderConfirmedTitle>Uhu! Pedido confirmado</OrderConfirmedTitle>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon 
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <p>Entrega em <strong>Rua João Augusto Silveira, 18 </strong>
              <br />
              Cooperativa - São Bernardo do Campo, SP</p>
            }
          />
          <InfoWithIcon 
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <p>Previsão de entrega 
              <br />
              <strong>20 min - 30 min </strong></p>
            }
          />
            <InfoWithIcon 
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <p>Pagamento na entrega 
              <br />
              <strong>Cartão de Crédito </strong></p>
            }
          />
        </OrderDetailsContainer>

        <img src={Illustration} />
      </section>
    </OrderConfirmedContainer>
  )
}