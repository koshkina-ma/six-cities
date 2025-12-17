import { State } from '../../types/state';
import {NameSpace, AuthorizationStatus} from '../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUser = (state: State) => state[NameSpace.User].user;
export const getFavoriteCount = (state: State): number => state[NameSpace.User].user?.favoriteCount ?? 0;
export const getUserEmail = (state: State): string => state[NameSpace.User].user?.email ?? '';

