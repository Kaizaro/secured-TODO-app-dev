import {TODOSliceActions} from '../DAL';
import {TODOFormSlice, TODOFormSliceActions, TODOFormSliceInitialState} from '../DAL/TODOFormSlice';

const testTODOText = 'test-text';

/**
 * Test for check work of TODOForm slice
 */
describe('Test TODOFormSlice', () => {
  /**
   * Getting of initial state of TODOForm slice
   */
  it('get the initial reducer state', () => {
    expect(TODOFormSlice.reducer(undefined, {})).toEqual(TODOFormSliceInitialState);
  });

  /**
   * Check changes in TODOFormValue
   */
  it('handle changing text when input', () => {
    expect(
      TODOFormSlice.reducer(TODOFormSliceInitialState, TODOFormSliceActions.setTODOInputValue(testTODOText)),
    ).toEqual({
      ...TODOFormSliceInitialState,
      TODOInputValue: testTODOText,
    });
  });

  /**
   * Check clearing of TODOFormValue
   */
  it('handle clear text input field', () => {
    expect(TODOFormSlice.reducer(TODOFormSliceInitialState, TODOFormSliceActions.clearTODOInputValue())).toEqual({
      ...TODOFormSliceInitialState,
      TODOInputValue: '',
    });
  });

  /**
   * Check full clear of store
   */
  it('handles clear all reducer', () => {
    expect(TODOFormSlice.reducer(TODOFormSliceInitialState, TODOSliceActions.clearAll())).toEqual(
      TODOFormSliceInitialState,
    );
  });
});
