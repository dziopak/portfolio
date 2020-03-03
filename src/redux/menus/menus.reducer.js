import menusActionTypes from "./menus.types";

const INITIAL_STATE = {
    menus: []
};

const menusReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case menusActionTypes.MENUS_FETCH:
            return {
                ...state,
                isFetching: true
              };
        
        case menusActionTypes.MENUS_DID_FETCH:
            return {
                ...state,
                isFetching: false,
                menus: action.payload
              };
        
        case menusActionTypes.MENUS_FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload
              };

        default:
            return state;
    }
}

export default menusReducer;