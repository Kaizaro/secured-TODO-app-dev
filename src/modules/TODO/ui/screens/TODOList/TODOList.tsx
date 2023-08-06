import React, {FC, useCallback, useMemo} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {useTODOList} from '../../../hooks';
import {ITODO} from '../../../entities';
import {NoteCard, EmptyNotesList} from '../../components';
import {ComponentContainer} from '../../../../../shared/ui';
import {TODOListScreenStyles as styles} from './TODOList.styles';
import {APP_COLORS} from '../../../../../app/theme';
import {ROOT_STACK, routeNavigate} from '../../../../../app/navigation';
import {ButtonMain} from '../../../../../shared/ui/buttons';

const TODOListScreen: FC = () => {
  const {TODOList, sortTODOList} = useTODOList();

  const handleAddButtonPress = useCallback(() => {
    routeNavigate(ROOT_STACK.TODO_ADD);
  }, []);

  const renderNoteCards = useCallback<ListRenderItem<ITODO>>(({item}) => {
    return <NoteCard note={item} />;
  }, []);

  const AddTODOButton = useMemo(() => {
    return TODOList.length > 0 ? <ButtonMain onPress={handleAddButtonPress} text={'Add TODO'} /> : <></>;
  }, [TODOList.length, handleAddButtonPress]);

  const EmptyListComponent = useMemo(() => <EmptyNotesList />, []);

  return (
    <ComponentContainer isTopEdged={true} innerStyle={styles.container} backgroundColor={APP_COLORS.BORDER}>
      <FlatList
        data={sortTODOList()}
        renderItem={renderNoteCards}
        bounces={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={AddTODOButton}
        ListEmptyComponent={EmptyListComponent}
      />
    </ComponentContainer>
  );
};

export {TODOListScreen};
