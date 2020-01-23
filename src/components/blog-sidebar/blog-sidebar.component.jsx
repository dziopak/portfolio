import React from "react";
import { Link, withRouter } from "react-router-dom";


import useLang from "./../useLang/useLang.component";

import "./blog-sidebar.styles.scss";

const BlogSidebar = ({match, lang, lang_tag, categories}) => {
    lang = lang[lang_tag];
    

    return(
        <div className="blog-sidebar">
            <ul className="blog-sidebar__nav">
                <li className="blog-sidebar__nav-item blog-sidebar__nav-item--active"><Link to="/">{lang.allPosts}</Link></li>
                { categories ?
                    categories.map((el, index) =>
                        <li key={index} className="blog-sidebar__nav-item"> 
                            {el.name ?
                                <Link to={`/${lang_tag}/blog/${lang.category}/${el.url}`}>{el.name}</Link>
                                :
                                <Link to={`/${lang_tag}/blog/${lang.category}/${el["url_"+lang_tag]}`}>{el["name_"+lang_tag]}</Link>
                            }
                        </li>
                    )
                : "" }
            </ul>
        </div>
    );
}

export default withRouter(useLang(BlogSidebar, "blog-entry-list"));