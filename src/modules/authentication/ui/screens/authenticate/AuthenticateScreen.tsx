import React, {FC, useCallback} from 'react';
import {CodeField} from 'react-native-confirmation-code-field';
import {RenderCellOptions} from 'react-native-confirmation-code-field/esm/CodeField';
import {ComponentContainer} from '../../../../../shared/ui';

const AuthenticateScreen: FC = () => {
  const renderCell = useCallback((options: RenderCellOptions) => {
    return <></>;
  }, []);

  return (
    <ComponentContainer isTopEdged={true}>
      <CodeField renderCell={renderCell} />
    </ComponentContainer>
  );
};

export {AuthenticateScreen};
