import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import BlogItem from "./../blog-item/blog-item.component";
import BlogSidebar from "./../blog-sidebar/blog-sidebar.component";
import useLang from "./../useLang/useLang.component";

import "./blog-category.styles.scss";

const BlogCategory = ({match, lang, lang_tag, trans, items, category}) => {
    lang = lang[lang_tag];

    return(
        <div className="blog-category">
            <BlogSidebar />
            <div className="blog-category__main">
                { category ?
                    <div>
                        <h3>{lang.category} {category[trans('name')]}</h3>
                        <p>{category[trans('description')]}</p>
                        {
                            items && items.length > 0 ? 
                                items.map((data, index) => <BlogItem key={index} data={data} />)
                            : <small>{lang.noPosts}</small> 
                        }
                    </div>
                : "" }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return({
        items: state.blog.posts.filter(el => el.category && el.category[ownProps.trans('slug')] === ownProps.match.params.category),
        category: state.blog.categories.find(el => el[ownProps.trans('slug')] === ownProps.match.params.category)
    });
};

export default withRouter(useLang(connect(mapStateToProps)(BlogCategory), "blog-category"));