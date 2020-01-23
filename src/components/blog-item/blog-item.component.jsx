import React from "react";
import { formatDate } from "./../../utils/functions.js";
import { Link } from "react-router-dom";

import useLang from "./../useLang/useLang.component";
import Button from "./../button/button.component";

import "./blog-item.styles.scss";

const BlogItem = ({lang, lang_tag, type, data}) => {
    lang = lang[lang_tag];
    return(
        <div className={`blog-item ${type === "block" ? "blog-item--block col" : "blog-item--main"}`}>
            { data ?
                <div>
                    <h4 className="blog-item__title">{data['title_'+lang_tag]}</h4>
                    <span className="blog-item__details">Created at {formatDate(data.date.toDate())}</span>
                    <p className="blog-item__description">
                        {data['excerpt_'+lang_tag]}<br/>
                        
                        <span className="blog-item__details">
                            <strong className="blog-item__details-bold">{lang.categories}: </strong>
                            { data.categories ?
                                data.categories.map((el, index) => 
                                    <span key={index}>
                                        { el.name ?
                                            <Link to={`/blog/${lang_tag}/${lang.category}/${el.url}`}>{el.name}</Link>
                                            :
                                            <Link to={`/blog/${lang_tag}/${lang.category}/${el["url_"+lang_tag]}`}>{el["name_"+lang_tag]}</Link> }
                                        { (index + 1) !== data.categories.length ? ", " : "" }
                                    </span>
                                )
                            : "" }
                            </span>
                    </p>
                    <Button url={`/${lang_tag}/blog/${data["url_"+lang_tag]}`} text={lang.button} modifier={type === "block" ? "purple" : "pink"} />
                </div>
            :
                <div>
                    <h4 className="blog-item__title">Lorem ipsum</h4>
                    <span className="blog-item__details">Created at 4:30 PM, 18.12.2019</span>
                    <p className="blog-item__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
                        <span className="blog-item__details"><strong className="blog-item__details-bold">Categories:</strong> Front-End, CSS Tricks</span><br/>
                    </p>
                    <Button url="/" text={lang.button} modifier={type === "block" ? "purple" : "pink"} />
                </div>
            }
        </div>    
    );
}

export default useLang(BlogItem, "blog-item");