import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RangeForm from '../../components/LowerBody/RangeForm';
import Colors from '../../style/KindColors';
import Blank from '../../atomic/Blank';
import BorderAnimate from '../../animations/BorderAnimate';
import RangeContext from '../../contexts/RangeContext';
import Label from '../../atomic/Label';

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

  @media screen and (max-width: 420px) {
    width: 350px;
    height: 700px;
  }
`;

const Form = styled.div`
  padding: 4rem;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 420px) {
    padding: 1.7rem;
    padding-top: 3rem;
  }
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
  const { setRange, setIsSetting } = useContext(RangeContext)[1];

  const onClickConfirm = () => {
    setIsSetting();
  };

  return (
    <Container>
      <Form>
        <Label color={Colors.spade}>Spade</Label>
        <RangeForm kind="spade" setRange={setRange} />

        <Blank size={2} />

        <Label color={Colors.diamond}>Diamond</Label>
        <RangeForm kind="diamond" setRange={setRange} />

        <Blank size={2} />

        <Label color={Colors.clover}>Clover</Label>
        <RangeForm kind="clover" setRange={setRange} />

        <Blank size={2} />

        <Label color={Colors.heart}>Heart</Label>
        <RangeForm kind="heart" setRange={setRange} />

        <Blank size={2} />

        <Confirm to="/ExpGuide/BRP/main" onClick={onClickConfirm}>
          Go!
        </Confirm>
      </Form>
    </Container>
  );
};

export default FirstPage;
