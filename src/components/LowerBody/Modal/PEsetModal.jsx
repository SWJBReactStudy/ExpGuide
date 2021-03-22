import React, { useContext } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import KindContext from '../../../contexts/KindContext';

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
  const { 
    setSpadePE, 
    setDiamondPE, 
    setCloverPE, 
    setHeartPE, 
  } = useContext(KindContext)[1];

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
