import { combineReducers } from 'redux';

import blogReducer from "./blog/blog.reducer";
import appReducer from "./app/app.reducer";

export default combineReducers({
    app: appReducer,
    blog: blogReducer
});