import { combineReducers } from 'redux';

import blogReducer from "./blog/blog.reducer";
import appReducer from "./app/app.reducer";
import menusReducer from "./menus/menus.reducer";
import testimonialsReducer from "./testimonials/testimonials.reducer";

export default combineReducers({
    app: appReducer,
    blog: blogReducer,
    menus: menusReducer,
    testimonials: testimonialsReducer
});