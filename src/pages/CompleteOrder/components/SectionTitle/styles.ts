import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  

   div {
    display: flex;
    flex-direction: column;

   span {
    font-size: ${(props) => props.theme.textSizes["text-regular-m"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};
    line-height: 130%;
    
   }
  }

  > p {
    font-size: ${(props) => props.theme.textSizes["text-regular-s"]};
    color: ${(props) => props.theme.colors["base-text"]};
    line-height: 130%;
 
  }
`