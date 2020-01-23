import React from "react";

import AboutMe from "../../components/about-me/about-me.component";
import Button from "../../components/button/button.component";
import ContentRow from "../../components/content/content-row.component";
import useLang from "../../components/useLang/useLang.component";

import MobileVector from "./../../assets/vectors/mobile.svg"
import GoalsVector from "./../../assets/vectors/about-me-goals.svg";
import SnakeVector from "./../../assets/vectors/snake.svg";

import WhoAmI from "../../components/content/who-am-i/who-am-i.component";
import "./about.styles.scss";

const AboutMePage = ({match, history, lang, lang_tag}) => {
    lang = lang[lang_tag];
    return (
        <div className="about-page">
            <div className="container">
                <AboutMe />       
                <WhoAmI />
                <ContentRow vector={MobileVector} title={lang.howItStarted_title}>
                    <p>{lang.howItStarted_text}</p>
                </ContentRow>

                <ContentRow contentSide="right" vector={GoalsVector} title={lang.mySkills_title}>
                    <p>{lang.mySkills_text}</p>
                    <Button modifier="purple" text="Portfolio" />
                    <Button modifier="pink" text="Usługi" />
                </ContentRow>

                <ContentRow vector={SnakeVector} title={lang.myInterests_title}>
                    <p>{lang.myInterests_text}</p>
                    <Button modifier="purple" text="Blog" />
                </ContentRow>                
            </div>
        </div>
    );
}

export default useLang(AboutMePage, "about", "views");