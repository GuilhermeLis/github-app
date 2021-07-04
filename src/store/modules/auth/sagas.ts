import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';
import { singIN } from './@types';
import { AuthTypes } from './ducks';

function* signIn({ username }: singIN) {
    yield put({ type: 'START_LOADING_BUTTON' });
    try {
        const { data: userInfor, status } = yield call(api.get, `users/${username}`);
        if (status === 200) {
            yield put({
                type: 'SET_USER_DATA',
                id: userInfor.id,
                photo: userInfor.avatar_url,
                username: userInfor.login,
                name: userInfor.login,
                email: userInfor.email,
                location: userInfor.location,
                followers: userInfor.followers,
                following: userInfor.following,
                repos: userInfor.public_repos,
                bio: userInfor.bio,
            });
            yield put({ type: 'SET_IS_LOGGED', isLogged: true });
        }
    } catch (error) {
        console.log(error);
        Alert.alert('Algo inesperado aconteceu');
    }
    yield put({ type: 'RESTART_LOADING_BUTTON' });
}

function* signOut() {
    yield put({ type: 'SET_IS_LOGGED', isLogged: false });
}

export default all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
]);
