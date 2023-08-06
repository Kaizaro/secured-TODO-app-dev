import React, {FC, useCallback, useMemo} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {useNotesList} from '../../../hooks';
import {ITODO} from '../../../entities';
import {NoteCard} from '../components/TODOCard/NoteCard';
import {ComponentContainer} from '../../../../../shared/ui';
import {notesListStyles as styles} from './NotesList.styles';
import {EmptyNotesList} from '../components';

const NotesList: FC = () => {
  const {notesList} = useNotesList();

  const renderNoteCards = useCallback<ListRenderItem<ITODO>>(({item}) => {
    return <NoteCard note={item} />;
  }, []);

  const renderSeparator = useCallback(() => <View style={styles.separator} />, []);

  const EmptyListComponent = useMemo(() => <EmptyNotesList />, []);

  return (
    <ComponentContainer isTopEdged={true}>
      <FlatList
        data={notesList}
        renderItem={renderNoteCards}
        bounces={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyListComponent}
        ItemSeparatorComponent={renderSeparator}
      />
    </ComponentContainer>
  );
};

export {NotesList};
