import { createActions, createReducer } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { DucksType, updateUserData } from './@types';

const { Types, Creators } = createActions({
    editProfileRequest: null,
    editProfile: ['profileData'],
    setUserData: [
        'id',
        'name',
        'lastName',
        'email',
        'employee',
        'client',
        'cellphone',
        'dataNascimento',
        'sexo',
        'cpf',
        'cep',
        'city',
        'address',
        'houseNumber',
        'neighborhood',
        'hairSize',
        'termo',
    ],
});

export const AuthTypes = Types;
export default Creators;

type INITIAL_STATE_TYPE = ImmutableObject<DucksType>;

export const INITIAL_STATE = Immutable<DucksType>({
    id: 0,
    username: '',
    photo: '',
    name: '',
    email: '',
    location: '',
    followers: 0,
    following: 0,
    repos: 0,
    bio: '',
});

const setUserData = (
    state: INITIAL_STATE_TYPE,
    action: updateUserData
): INITIAL_STATE_TYPE => {
    const {
        id,
        photo,
        username,
        name,
        email,
        location,
        followers,
        following,
        repos,
        bio,
    } = action;
    return {
        ...state,
        id,
        username,
        photo,
        name,
        email,
        location,
        followers,
        following,
        repos,
        bio,
    };
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.EDIT_PROFILE_REQUEST]: (state: INITIAL_STATE_TYPE) => state,
    [Types.SET_USER_DATA]: setUserData,
});
