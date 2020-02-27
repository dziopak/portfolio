import blogActionTypes from "./blog.types";

export const postsFetch = () => ({
    type: blogActionTypes.POSTS_FETCH
});
  
export const postsDidFetch = posts => ({
    type: blogActionTypes.POSTS_DID_FETCH,
    payload: posts
});
  
export const postsFetchFail = errorMsg => ({
    type: blogActionTypes.POSTS_FETCH_FAIL,
    payload: errorMsg
});

export const categoriesFetch = () => ({
    type: blogActionTypes.CATEGORIES_FETCH
});
  
export const categoriesDidFetch = categories => ({
    type: blogActionTypes.CATEGORIES_DID_FETCH,
    payload: categories
});
  
export const categoriesFetchFail = errorMsg => ({
    type: blogActionTypes.CATEGORIES_FETCH_FAIL,
    payload: errorMsg
});