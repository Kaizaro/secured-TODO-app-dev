import {StackActions} from '@react-navigation/native';
import {navigatorRef} from '../root';

export const routeNavigate = (route: string, params?: unknown): void => {
  navigatorRef.current?.navigate(route, {...params});
};

export const routeReplace = (route: string, params?: unknown): void => {
  navigatorRef.current?.dispatch(StackActions.replace(route, {...params}));
};

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

export const routeBack = (stepsAmount?: number): void => {
  if (stepsAmount && stepsAmount > 1) {
    navigatorRef.current?.pop(stepsAmount);
  } else {
    navigatorRef.current?.goBack();
  }
};
