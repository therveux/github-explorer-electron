import { SET_USER } from '../actions/actionsTypes';

const initialState = {
    user: {}
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER:
            return { ...state, user: { ...state.user, ...payload.user } };
        default:
            return state;
    }
};
