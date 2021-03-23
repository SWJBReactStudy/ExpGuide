import React, { useState } from 'react';
import styled from 'styled-components';
import Blank from '../../../atomic/Blank';

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CountsForm = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  box-shadow: 1px 1px 3px black;
  margin-right: 1rem;
  cursor: pointer;
  outline: none;
  transition: all 0.1s;

  &:last-child {
    margin-right: 0;
  }

  &:active {
    background-color: #ccc;
  }
`;

const NumberDiv = styled.div`
  margin-right: 1rem;
  font-weight: ${(props) => (props.isConfirm ? 'bold' : 'normal')};
`;

const ConfirmButton = styled.button`
  width: 35px;
  height: 20px;
  cursor: pointer;
  opacity: ${(props) => (props.isConfirm ? '1' : '0.5')};
  border: 1px solid gray;
  background-color: #ddd;
  outline: none;
  transition: transform 0.2s;
  & > * {
    opacity: 100%;
    color: #111;
  }
  &:hover {
    opacity: 1;
    transform: scale(1.2);
    background-color: #eee;
  }
`;

const RangeForm = ({ kind, setRange }) => {
  const [minCount, setMinCount] = useState(1);
  const [maxCount, setMaxCount] = useState(13);
  const [isConfirm, setIsConfirm] = useState(false);

  const onClickMinDes = () => {
    if (minCount <= 1) return;
    setMinCount(minCount - 1);
  };

  const onClickMinInc = () => {
    if (minCount >= 13) return;
    if (minCount >= maxCount) return;
    setMinCount(minCount + 1);
  };

  const onClickMaxDes = () => {
    if (maxCount <= 0) return;
    if (maxCount <= minCount) return;
    setMaxCount(maxCount - 1);
  };

  const onClickMaxInc = () => {
    if (maxCount >= 13) return;
    setMaxCount(maxCount + 1);
  };

  const onClickConfirm = () => {
    setRange(minCount, maxCount, kind);
    setIsConfirm(isConfirm ? false : true);
  };

  return (
    <Container>
      <CountsForm>
        <CountButton onClick={onClickMinDes}>-</CountButton>
        <CountButton onClick={onClickMinInc}>+</CountButton>
        <NumberDiv isConfirm={isConfirm}>
          {minCount} ~ {maxCount}
        </NumberDiv>
        <CountButton onClick={onClickMaxDes}>-</CountButton>
        <CountButton onClick={onClickMaxInc}>+</CountButton>
      </CountsForm>

      <Blank size={1} />

      <ConfirmButton isConfirm={isConfirm} onClick={onClickConfirm}>
        <span>{!isConfirm ? 'OK?' : 'Fix'}</span>
      </ConfirmButton>
    </Container>
  );
};

export default RangeForm;
