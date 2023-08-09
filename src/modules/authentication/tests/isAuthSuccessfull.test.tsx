import {it} from '@jest/globals';
import {renderHook} from '@testing-library/react-hooks';
import {useAuthenticate} from '../hooks';
import {SecurityLevel} from 'expo-local-authentication';
import {ConfigureAuthenticateScreen} from '../ui';
import renderer from 'react-test-renderer';

describe('useAuthentication', () => {
  it('should mount ok', () => {
    const {result} = renderHook(() => useAuthenticate());
    expect(result.current).toBeDefined();
  });
});

describe('isUserAuthorized', () => {
  it('should return isUserAuthorized boolean', async () => {
    const {result} = renderHook(() => useAuthenticate());
    expect(result.current.authenticateUser()).toBeTruthy();
  });
});

describe('isConfigurationScreenLoaded', () => {
  it(`if security level not equal to SecurityLevel.SECRET (${SecurityLevel.SECRET}) or SecurityLevel.BIOMENTRIC (${SecurityLevel.BIOMETRIC})`, async () => {
    const {result} = renderHook(() => useAuthenticate());
    const securityLevel = await result.current.getDeviceAuthenticateOptions();
    if (securityLevel !== SecurityLevel.SECRET && securityLevel !== SecurityLevel.BIOMETRIC) {
      const tree = renderer.create(<ConfigureAuthenticateScreen />).toJSON();
      expect(tree.props.testID).toBe('ConfigureAuthenticateScreen');
    }
  });
});
