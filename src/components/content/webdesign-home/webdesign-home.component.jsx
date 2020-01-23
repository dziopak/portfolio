import React from "react";
import stock1 from "./../../../assets/img/stock1.jpg";
import Button from "./../../button/button.component";

import "./webdesign-home.styles.scss";


const WebdesignHome = () => {
    return (
        <div className="webdesign-home">
                <img className="content-tab__img" src={stock1} alt="Webdesign" />
                <h3 className="content-tab__sub-title">Web Design</h3>

                <p className="content-tab__text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                
                <Button url="/" text="Learn more" modifier="purple" />
        </div>
    );
}

export default WebdesignHome;