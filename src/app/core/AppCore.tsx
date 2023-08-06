import React, {FC} from 'react';
import {StoreProvider} from '../store';

const AppCore: FC = () => {
  return (
    <StoreProvider>
      <></>
    </StoreProvider>
  );
};

export {AppCore};
