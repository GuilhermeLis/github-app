import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'marconcept',
      storage: AsyncStorage,
      blacklist: [
        'loading',
        'modal',
      ],
    },
    reducers,
  );

  return persistedReducer;
};