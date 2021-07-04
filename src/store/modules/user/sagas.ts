import { all, takeLatest } from 'redux-saga/effects';
import { navigate } from '~/services/navigate';
import { AuthTypes } from './ducks';

function* editProfileClientRequest() {
    yield navigate('EditProfile');
}

export default all([
    takeLatest(AuthTypes.EDIT_PROFILE_REQUEST, editProfileClientRequest),
]);
