import styled from "styled-components";

interface WrapperProps {
  sideBar?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${p => (p.sideBar ? "0" : "-350px")};
  width: 300px;
  height: 100vh;
  transition: left 0.5s;
  background-color: #21273e;
  z-index: 3;
  overflow: hidden;
`;

export const ContentWrapper = styled.div<WrapperProps>`
  transition: transform 0.45s;
  width: 96%;
  left: ${p => (p.sideBar ? "0" : "-350px")};
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
  display: ${p => (p.sideBar ? "block" : "none")};
`;
