import { CommonActions } from '@react-navigation/native';

let navigator: any;
export function setNavigator(ref: any) {
  navigator = ref;
}
export function navigate(routeName: string, params?: Record<string, unknown>) {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}