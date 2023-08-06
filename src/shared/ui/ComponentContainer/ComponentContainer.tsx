import React, {FunctionComponent, useMemo} from 'react';

import {KeyboardAvoidingView} from 'react-native';

import {isIPhoneWithMonobrow} from 'react-native-status-bar-height';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';

import {IComponentContainerProps} from './ComponentContainer.types';
import {styles} from './ComponentContainer.styles';
import {HorizontalPaddingContainer} from '../HorizontalPaddingContainer';
import {scaleVertical} from '../../../app/theme';

const ComponentContainer: FunctionComponent<IComponentContainerProps> = ({
  children,
  backgroundColor,
  innerStyle,
  isTopEdged = true,
  isBottomEdged = true,
  isHorizontalPaddingEdged = true,
  isKeyboard = false,
}) => {
  const {colors} = useTheme();

  const edges = useMemo(() => {
    const edgesArr = [] as Edge[];

    if (isTopEdged) {
      edgesArr.push('top');
    }

    if (isBottomEdged) {
      edgesArr.push('bottom');
    }

    return edgesArr;
  }, [isBottomEdged, isTopEdged]);

  const Container = useMemo(
    () =>
      isHorizontalPaddingEdged ? (
        <HorizontalPaddingContainer innerStyle={innerStyle}>{children}</HorizontalPaddingContainer>
      ) : (
        children
      ),
    [children, innerStyle, isHorizontalPaddingEdged],
  );

  const KeyboardAvoiding = useMemo(
    () => (isKeyboard ? <KeyboardAvoidingView behavior={'padding'}>{Container}</KeyboardAvoidingView> : Container),
    [Container, isKeyboard],
  );

  return (
    <SafeAreaView
      edges={edges}
      style={{
        ...styles.safeArea,
        backgroundColor: backgroundColor ?? colors.background,
        paddingBottom: isBottomEdged ? (isIPhoneWithMonobrow() ? 0 : scaleVertical(24)) : 0,
        ...innerStyle,
      }}>
      {KeyboardAvoiding}
    </SafeAreaView>
  );
};

export {ComponentContainer};
