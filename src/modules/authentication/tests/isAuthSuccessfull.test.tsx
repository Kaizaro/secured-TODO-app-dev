import {it} from '@jest/globals';
import {renderHook} from '@testing-library/react-hooks';
import {useAuthenticate} from '../hooks';
import {SecurityLevel} from 'expo-local-authentication';
import {ConfigureAuthenticateScreen} from '../ui';
import renderer from 'react-test-renderer';

/**
 * Checking normal render of hook (test)
 */
describe('useAuthentication', () => {
  it('should mount ok', () => {
    const {result} = renderHook(() => useAuthenticate());
    expect(result.current).toBeDefined();
  });
});

/**
 * Checks is user can authorize
 */
describe('isUserAuthorized', () => {
  it('should return isUserAuthorized boolean', async () => {
    const {result} = renderHook(() => useAuthenticate());
    expect(result.current.authenticateUser()).toBeTruthy();
  });
});

/**
 * Check if user with unsupported or wrong security level
 * see screen with button to the device security settings
 */
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
