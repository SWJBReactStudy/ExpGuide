import React, { useState } from 'react';
import KindContext from '../contexts/KindContext';

const KindProvider = ({ children }) => {
  const setSpadePE = (PE) => {
    setKindPE((prevState) => {
      return {
        ...prevState,
        spade: PE,
      };
    });
  };

  const setDiamondPE = (PE) => {
    setKindPE((prevState) => {
      return {
        ...prevState,
        diamond: PE,
      };
    });
  };

  const setCloverPE = (PE) => {
    setKindPE((prevState) => {
      return {
        ...prevState,
        clover: PE,
      };
    });
  };

  const setHeartPE = (PE) => {
    setKindPE((prevState) => {
      return {
        ...prevState,
        heart: PE,
      };
    });
  };

  const firstPE = {
    spade: '오른발 런지',
    diamond: '왼발 런지',
    clover: '스쿼트',
    heart: '스쿼트',
  };

  const functionState = {
    setSpadePE,
    setDiamondPE,
    setCloverPE,
    setHeartPE,
  };

  const [kindPE, setKindPE] = useState(firstPE);

  return (
    <KindContext.Provider value={[kindPE, functionState]}>
      {children}
    </KindContext.Provider>
  );
};

export default KindProvider;
