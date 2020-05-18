import React from "react";

import AboutMe from "../../components/about-me/about-me.component";
import Button from "../../components/button/button.component";
import ContentRow from "../../components/content/content-row.component";
import useLang from "../../components/useLang/useLang.component";
import Carousel from "../../components/carousel/carousel.component"
import CarouselItem from "../../components/carousel-item/carousel-item.component";
import DescriptionBox from "../../components/description-box/description-box.component";

import MobileVector from "./../../assets/vectors/mobile.svg"
import GoalsVector from "./../../assets/vectors/about-me-goals.svg";
import SnakeVector from "./../../assets/vectors/snake.svg";

import "./about.styles.scss";

const AboutMePage = ({match, history, lang, lang_tag}) => {
    lang = lang[lang_tag];
    return (
        <div className="about-page">
            <div className="container">
                <AboutMe />       
                <DescriptionBox>
                <h3 className="description-box__title description-box__title--centered">Kim jestem?</h3>
                <p className="description-box__text text-short">
                    Mam 25 lat i urodziłem się w Rzeszowie. Jestem freelancerem zajmującym się głównie programowaniem Front-End. Oferuję jednak kompleksowe usługi w zakresie tworzenia stron internetowych - począwszy od projektowania graficznego, tworzenia stron i szablonów WordPress, pisania wtyczek i rozszereń przeglądarkowych, aż po programowanie Back-End'u.
                </p>
                </DescriptionBox>
                <ContentRow vector={MobileVector} title={lang.howItStarted_title}>
                    <p>{lang.howItStarted_text}</p>
                </ContentRow>

                { lang.routes ? 
                    <ContentRow contentSide="right" vector={GoalsVector} title={lang.mySkills_title}>
                        <p>{lang.mySkills_text}</p>
                        <Button url={`/${lang_tag}/${lang.routes.portfolio}`} modifier="purple" text="Portfolio" />
                        <Button url={`/${lang_tag}/${lang.routes.services}`} modifier="pink" text="Usługi" />
                    </ContentRow>
                : "" }

            <DescriptionBox>
                <Carousel>
                    <CarouselItem
                        img={'https://udemy-certificate.s3.amazonaws.com/image/UC-JPP5A9UP.jpg?l=null'}
                        title="JavaScript / CSS"
                        text="Zaawansowane projekty w CSS i JavaScript: NPM, Webpack, GSAP, Flexbox, CSS Grid, Animacje, RWD."
                        />
                    <CarouselItem
                        img={'https://udemy-certificate.s3.amazonaws.com/image/UC-FMLZGMX3.jpg?l=null'}
                        title="React / Redux"
                        text="Wprowadzenie do programowania przy pomocy frameworka React: Redux / React Hooks / Firebase / GraphQL"
                        />
                    <CarouselItem
                        img={"https://udemy-certificate.s3.amazonaws.com/image/UC-Y7BES3OG.jpg?l=en_US"}
                        title="Web Design / Photoshop"
                        text="Kurs przedstawiający kluczowe koncepty projektowania stron internetowych oraz fundamenty pracy jako freelancer."
                    />
                    <CarouselItem
                        img={"https://udemy-certificate.s3.amazonaws.com/image/UC-79b15f4f-c6ae-4bc3-9e08-5ebd4f0b9510.jpg?l=null"}
                        title="Adobe Illustrator"
                        text="Podstawy pracy z oprogramowaniem do edycji grafiki wektorowej Adobe Illustrator."
                    />
                    <CarouselItem
                        img={"https://lh3.google.com/u/0/d/1qYNAC6ELmgY6IzsSCeqabDW6rQVF0Tl5=w1366-h625-iv1"}
                        title="Responsive Web Design"
                        text="Podstawy tworzenia responsywnych stron internetowych / nowości w HTML5 i CSS3 / Flexbox & CSS Grid."
                    />
                    <CarouselItem
                        img={"https://lh3.google.com/u/0/d/1IMf8g-6n64e-juQW9UXvbjd1x6NWUxEH=w1366-h625-iv1"}
                        title="JavaScript / Algorytmika"
                        // eslint-disable-next-line no-script-url
                        text="Javascript: Algorytmy i struktury danych - podstawy JavaScript, wprowadzenie do ES6, wyrażenia regularne."
                    />
                </Carousel>
            </DescriptionBox>

                { lang.routes ? 
                    <ContentRow vector={SnakeVector} title={lang.myInterests_title}>
                        <p>{lang.myInterests_text}</p>
                        <Button url={`/${lang_tag}/${lang.routes.blog}`} modifier="purple" text="Blog" />
                    </ContentRow>
                : "" }
            
        </div>
    </div>
    );
}

export default useLang(AboutMePage, "about", "views", true);