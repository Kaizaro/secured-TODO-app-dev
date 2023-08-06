import React, {FC, useMemo} from 'react';

import {IButtonBase} from './ButtonBase.types';
import {buttonBaseStyles as styles} from './ButtonBase.styles';

import {ButtonLoader} from '../ButtonLoader';
import { PressableComponent } from "../PressableComponent";
import { APP_COLORS, scaleVertical } from "../../../../app/theme";
import { RegularText } from "../../texts";

export const ButtonBase: FC<IButtonBase> = ({
  onPress,
  onPressIn,
  style,
  innerStyle,
  disabledStyle,
  textStyle,
  backgroundColor = APP_COLORS.BLUE,
  borderColor = APP_COLORS.BLUE,
  text = 'Button',
  textColor = APP_COLORS.WHITE,
  loaderColor = APP_COLORS.BLUE,
  disabled = false,
  loading = false,
  numberOfLines = 0,
  ...props
}) => {
  const isButtonDisabled = useMemo(() => disabled || loading, [disabled, loading]);

  // render block
  return (
    <PressableComponent
      disabled={isButtonDisabled}
      onPressOut={onPress}
      onPressIn={onPressIn}
      innerStyle={{
        ...styles.container,
        backgroundColor,
        borderColor,
        borderWidth: borderColor ? scaleVertical() : 0,
        ...style,
        ...innerStyle,
      }}
      disabledStyle={disabledStyle}
      {...props}>
      {!loading && (
        <RegularText numberOfLines={numberOfLines} color={textColor} innerStyle={textStyle}>
          {text ?? props.children}
        </RegularText>
      )}
      {loading && <ButtonLoader color={loaderColor ?? textColor} />}
    </PressableComponent>
  );
};
