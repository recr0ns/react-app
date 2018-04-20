import C from '../constants';

export const setToken = token => ({ type: C.Identity.SetToken, payload: token })