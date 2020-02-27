import blogActionTypes from "./blog.types";

const INITIAL_STATE = {
    posts: [],
    categories : [],
    isFetching: false,
    errorMsg: undefined
};

const blogReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case blogActionTypes.POSTS_FETCH:
            return {
                ...state,
                isFetching: true
              };
        
        case blogActionTypes.POSTS_DID_FETCH:
            return {
                ...state,
                isFetching: false,
                posts: action.payload
              };
        
        case blogActionTypes.POSTS_FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload
              };
        
        case blogActionTypes.CATEGORIES_FETCH:
            return {
                ...state,
                isFetching: true
              };
        
        case blogActionTypes.CATEGORIES_DID_FETCH:
            return {
                ...state,
                isFetching: false,
                categories: action.payload
              };
        
        case blogActionTypes.CATEGORIES_FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload
              };

        default:
            return state;
    }
}

export default blogReducer;