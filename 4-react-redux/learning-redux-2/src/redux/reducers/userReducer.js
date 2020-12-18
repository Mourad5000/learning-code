import actionTypes from "../actions/actionTypes";

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.LOAD_USERS:
            // guardar els users al state
            return;
        default:
            return state;
    }
}
