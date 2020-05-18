import { postsActionTypes, categoriesActionTypes } from "./blog.types";

const INITIAL_STATE = {
    posts: [],
    categories : [],
    isFetching: false,
    errorMsg: undefined
};

const blogReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case postsActionTypes.POSTS_FETCH:
            return {
                ...state,
                isFetching: true
              };
        
        case postsActionTypes.POSTS_DID_FETCH:
            return {
                ...state,
                isFetching: false,
                posts: action.payload
              };
        
        case postsActionTypes.POSTS_FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload
              };
        
        case categoriesActionTypes.CATEGORIES_FETCH:
            return {
                ...state,
                isFetching: true
              };
        
        case categoriesActionTypes.CATEGORIES_DID_FETCH:
            return {
                ...state,
                isFetching: false,
                categories: action.payload
              };
        
        case categoriesActionTypes.CATEGORIES_FETCH_FAIL:
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