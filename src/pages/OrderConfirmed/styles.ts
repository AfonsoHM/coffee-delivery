import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  > p {
    font-size: ${(props) => props.theme.textSizes["text-regular-m"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};
    line-height: 130%;
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const OrderConfirmedTitle = styled.h1`
    font-size: ${(props) => props.theme.textSizes["title-title-l"]};
    line-height: 130%;
    color: ${(props) => props.theme.colors["brand-yellow-dark"]};
    font-family: "Baloo 2";
    font-weight: bold;
`

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  min-width: 32rem;
  padding: 2.5rem;
  background: ${(props) => props.theme.colors["base-background"]};
  border-radius: 6px 36px 6px 36px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(182.89deg, #DBAC2C 2.61%, #8947F8 98.76%);
  }
`
