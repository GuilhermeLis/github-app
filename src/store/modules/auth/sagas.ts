import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';
import { singIN } from './@types';
import { AuthTypes } from './ducks';

function* signIn({ username }: singIN) {
    yield put({ type: 'START_LOADING_BUTTON' });
    try {
        const { data, status } = yield call(api.get, `users/${username}`);
        const { data: userInfor } = data;
        if (status === 200) {
            yield put({
                type: 'SET_USER_DATA',
                id: userInfor.id,
                photo: userInfor.avatar_url,
                name: userInfor.login,
                email: userInfor.email,
                location: userInfor.location,
                followers: userInfor.followers,
                following: userInfor.following,
                repos: userInfor.public_repos,
                bio: userInfor.bio,
            });
        }
    } catch (error) {
        Alert.alert('Algo inesperado aconteceu');
    }
    yield put({ type: 'RESTART_LOADING_BUTTON' });
}

function* signOut() {}

export default all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
]);
