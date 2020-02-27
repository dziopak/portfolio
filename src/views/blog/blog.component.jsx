import React, {useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { postsFetch, categoriesFetch } from "./../../redux/blog/blog.actions";

import BlogEntry from "./../../components/blog-entry/blog-entry.component";
import BlogEntryList from "./../../components/blog-entry-list/blog-entry-list.component";
import BlogCategory from "./../../components/blog-category/blog-category.component";
import BlogNewest from "./../../components/blog-newest/blog-newest.component";
import useLang from "./../../components/useLang/useLang.component";
import BlogEditPost from "./../../components/blog-edit-post/blog-edit-post.component";

import "./blog.styles.scss";

const Blog = ({match, lang, lang_tag, postsFetch, categoriesFetch}) => {
    lang = lang[lang_tag];
    const { path } = match;
    
    useEffect(() => {
        postsFetch();
        categoriesFetch();
    }, ["*"]);

    return (
        <div className="blog-page">
            <div className="container section">
                <Switch>
                    <Route path={`${path}`} exact component={BlogEntryList} />
                    <Route path={`${path}/:postUrl`} exact component={BlogEntry} />
                    <Route path={`${path}/post/:id/edit`} exact component={BlogEditPost} />
                    <Route path={`${path}/category/:category`} exact component={BlogCategory} />
                    <Route path={`${path}/kategoria/:category`} exact component={BlogCategory} />
                </Switch>
            </div>
            <BlogNewest />
        </div>
    );
}

const mapStateToProps = (state) => ({
    app_lang: state.app.lang_tag
});

const mapDispatchToProps = ( dispatch ) => ({
    postsFetch: () => dispatch(postsFetch()),
    categoriesFetch: () => dispatch(categoriesFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(useLang(Blog, "blog", "views"));
