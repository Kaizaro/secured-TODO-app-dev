import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');
const ratio: number = PixelRatio.getFontScale();
const idealWidth = 375;
const idealHeight = 812;

export const scaleHorizontal = (inWidth = 1) => {
  const delimiter = idealWidth / inWidth;
  return width / delimiter;
};

export const scaleVertical = (inHeight = 1) => {
  const delimiter = idealHeight / inHeight;
  return height / delimiter;
};

export const scaleFontSize = (fontSize = 1) => {
  const divisionRatio = idealWidth / (fontSize / ratio);
  return width / divisionRatio;
};

export const scaleLineHeight = (lineHeight = 1, calculateByWidth: boolean | null | undefined = false) => {
  const defaultIdealCalculationParam = calculateByWidth ? idealWidth : idealHeight;
  const defaultCalculationParam = calculateByWidth ? width : height;
  const divisionRatio = defaultIdealCalculationParam / (lineHeight / ratio);
  return defaultCalculationParam / divisionRatio;
};
