import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RangeForm from '../../components/LowerBody/RangeForm';
import Colors from '../../style/KindColors';
import Blank from '../../atomic/Blank';
import BorderAnimate from '../../animations/BorderAnimate';
import RangeContext from '../../contexts/RangeContext';

const Container = styled.div`
  width: 600px;
  height: 800px;
  background-color: #fff;
  margin: 4rem auto 0 auto;
  box-shadow: 1px 1px 5px gray;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  padding: 4rem;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: ${(props) => props.color};
  text-shadow: 1px 1px 2px gray;
  font-size: 32px;
`;

const Confirm = styled(Link)`
  width: 70px;
  height: 40px;
  background-color: #fff;
  box-shadow: 1px 1px 4px gray;
  border: none;
  text-decoration: none;
  color: #444;
  font-weight: bold;
  text-align: center;
  line-height: 40px;

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

const FirstPage = () => {
  const {
    setCloverRange,
    setSpadeRange,
    setHeartRange,
    setDiamondRange,
    setIsSetting,
  } = useContext(RangeContext)[1];

  const onClickConfirm = () => {
    setIsSetting();
  };

  return (
    <Container>
      <Form>
        <Label color={Colors.spade}>Spade</Label>
        <RangeForm setRange={setSpadeRange} />

        <Blank size={2} />

        <Label color={Colors.diamond}>Diamond</Label>
        <RangeForm setRange={setDiamondRange} />

        <Blank size={2} />

        <Label color={Colors.clover}>Clover</Label>
        <RangeForm setRange={setCloverRange} />

        <Blank size={2} />

        <Label color={Colors.heart}>Heart</Label>
        <RangeForm setRange={setHeartRange} />

        <Blank size={2} />

        <Confirm to="/BRP/main" onClick={onClickConfirm}>
          Go!
        </Confirm>
      </Form>
    </Container>
  );
};

export default FirstPage;