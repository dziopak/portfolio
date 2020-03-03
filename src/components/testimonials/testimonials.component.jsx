import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { trans } from "./../../utils/functions";
import { testimonialsFetch } from "./../../redux/testimonials/testimonials.actions";

import "./testimonials.styles.scss";

const Testimonials = ({ testimonialsFetch, items }) => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
        var max = items.length;
        var rand = Math.floor(Math.random() * max);
        setCurrentTestimonial(rand);  
        resizeTestimonial();
    }, [items]);
    
    useEffect(() => {
        testimonialsFetch();
    }, ["*"]);
    
    let { lang } = useParams();

    return (
        <div className="testimonials">
            {
                items && items[0] ? 
                    <div className="container row">
                        <div className="col">
                            <div className="testimonials__img-container" style={{background: items[currentTestimonial].background_color}}>
                                {
                                    items[currentTestimonial] && items[currentTestimonial].thumbnail ?
                                        <img className="testimonials__img" src={`http://dziopak-cms.hol.es/images/${items[currentTestimonial].thumbnail.path}`} alt="Author" />
                                    : ""
                                }
                            </div>
                        </div>
                        <div className="col">
                            <div className="testimonials__container">
                                <p className="testimonials__text">
                                &bdquo;{items[currentTestimonial][trans(lang, 'content')]}&rdquo;
                                </p>
                                <strong className="testimonials__author">{items[currentTestimonial].author}</strong><br/>
                                <small className="testimonials__author-title">{items[currentTestimonial][trans(lang, "author_title")]}</small>
                            </div>
                        </div>
                    </div>
                : ""
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    items: state.testimonials.items
});

const mapDispatchToProps = (dispatch) => ({
    testimonialsFetch: () => dispatch(testimonialsFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);