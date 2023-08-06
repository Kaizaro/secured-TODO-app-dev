import React, {FC, useMemo} from 'react';

import {Text, TextStyle} from 'react-native';

import {BaseTextProps} from './BaseText.interfaces';

import {APP_COLORS, scaleFontSize} from '../../../../app/theme';

/**
 * Regular text component.
 * @param {React.PropsWithChildren<BaseTextProps>} props
 * @returns {JSX.Element}
 * @constructor
 */
const BaseText: FC<BaseTextProps> = (props) => {
  const {
    fontWeight,
    numberOfLines,
    innerStyle,
    children,
    key,
    fontSizeScaled = 14,
    color = APP_COLORS.BLACK,
    textAlign = 'left',
    isUnderlined = false,
  } = props;
  const formTextStyle = useMemo(() => {
    let style = {} as TextStyle;

    if (fontSizeScaled) {
      style.fontSize = scaleFontSize(fontSizeScaled);
    }
    if (color) {
      style.color = color;
    }
    if (textAlign) {
      style.textAlign = textAlign;
    }
    if (fontWeight) {
      style.fontWeight = fontWeight;
    }
    if (isUnderlined) {
      style.textDecorationLine = 'underline';
    }
    if (innerStyle) {
      if (Array.isArray(innerStyle)) {
        let newInnerStyle = {};

        innerStyle.forEach((item) => {
          newInnerStyle = {...newInnerStyle, ...item};
        });

        style = {...style, ...newInnerStyle};
      } else {
        style = {...style, ...innerStyle};
      }
    }
    return style;
  }, [color, fontSizeScaled, fontWeight, innerStyle, isUnderlined, textAlign]);

  // render block
  return (
    <Text key={key} numberOfLines={numberOfLines} style={formTextStyle} {...props} allowFontScaling={false}>
      {children}
    </Text>
  );
};

export = BaseText;
