import {StackActions} from '@react-navigation/native';
import {navigatorRef} from '../root';

/**
 * Function for navigate user to another screen. Adds new screen to stack
 * @param route
 * @param params
 */
export const routeNavigate = (route: string, params?: unknown): void => {
  navigatorRef.current?.navigate(route, {...params});
};

/**
 * Function for switch current screen to another.
 * Switches only last screen in stack
 * @param route
 * @param params
 */
export const routeReplace = (route: string, params?: unknown): void => {
  navigatorRef.current?.dispatch(StackActions.replace(route, {...params}));
};

/**
 * Function for reset full stack.
 *
 * @param route
 * @param params
 */
export const routeReset = (route: string, params?: unknown): void => {
  navigatorRef.current?.reset({
    index: 0,
    routes: [
      {
        name: route,
        params,
      },
    ],
  });
};

/**
 * Function for go back to the previous screen
 * @param stepsAmount
 */
export const routeBack = (stepsAmount?: number): void => {
  if (stepsAmount && stepsAmount > 1) {
    navigatorRef.current?.pop(stepsAmount);
  } else {
    navigatorRef.current?.goBack();
  }
};
