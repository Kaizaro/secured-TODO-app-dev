import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '../store.types';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
/**
 * Custom hook for getting state of redux store.
 * Includes all types in store
 * No need to implement correct types when calling useSelector
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
