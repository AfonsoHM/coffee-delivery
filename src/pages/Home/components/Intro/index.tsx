import { BenefitsContainer, IntroContainer, IntroContent, IntroP, IntroTitle } from "./styles";

import coffee from "../../../../assets/coffee.png"
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";


export function Intro() {
  const {colors} = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle>
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>

            <IntroP>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </IntroP>
          </section>

          <BenefitsContainer>
            <InfoWithIcon 
              icon={<ShoppingCart weight="fill" />}
              iconBg={colors["brand-yellow-dark"]}
              text="Compra simples e segura"
            />
            <InfoWithIcon 
              icon={<Package weight="fill" />}
              iconBg={colors["base-text"]}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon 
              icon={<Timer weight="fill" />}
              iconBg={colors["brand-yellow"]}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon 
              icon={<Coffee weight="fill" />}
              iconBg={colors["brand-purple"]}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>

        <img src={coffee} />
      </IntroContent>
    </IntroContainer>
  )
}