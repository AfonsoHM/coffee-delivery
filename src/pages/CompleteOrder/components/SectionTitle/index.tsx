import { ReactNode } from "react";
import { SectionTitleContainer } from "./styles";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function SectionTitle({icon, title, subtitle} : SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <span>{title}</span> 
        <p>{subtitle}</p>
      </div>
    </SectionTitleContainer>
  )
}