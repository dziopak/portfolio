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
                    <ContentRow contentSide="right" vector={IntroVector} title="Cześć!">
                        <p>Cześć! Mam na imię Michał i jestem młodym, pełnym pasji web developerem i web designerem. Oferuję kompleksowe usługi w zakresie tworzenia stron i aplikacji internetowych, zaczynając od projektowania graficznego, aż po programowanie Back-End. Aby dowiedzieć się czegoś więcej na temat mojej osoby, przejdź do zakładki "O mnie"!</p>
                        <Button url={`/${lang_tag}/${lang.routes.blog}`} modifier="purple" text={"Mój blog"} />
                        <Button url={`/${lang_tag}/${lang.routes.aboutMe}`} modifier="pink" text={"O mnie"} />
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