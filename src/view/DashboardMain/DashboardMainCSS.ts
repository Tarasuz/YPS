import styled from "styled-components";

interface WrapperProps {
  sliderPosition?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  transition: transform 400ms ease 0s;
  display: flex;
  background: #454c5c;
  box-sizing: border-box;
  justify-content: space-around;
  width: 2500px;
  transform: ${p =>
    p.sliderPosition
      ? `translate3d(${p.sliderPosition} , 0px, 0px);`
      : "translate3d(-300px , 0px, 0px);"};
`;

export const SlidesWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
`;
