import { createSelector } from "reselect";
import { dynamicSort } from './../../utils/functions.js';

const selectBlog = state => state.blog;

export const selectPosts = createSelector(
  [selectBlog],
  blog => blog.posts
);

export const selectCategories = createSelector(
  [selectBlog],
  blog => blog.categories
);

export const selectCategoryPosts = slug => createSelector(
  [selectPosts],
  posts => posts.filter(el => el.category_slug === slug || el.category_slug_pl === slug)
);

export const selectCategory = slug => createSelector(
  [selectCategories],
  categories => categories.find(el => el['slug'] === slug || el['slug_pl'] === slug)
);

export const selectNewestPosts = createSelector(
    [selectPosts],
    posts => posts.sort(dynamicSort("-created_at")).slice(0, 3)
);