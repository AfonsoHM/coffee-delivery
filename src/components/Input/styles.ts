import styled from "styled-components";

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors["base-button"]};
  background: ${(props) => props.theme.colors["base-input"]};
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: 0%.75rem;
  padding: 0 0.75rem;

  transition: .4s;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors["brand-yellow-dark"]};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors["base-label"]};
  }
`