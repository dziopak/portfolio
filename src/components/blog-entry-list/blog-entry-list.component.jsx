import React, {useState, useEffect} from "react";
import firebase from './../../utils/firebase.js';

import BlogSidebar from "./../blog-sidebar/blog-sidebar.component";
import BlogItem from "./../blog-item/blog-item.component";
import useLang from "./../useLang/useLang.component";

import "./blog-entry-list.styles.scss";

const BlogEntryList = ({match, lang, lang_tag, blogState}) => {
    lang = lang[lang_tag];
    const [items, setItems] = useState();

    useEffect(() => {
        const db = firebase.firestore();
        const fn = async () => {
            const itemsRef = await db.collection("blog_posts").orderBy("date").get();
            const newState = [];
            itemsRef.forEach((doc) => {
                newState.push(doc.data());
            });
            setItems(newState);
        };
        fn();
    },["*"]);

    return(
        <div className="blog-entry-list">
            <BlogSidebar categories={blogState.categories} />
            <div className="blog-entry-list__main">
                {
                    items ?
                        items.map((el) => 
                            <BlogItem data={el}/>
                        ) 
                    : ""
                }
            </div>
        </div>
    );
}

export default useLang(BlogEntryList, "blog-entry-list");