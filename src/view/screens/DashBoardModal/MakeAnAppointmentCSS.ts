import styled from "styled-components";

export const ModalContentWrapper = styled.div`
  padding: 0.5em;
  width: 100%;
`;
export const CloseModalButton = styled.i`
  cursor: pointer;
  color: red;
  opacity: 0.4;
  position: absolute;
  top: 0;
  right: 0;
  margin: 16px;
  font-size: 24px;
`;

export const ModalHeader = styled.p`
  font-size: 1em;
  color: #83a3ff;
  margin: 0;
  text-transform: uppercase;
`;

export const ErrorText = styled.p`
  margin: 5px;
  color: red;
  opacity: 0.8;
  min-height: 23px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddButton = styled.button`
  cursor: pointer;
  font-size: 1.6em;
  font-weight: 600;
  transition: 0.3s;
  border: none;
  height: 54px;
  line-height: 54px;
  font-size: 15px;
  text-decoration: none;
  color: #000b29;
  background-color: #fadd68;
  text-align: center;
  letter-spacing: 0.5px;
  box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.4);
  &:hover {
    box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.2);
  }
`;
