import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { categoriesFetch } from "./../../redux/blog/blog.actions";

import useLang from "./../useLang/useLang.component";

import "./blog-sidebar.styles.scss";

const BlogSidebar = ({match, lang, lang_tag, categories, trans, categoriesFetch}) => {
    lang = lang[lang_tag];
    
    useEffect(() => {
        categoriesFetch();
    }, ['*']);

    return(
        <div className="blog-sidebar">
            <ul className="blog-sidebar__nav">
                <li className="blog-sidebar__nav-item blog-sidebar__nav-item--active"><Link to={`/${lang_tag}/blog/`}>{lang.allPosts}</Link></li>
                { categories ?
                    categories.map((el, index) =>
                        <li key={index} className="blog-sidebar__nav-item"> 
                            <Link to={`/${lang_tag}/blog/${lang.category}/${el[trans('slug')]}`}>{el[trans('name')]}</Link>
                        </li>
                    )
                : "" }
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    categories: state.blog.categories
});

const mapDispatchToProps = (dispatch) => ({
    categoriesFetch: () => dispatch(categoriesFetch())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(useLang(BlogSidebar, "blog-entry-list")));