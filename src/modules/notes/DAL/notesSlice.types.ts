import {INote} from '../entities';

export interface INotesSlice {
  notesList: INote[];
  selectedNote: INote | null;
}
