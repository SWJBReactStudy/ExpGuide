import React, { useState } from 'react';
import KindContext from '../contexts/KindContext';

const KindProvider = ({ children }) => {
  const setPE = (PE, kind) => {
    setKindPE((prevState) => {
      return {
        ...prevState,
        [kind]: PE,
      };
    });
  };

  const firstPE = {
    spade: '오른발 런지',
    diamond: '왼발 런지',
    clover: '스쿼트',
    heart: '스쿼트',
  };

  const [kindPE, setKindPE] = useState(firstPE);

  return (
    <KindContext.Provider value={[kindPE, setPE]}>
      {children}
    </KindContext.Provider>
  );
};

export default KindProvider;
