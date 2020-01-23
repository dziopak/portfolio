import React, {useState, useEffect} from "react";
import firebase from './../../utils/firebase.js';

import BlogItem from "./../blog-item/blog-item.component";

import "./blog-newest.styles.scss";

const BlogNewest = () => {
    const [items, setItems] = useState();

    useEffect(() => {
        const db = firebase.firestore();
        const fn = async () => {
            const itemsRef = await db.collection("blog_posts").orderBy("date").limit(3).get();
            const newState = [];
            itemsRef.forEach((doc) => {
                newState.push(doc.data());
            });
            setItems(newState);
        };
        fn();
    },["*"]);
    
    return(
        <div className="blog-newest section">
            <div className="blog-newest__container container row">
                {items ?
                    items.map((el, index) => <BlogItem key={index} data={el} type="block" /> )
                :
                    ""
                }
                <BlogItem type="block" />
                <BlogItem type="block" />
            </div>
        </div>
    );
}

export default BlogNewest;