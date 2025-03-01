import styled, { css } from "styled-components";

interface QuantityContainerProps {
  size?: 'medium' | 'small'
}

export const QuantityContainer = styled.div<QuantityContainerProps>`
  flex: 1;
  background: ${(props) => props.theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;
  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }

  ${({size}) => size === 'medium' && css`
    padding: 0.5rem;
  `}

  ${({size}) => size === 'small' && css`
    padding: 0.3rem 0.5rem;
  `}
`

export const IconWrapper = styled.button.attrs({
  type: "button",
  })`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors["brand-purple"]};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled) {
    color: ${(props) => props.theme.colors["brand-purple-dark"]};
  }
`;

