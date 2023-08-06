import {isNumber} from 'lodash';
import {StackActions} from '@react-navigation/native';

import {navigatorRef} from '@app/navigation';

export const routeNavigate = (route: string, params?: any): void => {
  navigatorRef.current?.navigate(route, {...params});
};

export const routeReplace = (route: string, params?: any): void => {
  navigatorRef.current?.dispatch(StackActions.replace(route, {...params}));
};

export const routeNavigateToAnotherStack = (route: string, screen: string, params?: any): void => {
  navigatorRef.current?.navigate(route, {
    screen,
    params,
  });
};

export const routeReset = (route: string, params?: any): void => {
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

export const routeStackReset = (route: string, innerRoute: string, params?: any) => {
  navigatorRef?.current?.reset({
    index: 0,
    routes: [
      {
        name: route,
        params: {
          screen: innerRoute,
          params,
        },
      },
    ],
  });
};

export const routeBack = (stepsAmount?: number): void => {
  // if need to reopen the modal widget
  try {
    // const reopenedFlowName = store.getState().modalWidgetOld.reopenFlow;
    //
    // if (reopenedFlowName) {
    //   store.dispatch(modalWidgetActions.setFlowName(reopenedFlowName));
    //   store.dispatch(modalWidgetActions.setIsModalVisible(true));
    //   store.dispatch(modalWidgetActions.setIsModalDataNeedSave(false));
    //   store.dispatch(modalWidgetActions.setNeedReopenFlow(null));
    // }
  } catch (error) {
    // @ts-ignore
    // logError('navigationFuncs', 'routeBack', error?.message);
  }

  if (isNumber(stepsAmount) && stepsAmount > 1) {
    navigatorRef.current?.pop(stepsAmount);
  } else {
    navigatorRef.current?.goBack();
  }
};
