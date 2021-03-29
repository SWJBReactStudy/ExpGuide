import React, { useState } from 'react';
import RangeContext from '../contexts/RangeContext';

const RangeProvider = ({ children }) => {
  const setRange = (min, max, kind) => {
    setCardsRange((prevState) => {
      return {
        ...prevState,
        [kind]: [min, max],
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
    setRange,
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
