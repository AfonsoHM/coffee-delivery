import { IntroContainer, IntroContent } from "./styles";

import coffee from "../../../assets/coffee.png"

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section></section>
        </div>

        <img src={coffee} />
      </IntroContent>
    </IntroContainer>
  )
}