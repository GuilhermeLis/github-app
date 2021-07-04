import { createActions, createReducer } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { DucksType, updateIsLogged, updateToken } from './@types';

const { Types, Creators } = createActions({
    signInRequest: ['email', 'password'],
    signUpRequest: ['name', 'lastName', 'email', 'password'],
    signOut: null,
    saveToken: ['token'],
    setIsLogged: ['isLogged'],
    startLoadingButton: null,
    restartLoadingButton: null,
});

export const AuthTypes = Types;
export default Creators;

type INITIAL_STATE_TYPE = ImmutableObject<DucksType>;

export const INITIAL_STATE = Immutable<DucksType>({
    token: '',
    isLogged: false,
    loadingButton: false,
});

const savingToken = (
    state: INITIAL_STATE_TYPE,
    action: updateToken
): INITIAL_STATE_TYPE => {
    const { token } = action;
    return { ...state, token };
};

const setIsLogged = (
    state: INITIAL_STATE_TYPE,
    action: updateIsLogged
): INITIAL_STATE_TYPE => {
    const { isLogged } = action;
    return { ...state, isLogged };
};

const startButton = (state: INITIAL_STATE_TYPE): INITIAL_STATE_TYPE => ({
    ...state,
    loadingButton: true,
});
const restartButton = (state: INITIAL_STATE_TYPE): INITIAL_STATE_TYPE => ({
    ...state,
    loadingButton: false,
});

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SIGN_IN_REQUEST]: (state: INITIAL_STATE_TYPE) => state,
    [Types.SIGN_UP_REQUEST]: (state: INITIAL_STATE_TYPE) => state,
    [Types.SIGN_OUT]: (state: INITIAL_STATE_TYPE) => state,
    [Types.SAVE_TOKEN]: savingToken,
    [Types.SET_IS_LOGGED]: setIsLogged,
    [Types.START_LOADING_BUTTON]: startButton,
    [Types.RESTART_LOADING_BUTTON]: restartButton,
});
