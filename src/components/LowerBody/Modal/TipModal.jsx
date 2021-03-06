import React, { useContext } from 'react';
import styled from 'styled-components';
import ModalAnimate from '../../../animations/ModalAnimate';
import BorderAnimate from '../../../animations/BorderAnimate';
import KindContext from '../../../contexts/KindContext';

const ModalContainer = styled.div`
  position: absolute;
  width: 800px;
  height: 50px;
  left: 50%;
  top: 5%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 2px 2px 2px gray;
  opacity: 70%;
  z-index: 2;
  padding: 1.8rem;
  border-radius: 30px;
  display: ${(props) => (props.v ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-around;
  animation: ${ModalAnimate} 1s;

  @media screen and (max-width: 420px) {
    width: 300px;
    padding: 1.8rem 1rem 1.8rem 1.8rem;
  }
`;

const TipText = styled.p`
  color: black;
  opacity: 80%;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 1000;
  font-size: 18px;

  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

const CloseButton = styled.button`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 100%;
  outline: none;
  cursor: pointer;
  position: relative;
  border: none;
  box-shadow: 1px 1px 5px black;

  @media screen and (max-width: 420px) {
    width: 30px;
  }

  &:after {
    content: '';
    position: absolute;
    top: calc(-1 * 1px);
    left: calc(-1 * 1px);
    height: calc(100% + 1px * 2);
    width: calc(100% + 1px * 2);
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    border-radius: calc(2 * 50%);
    z-index: -1;
    animation: ${BorderAnimate} 3s ease alternate infinite;
    background-size: 300% 300%;
  }
`;

const Modal = ({ v, handleBtnClick }) => {
  const { clover, diamond, spade, heart } = useContext(KindContext)[0];

  const checkValue = (kind) => {
    if (!kind) return '??';

    return kind;
  };

  return (
    <ModalContainer v={v}>
      <TipText>
        ????????? = {checkValue(clover)} | ????????? = {checkValue(diamond)} |
        ???????????? = {checkValue(spade)} | ?????? = {checkValue(heart)}
      </TipText>
      <CloseButton onClick={() => handleBtnClick(true)} />
    </ModalContainer>
  );
};

export default Modal;
