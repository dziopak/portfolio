import React from "react";

import Button from "../../components/button/button.component";
import ServicesHome from "../../components/services/services-home.component";
import PortfolioHome from "../../components/portfolio/portfolio-home.component";
import BlogNewest from "../../components/blog-newest/blog-newest.component";
import Loaded from "../../components/loaded/loaded.component";
import ContentRow from "../../components/content/content-row.component";
import useLang from "../../components/useLang/useLang.component";


import IntroVector from "../../assets/vectors/about-me.svg";

import "./home.styles.scss";

const HomePage = ({lang, lang_tag}) => {
    lang = lang[lang_tag];
    return (
        <div className="homepage">
            <div className="container">
                { lang && lang.introduction ?
                    <ContentRow contentSide="right" vector={IntroVector} title={lang.introduction.title}>
                        <p>{lang.introduction.content}</p>
                        <Button url={`/${lang_tag}/${lang.routes.blog}`} modifier="purple" text={lang.introduction.aboutMe} />
                        <Button url={`/${lang_tag}/${lang.routes.aboutMe}`} modifier="pink" text={lang.introduction.blog} />
                    </ContentRow>
                    : "" }
                <hr/>
                <ServicesHome />
                <hr/>
                <PortfolioHome />
            </div>
            <BlogNewest />
            <Loaded />
        </div>
    );
}

export default useLang(HomePage, "home", "views", true);