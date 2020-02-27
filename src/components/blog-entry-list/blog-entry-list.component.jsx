import React from "react";
import { connect } from "react-redux";

import BlogSidebar from "./../blog-sidebar/blog-sidebar.component";
import BlogItem from "./../blog-item/blog-item.component";
import useLang from "./../useLang/useLang.component";

import "./blog-entry-list.styles.scss";

const BlogEntryList = ({lang, lang_tag, posts}) => {
    lang = lang[lang_tag];

    return(
        <div className="blog-entry-list">
            <BlogSidebar />
            <div className="blog-entry-list__main">
                {
                    posts ?
                        posts.map((el) => 
                            <BlogItem data={el}/>
                        ) 
                    : ""
                }
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    posts: state.blog.posts
});

export default connect(mapStateToProps)(useLang(BlogEntryList, "blog-entry-list"));