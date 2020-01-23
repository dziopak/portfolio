import React from "react";
import "./loading.styles.scss";

const Loading = () => {
    return(
        <div className="loading">
            <img alt="loading" width="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Loading_indicator_circle.svg/1024px-Loading_indicator_circle.svg.png" className="loading__img" />
        </div>
    );
}

export default Loading;