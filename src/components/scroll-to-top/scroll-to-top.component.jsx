import React, {useEffect, useState} from "react";
import "./scroll-to-top.styles.scss";

const ScrollToTop = () => {
    const [visibility, setVisibility] = useState("0");
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > document.querySelector(".page").offsetTop) {
                if (visibility === "0")
                setVisibility("1");
            } else {
                if (visibility === "1")
                setVisibility("0");
            }
        }
    });

    const scroll = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div onClick={scroll} style={{opacity: visibility}} className="scroll-to-top">&#9652;</div>
    );
}

export default ScrollToTop;