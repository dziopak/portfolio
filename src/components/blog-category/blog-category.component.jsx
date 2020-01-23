import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import firebase from "./../../utils/firebase.js";
import BlogItem from "./../blog-item/blog-item.component";
import BlogSidebar from "./../blog-sidebar/blog-sidebar.component";
import useLang from "./../useLang/useLang.component";

import "./blog-category.styles.scss";

const BlogCategory = ({blogState, match, lang, lang_tag}) => {
    lang = lang[lang_tag];
    
    const [items, setItems] = useState();

    const fn = async () => {
        const db = firebase.firestore();
        const categoryRef = blogState.categories.filter(el => el.url === match.params.category || el["url_"+lang_tag] === match.params.category)[0];
        console.log(categoryRef);
        if (categoryRef) {
            const postRef = await db.collection("blog_posts").where("category_list", "array-contains", categoryRef.id).get();
            const posts = [];
            postRef.forEach((el) => 
                posts.push(el.data())
            );
            setItems(posts);
        }
    };

    useEffect(() => {
        fn();
    },[blogState, match.params.category]);

    return(
        <div className="blog-category">
            <BlogSidebar categories={blogState.categories}/>
            <div className="blog-category__main">
                {blogState ? 
                    items && items.length > 0 ?
                        items.map((data, index) => <BlogItem key={index} data={data} />)
                    : <p>No posts in this category yet.</p> 
                : "" }
            </div>
        </div>
    );
}

export default withRouter(useLang(BlogCategory, "blog-category"));