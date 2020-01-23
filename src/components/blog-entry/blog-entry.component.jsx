import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "./../../utils/functions.js";

import useLang from "./../useLang/useLang.component";
import firebase from './../../utils/firebase.js';

import "./blog-entry.styles.scss";

const BlogEntry = ({match, lang, lang_tag}) => {
    lang = lang[lang_tag];
    const { postUrl } = match.params;
    const [postData, setPostData] = useState();

    useEffect(() => {
        const db = firebase.firestore();
        const fn = async () => {
            const postRef = await db.collection("blog_posts").where(`url_${lang_tag}`, "==", postUrl).limit(1).get();
            let newState = postRef.docs[0].data();
            setPostData(newState);
        };
        fn();
    }, ["*"]);


    return(
        <div className="blog-entry">
            { postData && postData.date ?
                <div>
                    <h3 className="blog-entry__title">{postData['title_'+lang_tag]}</h3>
                    <span className="blog-item__details">{lang.createdAt} {formatDate(postData.date.toDate())}</span>
                    <div className="blog-entry__content">
                        <div dangerouslySetInnerHTML={{__html: postData['content_'+lang_tag]}} />
                    </div>
                    <span className="blog-item__details">
                        <strong className="blog-item__details-bold">{lang.categories}: </strong>
                        {postData.categories ?
                            postData.categories.map((el, index) => 
                                <span key={index}>
                                    { el.name ?
                                        <Link to={`/blog/${lang_tag}/${lang.category}/${el.url}`}>{el.name}</Link>
                                        :
                                        <Link to={`/blog/${lang_tag}/${lang.category}/${el["url_"+lang_tag]}`}>{el["name_"+lang_tag]}</Link> }
                                    { (index + 1) !== postData.categories.length ? ", " : "" }
                                </span>
                            )
                        : ""}
                    </span>
                </div>
            :
                ""
            }
        </div>
    );
}

export default useLang(BlogEntry, "blog-entry");