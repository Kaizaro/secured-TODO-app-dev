import {IDefaultFC} from '../../../../../shared/types';

export interface ICodeInputField extends IDefaultFC {
  value: string;
  onValueChange: (text: string) => void;
  onEndEditing: () => void;
}
