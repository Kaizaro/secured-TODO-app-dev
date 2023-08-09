import {Dimensions, PixelRatio} from 'react-native';

/**
 * Setting dimensions of design
 * As model I used iPhone screen dimensions
 */
const {width, height} = Dimensions.get('window');
const ratio: number = PixelRatio.getFontScale();
const idealWidth = 375;
const idealHeight = 812;

/**
 * Function for scaling by horizontal axis
 * @param inWidth
 * @returns number
 */
export const scaleHorizontal = (inWidth = 1) => {
  const delimiter = idealWidth / inWidth;
  return width / delimiter;
};

/**
 * Function for scaling by vertical axis
 * @param inHeight
 * @returns number
 */
export const scaleVertical = (inHeight = 1) => {
  const delimiter = idealHeight / inHeight;
  return height / delimiter;
};

/**
 * Function for scaling font size
 * @param inWidth
 * @returns number
 */
export const scaleFontSize = (fontSize = 1) => {
  const divisionRatio = idealWidth / (fontSize / ratio);
  return width / divisionRatio;
};

/**
 * Function for scaling line height
 * @param lineHeight
 * @param calculateByWidth
 * @returns number
 */
export const scaleLineHeight = (lineHeight = 1, calculateByWidth: boolean | null | undefined = false) => {
  const defaultIdealCalculationParam = calculateByWidth ? idealWidth : idealHeight;
  const defaultCalculationParam = calculateByWidth ? width : height;
  const divisionRatio = defaultIdealCalculationParam / (lineHeight / ratio);
  return defaultCalculationParam / divisionRatio;
};
