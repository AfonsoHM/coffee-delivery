import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const Title = styled.h1`
    font-size: ${(props) => props.theme.textSizes["title-title-xs"]};
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-family: "Baloo 2";
    font-weight: bold;
`

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-size: ${(props) => props.theme.textSizes["text-regular-s"]};
    color: ${(props) => props.theme.colors["base-text"]};
  }

  strong {
    font-size: ${(props) => props.theme.textSizes["text-regular-l"]};
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-weight: bold;
  }
`

export const ButtonContainer = styled.button`
  padding: .75rem 2.8rem;
  margin-top: 0.5rem;
  background: ${(props) => props.theme.colors["brand-yellow"]};
  color: ${(props) => props.theme.colors["base-white"]};
  font-size: ${(props) => props.theme.textSizes["components-button-g"]};
  font-weight: bold;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  line-height: 1.3rem;

  transition: .4s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(disabled):hover {
    background: ${(props) => props.theme.colors["brand-yellow-dark"]};
  }

`