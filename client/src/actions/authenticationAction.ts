import * as firebase from 'firebase';
import { Dispatch } from 'redux';
import IStoreState from '../store/IStoreState';
import { ActionTypeKeys as keys } from './ActionTypeKeys';
import { ActionTypes, IAuthSuccessAction } from './ActionTypes';

export function authSetUserAsync(authUser: firebase.User): (dispatch: Dispatch<ActionTypes>, getState: () => IStoreState) => Promise<void> {
  return async (dispatch: Dispatch<IAuthSuccessAction>, getState: () => IStoreState) => {
    setTimeout(() => {
      dispatch(authSetUser(authUser))
    }, 3000);
  }
}

export function authSetUser(authUser: firebase.User): IAuthSuccessAction {
  return {
    authUser,
    type: keys.AUTH_USER_SET,
  }
}