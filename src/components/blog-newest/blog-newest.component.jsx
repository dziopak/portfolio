import React, {useEffect} from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { postsFetch } from "./../../redux/blog/blog.actions";
import { selectNewestPosts } from "./../../redux/blog/blog.selectors";

import BlogItem from "./../blog-item/blog-item.component";

import "./blog-newest.styles.scss";

const BlogNewest = ({posts, postsFetch}) => {

    useEffect(() => {
        if (!posts || posts.length < 3) {
            postsFetch();
        }
    }, ["*"]);

    return(
        <div className="blog-newest section">
            <div className="blog-newest__container container row">
                {posts ?
                    posts.map((el, index) => <BlogItem key={index} data={el} type="block" /> )
                :
                    ""
                }
            </div>
        </div>
    );
}

const mapDispatchToProps = ( dispatch ) => ({
    postsFetch: () => dispatch(postsFetch())
});

const mapStateToProps = createStructuredSelector({
    posts: selectNewestPosts
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogNewest);