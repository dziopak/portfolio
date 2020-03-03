import React from "react";
import vector from "./../../../assets/vectors/web-design-home.svg";
import Button from "./../../button/button.component";

import "./webdesign-home.styles.scss";


const WebdesignHome = () => {
    return (
        <div className="web-design row">
            <div className="col">
                <img className="content-tab__img content-tab__img--bg" src={vector} alt="Web Design" />
            </div>
            <div className="col">
                <div class="valign">
                    <h3 className="content-tab__sub-title">Web Design</h3>
                    <p className="content-tab__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam. Voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <Button url="/" text="Czytaj dalej" modifier="purple" />
                </div>
            </div>
        </div>
    );
}

export default WebdesignHome;