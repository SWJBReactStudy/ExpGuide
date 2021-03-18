import React, { useState } from 'react';
import RangeContext from '../contexts/RangeContext';

const RangeProvider = ({ children }) => {
  const setCloverRange = (min, max) => {
    setCardsRange((prevState) => {
      return {
        ...prevState,
        clover: [min, max],
      };
    });
  };

  const setSpadeRange = (min, max) => {
    setCardsRange((prevState) => {
      return {
        ...prevState,
        spade: [min, max],
      };
    });
  };

  const setHeartRange = (min, max) => {
    setCardsRange((prevState) => {
      return {
        ...prevState,
        heart: [min, max],
      };
    });
  };

  const setDiamondRange = (min, max) => {
    setCardsRange((prevState) => {
      return {
        ...prevState,
        diamond: [min, max],
      };
    });
  };

  const setIsSetting = () => {
    setCardsRange((prevState) => {
      return {
        ...prevState,
        isSetting: true,
      };
    });
  };

  const initialState = {
    clover: [1, 13],
    spade: [1, 13],
    heart: [1, 13],
    diamond: [1, 13],
    isSetting: false,
  };

  const functionState = {
    setCloverRange,
    setSpadeRange,
    setHeartRange,
    setDiamondRange,
    setIsSetting,
  };
  const [cardsRange, setCardsRange] = useState(initialState);

  return (
    <RangeContext.Provider value={[cardsRange, functionState]}>
      {children}
    </RangeContext.Provider>
  );
};

export default RangeProvider;
