import { ReactNode, useState } from "react";
import styled from "styled-components";
import { ScrollableContainer } from "./dummy-components";

const DynamicBlock = styled.div<{ top: number; color: string }>`
  position: ${(props) => (props.top === 113 ? "fixed" : "absolute")};
  top: ${(props) => (props.top === 113 ? "0.2rem" : `${props.top}px`)};
  left: 1rem;
  background: ${(props) => props.color};
`;

const calculatePosition = (scrollValue: number) => 170 - scrollValue / 2;

const calculateColor = (position: number) => {
  const normalizedPosition = Math.min(Math.max(position, 0), 255);
  return `rgb(${normalizedPosition}, ${255 - normalizedPosition}, 150)`;
};

export const DynamicScroll = ({ children }: { children: ReactNode }) => {
  const [position, setPosition] = useState(170);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const newPosition = calculatePosition(e.currentTarget.scrollTop);
    setPosition(Math.max(113, newPosition));
  };

  const blockColor = calculateColor(position);

  return (
    <ScrollableContainer onScroll={handleScroll}>
      <DynamicBlock top={position === 113 ? 113 : position} color={blockColor}>
        🛒
      </DynamicBlock>
      {children}
    </ScrollableContainer>
  );
};
