import { postsActionTypes, categoriesActionTypes } from "./blog.types";

export const postsFetch = () => ({
    type: postsActionTypes.POSTS_FETCH
});
  
export const postsDidFetch = posts => ({
    type: postsActionTypes.POSTS_DID_FETCH,
    payload: posts
});
  
export const postsFetchFail = errorMsg => ({
    type: postsActionTypes.POSTS_FETCH_FAIL,
    payload: errorMsg
});

export const categoriesFetch = () => ({
    type: categoriesActionTypes.CATEGORIES_FETCH
});
  
export const categoriesDidFetch = categories => ({
    type: categoriesActionTypes.CATEGORIES_DID_FETCH,
    payload: categories
});
  
export const categoriesFetchFail = errorMsg => ({
    type: categoriesActionTypes.CATEGORIES_FETCH_FAIL,
    payload: errorMsg
});