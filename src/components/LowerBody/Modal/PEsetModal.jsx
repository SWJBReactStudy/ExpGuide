import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const ModalContainer = styled(Modal)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 600px;
  height: 600px;
  z-index: 99;

  &:focus {
    outline: none;
  }
`;

const PEsetModal = ({ closeModal, isOpen }) => {
  return (
    <ModalContainer
      isOpen={isOpen}
      onRequestClose={() => closeModal(false)}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        },
      }}
    />
  );
};

export default PEsetModal;
