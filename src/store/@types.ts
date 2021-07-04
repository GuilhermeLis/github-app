import { DucksType as auth } from './modules/auth/@types';
import { DucksType as user } from './modules/user/@types';

export interface DefaultRootState {
    auth: auth;
    user: user;
}
