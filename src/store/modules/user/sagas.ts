import {
    all, call, put, select, takeLatest,
  } from 'redux-saga/effects';
  import { Alert } from 'react-native';
  import { DefaultRootState } from '~/store/@types';
  import { navigate } from '~/services/navigate';
  
  import { AuthTypes } from './ducks';
  
  function* editProfileClientRequest() {
    yield navigate('EditProfile');
  }
  
 
  
  export default all([
    takeLatest(AuthTypes.EDIT_PROFILE_REQUEST, editProfileClientRequest),
  ]);