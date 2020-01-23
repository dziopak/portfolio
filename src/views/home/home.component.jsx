import React from "react";

import Introduction from "../../components/content/introduction/introduction.component";
import ServicesHome from "../../components/services/services-home.component";
import PortfolioHome from "../../components/portfolio/portfolio-home.component";

import "./home.styles.scss";
import BlogNewest from "../../components/blog-newest/blog-newest.component";
import Loaded from "../../components/loaded/loaded.component";
import ButtonsCarousel from "../../components/buttons-carousel/buttons-carousel.component";

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="container">
                <Introduction/>
                <hr/>
                <ServicesHome />
                <hr/>
                <PortfolioHome />
            </div>
            <BlogNewest />
            {/* <ButtonsCarousel/> */}
            <Loaded />
        </div>
    );
}

export default HomePage