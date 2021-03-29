import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Footer from '../../components/LowerBody/Footer';
import Header from '../../components/LowerBody/Header';
import RenderShowTip from '../../animations/RenderAnimate/RenderShowTip';
import PickedCard from '../../components/LowerBody/PickedCard';
import Blank from '../../atomic/Blank';
import TipModal from '../../components/LowerBody/Modal/TipModal';
import BorderAnimate from '../../animations/BorderAnimate';
import RangeContext from '../../contexts/RangeContext';
import { Redirect } from 'react-router-dom';
import PEsetModal from '../../components/LowerBody/Modal/PEsetModal';
import KindProvider from '../../provider/KindProvider';

const Container = styled.div`
  position: relative;
  padding-top: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: '';
    position: absolute;
    top: calc(-1 * 2px);
    left: calc(-1 * 2px);
    height: calc(100% + 2px * 2);
    width: calc(100% + 2px * 2);
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
    border-radius: calc(2 * 17px);
    z-index: -1;
    opacity: 3%;
    animation: ${BorderAnimate} 3s ease alternate infinite;
    background-size: 300% 300%;
  }
`;

const ShowTip = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #777;
  outline: none;
  margin-top: -4rem;
  border: none;
  box-shadow: 1px 1px 3px black;
  opacity: 65%;
  font-weight: bold;
  color: #ccc;
  cursor: pointer;
  animation: ${RenderShowTip} 1s ease-in-out;
`;

const MainPage = () => {
  const { isSetting } = useContext(RangeContext)[0];

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSetPE, setIsOpenSetPE] = useState(false);

  const onClickShowTip = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    setIsOpen(true);
  };

  return (
    <Container>
      {isSetting ? '' : <Redirect to="/ExpGuide/BRP" />}
      <Header />
      <ShowTip onClick={onClickShowTip}>?</ShowTip>

      <Blank size={3} />

      <PickedCard />

      <Blank size={3} />

      <Footer />

      <KindProvider>
        <TipModal v={isOpen} handleBtnClick={setIsOpenSetPE} />
        <PEsetModal isOpen={isOpenSetPE} isOpenModal={setIsOpenSetPE} />
      </KindProvider>
    </Container>
  );
};

export default MainPage;
