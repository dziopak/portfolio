import React, { useEffect, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { postsFetch, categoriesFetch } from "./../../redux/blog/blog.actions";
import useLang from "./../../components/useLang/useLang.component";
import Loading from "../../components/loading/loading.component";


import "./blog.styles.scss";

const BlogEntry = lazy(() => import('./../../components/blog-entry/blog-entry.component'));
const BlogEntryList = lazy(() => import('./../../components/blog-entry-list/blog-entry-list.component'));
const BlogCategory = lazy(() => import('./../../components/blog-category/blog-category.component'));
const BlogNewest = lazy(() => import('./../../components/blog-newest/blog-newest.component'));


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
                <Suspense callback={() => <Loading />}>
                    <Switch>
                        <Route path={`${path}`} exact component={BlogEntryList} />
                        <Route path={`${path}/:postUrl`} exact component={BlogEntry} />
                        <Route path={`${path}/category/:category`} exact component={BlogCategory} />
                        <Route path={`${path}/kategoria/:category`} exact component={BlogCategory} />
                    </Switch>
                </Suspense>
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
