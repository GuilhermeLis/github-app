import { action } from '~/store/modules/@types';

type UserData = {
    id: number;
    photo: string;
    name: string;
    email: string;
    location: string;
    followers: number;
    following: number;
    repos: number;
    bio: string;
};

export interface DucksType {
    id: number;
    photo: string;
    name: string;
    email: string;
    location: string;
    followers: number;
    following: number;
    repos: number;
    bio: string;
}

export interface updateUserData extends action, UserData {}
