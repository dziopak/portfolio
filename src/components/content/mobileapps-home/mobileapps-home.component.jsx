import React from "react";
import { useParams } from "react-router-dom";

import stock1 from "./../../../assets/vectors/mobile2.svg";
import Button from "../../button/button.component";

import pl from "./lang/pl.json";
import en from "./lang/en.json";

const MobileappsHome = () => {
    let langData = {
        pl,
        en
    }
    let {lang} = useParams();
    lang = langData[lang];
    langData = undefined;

    return (
        <div className="mobileapps-home row">
            <div className="mobileapps-home__col col">
                <img style={{maxWidth: "80%", padding: "40px"}} className="mobileapps-home__img valign" src={stock1} alt="Webdesign" />
            </div>
            
            <div className="mobileapps-home__col col">
                <h3 className="content-tab__sub-title">{lang.title}</h3>
                <p><strong>Sed ut perspiciatis iste natus error sit voluptatem accusantium.</strong><br/>
                Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis:</p>
                <p><i>"Et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."</i></p>
            </div>
        </div>
    );
}

export default MobileappsHome;