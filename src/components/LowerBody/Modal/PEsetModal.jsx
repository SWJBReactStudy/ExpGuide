import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import KindContext from '../../../contexts/KindContext';
import KindColor from '../../../style/KindColors';
import Label from '../../../atomic/Label';
import Blank from '../../../atomic/Blank';

const ModalContainer = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 600px;
  height: 600px;
  z-index: 99;
  padding: 4rem;

  &:focus {
    outline: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 80%;
`;

const Input = styled.input`
  min-height: 30px;
  text-align: center;
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  box-shadow: 1px 1px 3px gray;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #fff;
    box-shadow: 1px 1px 5px gray;
  }
`;

const PEsetModal = ({ isOpenModal, isOpen }) => {
  const setPE = useContext(KindContext)[1];
  const KindValue = useContext(KindContext)[0];

  const onChangeInput = (e, kind) => {
    setPE(e.target.value, kind);
  };

  return (
    <ModalContainer
      isOpen={isOpen}
      onRequestClose={() => isOpenModal(false)}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        },
      }}
      ariaHideApp={false}
    >
      <Content>
        <Label color={KindColor.clover}>Clover</Label>
        <Input
          type="text"
          value={KindValue.clover}
          onChange={(e) => onChangeInput(e, 'clover')}
        />

        <Label color={KindColor.diamond}>Diamond</Label>
        <Input
          type="text"
          value={KindValue.diamond}
          onChange={(e) => onChangeInput(e, 'diamond')}
        />

        <Label color={KindColor.spade}>Spade</Label>
        <Input
          type="text"
          value={KindValue.spade}
          onChange={(e) => onChangeInput(e, 'spade')}
        />

        <Label color={KindColor.heart}>Heart</Label>
        <Input
          type="text"
          value={KindValue.heart}
          onChange={(e) => onChangeInput(e, 'heart')}
        />
      </Content>
      <Blank size={2} />
      <CloseButton onClick={() => isOpenModal(false)}>X</CloseButton>
    </ModalContainer>
  );
};

export default PEsetModal;
