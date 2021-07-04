import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

declare global {
  interface Console {
    tron: any;
  }
}

if ('__DEV__') {
  const tron = Reactotron.configure({ host: '10.0.0.107', port: 9090 })
    .useReactNative({ errors: true, editor: true })
    .use(reactotronRedux())
    .use(reactotronSaga({}))
    .connect();

  tron.clear!();

  console.tron = tron;
}