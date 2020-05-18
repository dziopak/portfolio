import React, { useEffect} from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { selectRandom } from "../../redux/testimonials/testimonials.selectors";
import { testimonialsFetch } from "./../../redux/testimonials/testimonials.actions";
import { trans } from "./../../utils/functions";

import "./testimonials.styles.scss";

const Testimonials = ({ testimonialsFetch, testimonial }) => {

    const resizeTestimonial = () => {
        if (document.querySelector(".testimonials__img-container")) {
            const height = document.querySelector(".testimonials__container").offsetHeight;
            document.querySelector(".testimonials__img-container").style.minHeight = height+"px";
            
            if (!document.querySelector(".testimonials__img-container").style.minHeight || document.querySelector(".testimonials__img-container").style.minHeight === "0px") {
                setTimeout(() => {
                    resizeTestimonial();
                }, 1000);
            }

        }
    }

    useEffect(() => {
        if (!testimonial) {
            testimonialsFetch();
        }
    }, ["*"]);
    
    useEffect(() => {
        resizeTestimonial();
    }, [testimonial]);
    
    let { lang } = useParams();

    return (
        <div className="testimonials">
            {
                testimonial ? 
                    <div className="container row">
                        <div className="col">
                            <div className="testimonials__img-container" style={{background: testimonial.background_color}}>
                                {
                                    testimonial.thumbnail ?
                                        <img className="testimonials__img" src={`http://dziopak-cms.hol.es/images/${testimonial.thumbnail.path}`} alt="Author" />
                                    : ""
                                }
                            </div>
                        </div>
                        <div className="col">
                            <div className="testimonials__container">
                                <p className="testimonials__text">
                                &bdquo;{testimonial[trans(lang, 'content')]}&rdquo;
                                </p>
                                <strong className="testimonials__author">{testimonial.author}</strong><br/>
                                <small className="testimonials__author-title">{testimonial[trans(lang, "author_title")]}</small>
                            </div>
                        </div>
                    </div>
                : ""
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    testimonial: selectRandom
});

const mapDispatchToProps = (dispatch) => ({
    testimonialsFetch: () => dispatch(testimonialsFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);