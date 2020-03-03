import React from "react";
import { formatDate } from "./../../utils/functions.js";
import { Link } from "react-router-dom";

import useLang from "./../useLang/useLang.component";
import Button from "./../button/button.component";

import "./blog-item.styles.scss";

const BlogItem = ({lang, lang_tag, type, data}) => {
    lang = lang[lang_tag];

    const trans = (varName) => {
        if (lang_tag !== "en") {
            return varName+'_'+lang_tag;
        } else {
            return varName;
        }
    }

    return(
        <div className={`blog-item ${type === "block" ? "blog-item--block col" : "blog-item--main"}`}>
            { data ?
                <div>
                    { type !== "block" && data['thumbnail'] ?
                        <img src={'http://dziopak-cms.hol.es/images/'+data['thumbnail']['path']} width="100" style={{ float: "left", marginRight: "20px" }} alt={data.name} />
                    : "" }
                    <h4 className="blog-item__title">{data[trans('name')]}</h4>
                    <span className="blog-item__details">Created at {data['created_at']}</span>
                    <p className="blog-item__description">
                        {data[trans('excerpt')]}<br/>
                        
                        <span className="blog-item__details">
                            {
                                data['category'] && data['category']['name'] ? 
                                <span>
                                    <strong className="blog-item__details-bold">{lang.categories}: </strong>  
                                    <Link to={`/blog/${lang_tag}/${lang.category}/${data['category']['slug']}`}>{data['category']['name']}</Link>
                                </span>
                                : ""
                            }
                        </span>
                    </p>
                    <Button url={`/${lang_tag}/blog/${data[trans('slug')]}`} text={lang.button} modifier={type === "block" ? "purple" : "pink"} />
                </div>
            :
                null
            }
        </div>    
    );
}

export default useLang(BlogItem, "blog-item");