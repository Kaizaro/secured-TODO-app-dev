import React, {FC, useCallback, useState} from 'react';
import {CodeField} from 'react-native-confirmation-code-field';
import {RenderCellOptions} from 'react-native-confirmation-code-field/esm/CodeField';
import {RegularText} from '../../../../../shared/ui';
import {View} from 'react-native';
import {codeInputFieldStyles as styles} from './CodeInputField.styles';
import {APP_COLORS} from '../../../../../app/theme';
import {ICodeInputField} from './CodeInputField.types';

export const CELL_COUNT = 6;

const CodeInputField: FC<ICodeInputField> = ({value, onValueChange, onEndEditing, innerStyle}) => {
  const renderCell = useCallback((options: RenderCellOptions) => {
    return (
      <View style={{...styles.cell, borderColor: options.isFocused ? APP_COLORS.BLUE : APP_COLORS.BLACK}}>
        <RegularText fontSizeScaled={18} color={options.isFocused ? APP_COLORS.BLUE : APP_COLORS.BLACK}>
          {options.symbol}
        </RegularText>
      </View>
    );
  }, []);

  return (
    <View style={{...styles.container, ...innerStyle}}>
      <CodeField
        cellCount={CELL_COUNT}
        renderCell={renderCell}
        autoFocus={true}
        value={value}
        onChangeText={onValueChange}
        rootStyle={styles.codeInput}
        keyboardType={'number-pad'}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

export {CodeInputField};
