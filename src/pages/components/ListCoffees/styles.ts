import styled from "styled-components";

export const ListCoffeesContainer = styled.section`

  h1 {
    font-size: ${(props) => props.theme.textSizes["title-title-l"]};
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-title"]};
    font-family: "Baloo 2";
    font-weight: bold;
  }
`