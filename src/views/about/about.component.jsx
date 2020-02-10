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
                        title="Advanced JS & CSS"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    <CarouselItem
                        img={'https://udemy-certificate.s3.amazonaws.com/image/UC-FMLZGMX3.jpg?l=null'}
                        title="React / Redux"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    <CarouselItem
                        img={"https://udemy-certificate.s3.amazonaws.com/image/UC-Y7BES3OG.jpg?l=en_US"}
                        title="Web Design / Photoshop"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <CarouselItem
                        img={"https://udemy-certificate.s3.amazonaws.com/image/UC-79b15f4f-c6ae-4bc3-9e08-5ebd4f0b9510.jpg?l=null"}
                        title="Adobe Illustrator"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <CarouselItem
                        img={"https://lh3.google.com/u/0/d/1qYNAC6ELmgY6IzsSCeqabDW6rQVF0Tl5=w1366-h625-iv1"}
                        title="Responsive Web Design"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <CarouselItem
                        img={"https://lh3.google.com/u/0/d/1IMf8g-6n64e-juQW9UXvbjd1x6NWUxEH=w1366-h625-iv1"}
                        title="JS / Algorithms / Data Structures"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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