import React, {useEffect} from "react";
import { connect } from "react-redux";


import { postsFetch } from "./../../redux/blog/blog.actions";
import { dynamicSort } from './../../utils/functions.js';

import BlogItem from "./../blog-item/blog-item.component";

import "./blog-newest.styles.scss";

const BlogNewest = ({items, postsFetch}) => {

    useEffect(() => {
        postsFetch();
    }, ["*"]);

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

const mapDispatchToProps = ( dispatch ) => ({
    postsFetch: () => dispatch(postsFetch())
});

const mapStateToProps = (state) => ({
    items: state.blog.posts.sort(dynamicSort("-created_at")).slice(0, 3)
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogNewest);