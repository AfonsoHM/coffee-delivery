import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;

  h1 {
    font-size: ${(props) => props.theme.textSizes["title-title-l"]};
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-title"]};
    font-family: "Baloo 2";
    font-weight: bold;
  }
`

export const CoffeesList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`