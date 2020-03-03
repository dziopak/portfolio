import testimonialsActionTypes from "./testimonials.types";

const INITIAL_STATE = {
    items: []
};

const testimonialsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case testimonialsActionTypes.TESTIMONIALS_FETCH:
            return {
                ...state,
                isFetching: true
              };
        
        case testimonialsActionTypes.TESTIMONIALS_DID_FETCH:
            return {
                ...state,
                isFetching: false,
                items: action.payload
              };
        
        case testimonialsActionTypes.TESTIMONIALS_FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload
              };

        default:
            return state;
    }
}

export default testimonialsReducer;