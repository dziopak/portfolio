import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import useLang from "./../useLang/useLang.component";

import "./blog-entry.styles.scss";

const BlogEntry = ({match, lang, lang_tag, trans, postData}) => {
    lang = lang[lang_tag];
    
    useEffect(() => {
        console.log();
    }, ["*"]);

    return(
        <div className="blog-entry">
            { postData ?
                <div>
                    <h3 className="blog-entry__title">{postData[trans('name')]}</h3>
                    <span className="blog-item__details">{lang.createdAt} {postData['created_at']}</span>
                     <div className="blog-entry__content">
                        <div dangerouslySetInnerHTML={{__html: postData[trans('content')]}} />
                    </div>
                    {
                        postData['category'] ?
                            <span className="blog-item__details">
                                <strong className="blog-item__details-bold">{lang.categories}: </strong>
                                <Link to={`/blog/${lang_tag}/${lang.category}/${postData['category']['slug']}`}>{postData.category.name}</Link>
                            </span>
                        : ""
                    }
                </div>
            :
                ""
            }
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    postData: state.blog.posts.find(el => el[ownProps.trans('slug')] === ownProps.match.params.postUrl)
});

export default useLang(connect(mapStateToProps)(BlogEntry), "blog-entry");