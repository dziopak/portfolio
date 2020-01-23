import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import firebase from './../../utils/firebase.js';
import "./testimonials.styles.scss";

const Testimonials = () => {
    const [testimonialsData, setTestimonialsData ] = useState({
        items: [],
        testimonialId: "",
        current: ""
    });

    useEffect(() => {   
        if (document.querySelector(".testimonials__img-container")) {
            const height = document.querySelector(".testimonials__container").offsetHeight;
            document.querySelector(".testimonials__img-container").style.minHeight = height+"px";   
        }
    }, [testimonialsData]);

    useEffect(() => {
        const fn = async () => {
            const db = firebase.firestore();
            const itemsRef = await db.collection("testimonials").get();
            const newState = [];
            
            itemsRef.forEach((doc) => {
                newState.push(doc.data());
            });

            const rand_id = Math.floor(Math.random() * newState.length);
            const rand = newState[rand_id];

            setTestimonialsData({
                ...testimonialsData,
                items: newState,
                testimonialId: rand_id,
                current: rand
            });
        };
        fn();
    }, []);

    let { lang } = useParams();

    return (
        <div className="testimonials">
            {
                testimonialsData.current ? 
                    <div className="container row">
                        <div className="col">
                            <div className="testimonials__img-container" style={{background: testimonialsData.current.background}}>
                                <img className="testimonials__img" src={testimonialsData.current.img} alt="Author" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="testimonials__container">
                                <p className="testimonials__text">
                                &bdquo;{testimonialsData.current["content_"+lang]}&rdquo;
                                </p>
                                <strong className="testimonials__author">{testimonialsData.current.author}</strong><br/>
                                <small className="testimonials__author-title">{testimonialsData.current["author_title_"+lang]}</small>
                            </div>
                        </div>
                    </div>
                : ""
            }
        </div>
    );
}

export default Testimonials;