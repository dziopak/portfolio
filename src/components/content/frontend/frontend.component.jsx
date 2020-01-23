import React from "react";
import { useParams } from "react-router-dom";

import stock1 from "./../../../assets/vectors/services-1.svg";
import Button from "../../button/button.component";

import pl from "./lang/pl.json";
import en from "./lang/en.json";

import "./frontend.styles.scss";

const FrontendServices = () => {
    let langData = {
        pl,
        en
    }
    let {lang} = useParams();
    lang = langData[lang];
    langData = undefined;
    
    return (
        <div className="frontend row">
            <div className="frontend__col col">
                <h3 className="content-tab__sub-title">{lang.title}</h3>
                <p><strong>Sed ut perspiciatis iste natus error sit voluptatem accusantium.</strong><br/>
                Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis:</p>
                <p><i>"Et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."</i></p>
                <p><strong>Sed quia non numquam eius modi tempora incidunt.</strong><br/>
                Ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in?</p>
            </div>
            <div className="frontend__col col">
                <img className="frontend__img" src={stock1} alt="Webdesign" />
            </div>
        </div>
    );
}

export default FrontendServices;