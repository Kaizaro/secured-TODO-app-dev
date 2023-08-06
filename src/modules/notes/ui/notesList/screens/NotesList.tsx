import React, { FC } from "react";
import { FlatList } from "react-native";
import { useNotesList } from "../../../hooks";

const NotesList: FC = () => {
  const {notesList} = useNotesList();

  return (
    <FlatList data={notesList} renderItem={() => <></>} />
  );
};

export {NotesList};
