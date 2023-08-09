import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store.types';

/**
 * Custom hook for dispatch actions in redux store.
 * Includes AppDispatch type
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
