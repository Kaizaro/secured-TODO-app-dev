import React, {FC} from 'react';
import {ICard} from './Card.types';
import {PressableComponent} from '../buttons';
import {cardStyles as styles} from './Card.styles';

const Card: FC<ICard> = ({handleCardPress, children, innerStyle}) => {
  return (
    <PressableComponent onPress={handleCardPress} style={{...styles.card, ...innerStyle}}>
      {children}
    </PressableComponent>
  );
};

export {Card};
