import {it} from '@jest/globals';
import {renderHook} from '@testing-library/react-hooks';
import {useAuthenticate} from '../hooks';

// it('should return security level "None"', () => expect(()).toBe())
describe('useAuthentication', () => {
  it('should render ok', () => {
    const {result} = renderHook(() => useAuthenticate());
    expect(result.current).toBeDefined();
  });
});
