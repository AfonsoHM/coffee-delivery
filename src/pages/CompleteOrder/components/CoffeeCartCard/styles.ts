import styled from "styled-components"

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme.colors["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`

export const RegularText = styled.p`
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-subtitle"]};
`

export const ActionContainer = styled.div`
  margin-top: 0%.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size:  0.75rem;
  height: 100%;
  border: none;
  background: ${(props) => props.theme.colors["base-button"]} ;
  color: ${(props) => props.theme.colors["base-text"]};
  padding: 0 0.5rem;
  border-radius: 6px;

  transition:  0.4s;

  svg {
    color: ${(props) => props.theme.colors["brand-purple"]};
  }

  &:hover {
    background: ${(props) => props.theme.colors["base-hover"]} ;
  }
`