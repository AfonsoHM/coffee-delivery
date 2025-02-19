import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 0;

  img {
    width: 7.5rem;
    height: 7.5rem ;
    margin-top: -1.25rem;
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem ;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${(props) => props.theme.colors["brand-yellow-light"]};
    color: ${(props) => props.theme.colors["brand-yellow-dark"]};
    font-size: ${(props) => props.theme.textSizes["components-tag"]};
    text-transform: uppercase;

    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }

`

export const CoffeeTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: ${(props) => props.theme.textSizes["text-bold-l"]};
  color: ${(props) => props.theme.colors["base-subtitle"]};
  font-family: "Baloo 2";
  font-weight: 700;
`

export const CoffeeDescription = styled.p`
  margin-bottom: 2rem;
  font-size: ${(props) => props.theme.textSizes["text-regular-s"]};
  color: ${(props) => props.theme.colors["base-label"]};
`
export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const Price = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap:3px;

  span {
    font-size: ${(props) => props.theme.textSizes["text-regular-m"]};
    line-height: 1.2rem;
    
  }

  strong{
    font-size: ${(props) => props.theme.textSizes["title-title-m"]};
    color: ${(props) => props.theme.colors["base-text"]};
  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;
  display: flex;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors["brand-purple-dark"]};
    color: ${(props) => props.theme.colors["base-card"]};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: .4s;

    &:hover {
      background: ${(props) => props.theme.colors["brand-purple"]};
    }
  }
`