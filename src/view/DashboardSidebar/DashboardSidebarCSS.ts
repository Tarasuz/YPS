import styled, { keyframes } from "styled-components";

interface WrapperProps {
  sideBar?: boolean;
  animationState: string;
  currentSideBarPosition?: number;
}

export const sideBarEnteredAnimation = (sidebarPosition?: number) => keyframes`

    0% {
      left: ${sidebarPosition}px;
    }

    100% {
      left: ${sidebarPosition}px;
    }

`;
export const sideBarEnteringAnimation = keyframes`

    0% {
      left: -350px;
    }

    100% {
      left: 0px;
    }

`;
export const sideBarExitingAnimation = (sidebarPosition?: number) => keyframes`

    0% {
      left: ${sidebarPosition}px;
    }

    100% {
      left: -350px;
    }

`;
export const backdropEnteredAnimation = keyframes`

    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }

`;
export const backdropEnteringAnimation = keyframes`

0% {
  opacity: 0;
}

100% {
  opacity: 1;
}

`;
export const backdropExitingAnimation = keyframes`

0% {
  opacity: 1;
}

100% {
  opacity: 0;
}

`;

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${p => (p.currentSideBarPosition ? `${p.currentSideBarPosition}px` : 0)}
  animation: ${p => {
    switch (p.animationState) {
      case "entered":
        return sideBarEnteredAnimation(p.currentSideBarPosition);
      case "entering":
        return sideBarEnteringAnimation;
      case "exiting":
        return sideBarExitingAnimation(p.currentSideBarPosition);
      default:
        return sideBarEnteredAnimation(p.currentSideBarPosition);
    }
  }}
    300ms ease-out forwards;
  width: 300px;
  height: 100vh;
  background-color: #21273e;
  z-index: 3;
  overflow: hidden;
`;

export const ContentWrapper = styled.div<WrapperProps>`
  width: 96%;
  animation: ${p => {
      switch (p.animationState) {
        case "entered":
          return sideBarEnteredAnimation(p.currentSideBarPosition);
        case "entering":
          return sideBarEnteringAnimation;
        case "exiting":
          return sideBarExitingAnimation(p.currentSideBarPosition);
        default:
          return sideBarEnteredAnimation(p.currentSideBarPosition);
      }
    }}
    300ms ease-out forwards;
  padding: 0 2%;
`;

export const SidebarOverlay = styled.div<WrapperProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.65);
  animation: ${p => {
      switch (p.animationState) {
        case "entered":
          return backdropEnteredAnimation;
        case "entering":
          return backdropEnteringAnimation;
        case "exiting":
          return backdropExitingAnimation;
        default:
          return backdropEnteredAnimation;
      }
    }}
    300ms ease-out forwards;
`;
