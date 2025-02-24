import { OrderConfirmedContainer, OrderConfirmedTitle, OrderDetailsContainer } from "./styles";
import Illustration from '../../assets/Illustration.svg'
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { paymentMethods } from './../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions';
import { useEffect } from "react";

interface LocationType {
  state: OrderData;
}

export function OrderConfirmedPage() {
  const {colors} = useTheme()

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate()

  useEffect(() => {
    if(!state) {
      navigate('/')
    }
  }, [])

  if(!state) return <></>

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
              <p>Entrega em <strong>{state.street}, {state.number} </strong>
              <br />
              {state.district} - {state.city}, {state.uf} </p>
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
              <strong> {paymentMethods[state.paymentMethod].label} </strong></p>
            }
          />
        </OrderDetailsContainer>

        <img src={Illustration} />
      </section>
    </OrderConfirmedContainer>
  )
}