import { SET_USER } from './actionsTypes';

export const setUserRdx = user => ({
    type: SET_USER,
    payload: {
        user
    }
});
