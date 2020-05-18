import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategoryPosts, selectCategory } from "../../redux/blog/blog.selectors";
import BlogItem from "./../blog-item/blog-item.component";
import BlogSidebar from "./../blog-sidebar/blog-sidebar.component";
import useLang from "./../useLang/useLang.component";

import "./blog-category.styles.scss";

const BlogCategory = ({lang, lang_tag, trans, items, category, match}) => {
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

const mapStateToProps = (state, ownProps) => createStructuredSelector({
    items: selectCategoryPosts(ownProps.match.params.category),
    category: selectCategory(ownProps.match.params.category)
});

export default withRouter(useLang(connect(mapStateToProps)(BlogCategory), "blog-category"));