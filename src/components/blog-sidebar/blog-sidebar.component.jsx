import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import useLang from "./../useLang/useLang.component";

import "./blog-sidebar.styles.scss";

const BlogSidebar = ({match, lang, lang_tag, categories, trans}) => {
    lang = lang[lang_tag];
    

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

export default withRouter(connect(mapStateToProps)(useLang(BlogSidebar, "blog-entry-list")));