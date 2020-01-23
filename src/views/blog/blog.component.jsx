import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";

import firebase from './../../utils/firebase.js';
import BlogEntry from "./../../components/blog-entry/blog-entry.component";
import BlogEntryList from "./../../components/blog-entry-list/blog-entry-list.component";
import BlogCategory from "./../../components/blog-category/blog-category.component";
import BlogNewest from "./../../components/blog-newest/blog-newest.component";
import useLang from "./../../components/useLang/useLang.component";
import BlogEditPost from "./../../components/blog-edit-post/blog-edit-post.component";

import "./blog.styles.scss";

const Blog = ({match, lang, lang_tag}) => {
    lang = lang[lang_tag];
    const { path } = match;
    
    const [blogState, setBlogState] = useState({
        categories: []
    });

    useEffect(() => {
        const db = firebase.firestore();
        const fn = async () => {
            const menuItemsRef = await db.collection("blog_categories").get();
            const newState = {
                categories: []
            };
            menuItemsRef.forEach((doc) => {
                newState.categories.push(
                    {
                        ...doc.data(),
                        id: doc.id
                    }
                );
            });
            setBlogState(newState);
        };
        fn();
    }, ["*"]);

    return (
        <div className="blog-page">
            <div className="container section">
                <Switch>
                    <Route path={`${path}`} exact render={() => <BlogEntryList blogState={blogState} />} />
                    <Route path={`${path}/:postUrl`} exact component={BlogEntry} />
                    <Route path={`${path}/post/:id/edit`} exact component={BlogEditPost} />
                    <Route path={`${path}/category/:category`} exact render={() => <BlogCategory blogState={blogState} />} />
                    <Route path={`${path}/kategoria/:category`} exact render={() => <BlogCategory blogState={blogState} />} />
                </Switch>
            </div>
            <BlogNewest />
        </div>
    );
}

export default useLang(Blog, "blog", "views");