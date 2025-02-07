import styled from "styled-components";
import introBackground from "../../../assets/introBackground.png"
import { rgba } from "polished";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;

  background: ${({ theme }) => `url(${introBackground}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const IntroTitle = styled.h1`
  font-size: ${(props) => props.theme.textSizes["title-title-xl"]};
  line-height: 130%;
  color: ${(props) => props.theme.colors["base-title"]};
  font-family: "Baloo 2";
  font-weight: bold;

  margin-bottom: 1rem;
`

export const IntroP = styled.p`
  font-size: ${(props) => props.theme.textSizes["text-regular-l"]};
  line-height: 130%;
  color: ${(props) => props.theme.colors["base-subtitle"]};
  font-family: "Roboto";
 
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`