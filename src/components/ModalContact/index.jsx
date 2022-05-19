import React from "react";
import styled from "styled-components";

const Modal = ({ children, width, height, state }) => {
  return (
    <>
      {state && (
        <ModalContainer>
          <ModalContent width={width} height={height}>
            {children}
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999999;
`;

const ModalContent = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  z-index: 999999999999;
`;
