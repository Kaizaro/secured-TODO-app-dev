import React, {FC, useCallback, useMemo} from 'react';
import { FlatList, ListRenderItem, View } from "react-native";
import {useNotesList} from '../../../hooks';
import {INote} from '../../../entities';
import {NoteCard} from '../components/NoteCard/NoteCard';
import {EmptyList} from '../../../../../shared/ui';
import {notesListStyles as styles} from './NotesList.styles';

// Const for render empty list message.
// If using localisation - needs to be changed to locale key.
const HARDCODED_empty_list_message = "The note list is empty. Let's try to add one";

const NotesList: FC = () => {
  const {notesList} = useNotesList();

  const renderNoteCards = useCallback<ListRenderItem<INote>>(({item}) => {
    return <NoteCard note={item} />;
  }, []);

  const renderSeparator = useCallback(() => <View style={styles.separator} />, []);

  const EmptyListComponent = useMemo(() => <EmptyList message={HARDCODED_empty_list_message} />, []);

  return (
    <FlatList
      data={notesList}
      renderItem={renderNoteCards}
      bounces={false}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={EmptyListComponent}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

export {NotesList};
