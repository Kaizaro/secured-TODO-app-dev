import React, {FC, useCallback, useMemo} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {useTODOList} from '../../../hooks';
import {ITODO} from '../../../entities';
import {NoteCard, EmptyNotesList} from '../../components';
import {ComponentContainer} from '../../../../../shared/ui';
import {TODOListScreenStyles as styles} from './TODOList.styles';
import {APP_COLORS, scaleVertical} from '../../../../../app/theme';
import {ROOT_STACK, routeNavigate} from '../../../../../app/navigation';
import {ButtonMain} from '../../../../../shared/ui/buttons';

const TODOListScreen: FC = () => {
  const {TODOList} = useTODOList();

  /**
   * Functions handles when add new TODO item is pressed
   */
  const handleAddButtonPress = useCallback(() => {
    routeNavigate(ROOT_STACK.TODO_ADD);
  }, []);

  /**
   * method for render TODO item from FlatList
   */
  const renderNoteCards = useCallback<ListRenderItem<ITODO>>(({item, index}) => {
    return <NoteCard note={item} innerStyle={{marginTop: index === 0 ? scaleVertical(24) : 0}} />;
  }, []);

  /**
   * Button component in the top of screen
   */
  const AddTODOButton = useMemo(() => {
    return TODOList.length > 0 ? <ButtonMain onPress={handleAddButtonPress} text={'Add TODO'} /> : <></>;
  }, [TODOList.length, handleAddButtonPress]);

  const EmptyListComponent = useMemo(() => <EmptyNotesList innerStyle={styles.emptyList} />, []);

  /**
   * Function for optimized work of FlatList which extract key of items
   */
  const handleKeyExtractor = useCallback((item: ITODO, index: number) => `${item.id}_${index}`, []);

  return (
    <ComponentContainer isTopEdged={true} innerStyle={styles.container} backgroundColor={APP_COLORS.BORDER}>
      <FlatList
        keyExtractor={handleKeyExtractor}
        data={TODOList}
        renderItem={renderNoteCards}
        bounces={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={AddTODOButton}
        ListEmptyComponent={EmptyListComponent}
        windowSize={13}
      />
    </ComponentContainer>
  );
};

export {TODOListScreen};
