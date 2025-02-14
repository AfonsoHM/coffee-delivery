import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const Title = styled.h1`
  font-size: ${({theme}) => theme.textSizes["title-title-m"]};
  color: ${({theme}) => theme.colors["base-subtitle"]};
  font-weight: 700;
  font-family: "Baloo 2";
`

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`