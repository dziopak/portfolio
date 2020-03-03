import React, {lazy, Suspense, useEffect} from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { setLangTag } from "../../redux/app/app.actions";

import TopNav from "./../top-nav/top-nav.component";
import Hero from "./../hero/hero.component";
import Testimonials from "./../testimonials/testimonials.component";
import Footer from "./../footer/footer.component";
import ContactBar from "./../contact-bar/contact-bar.component";
import ScrollToTop from "./../scroll-to-top/scroll-to-top.component";
import Loading from "../loading/loading.component";
import ButtonsCarousel from "../buttons-carousel/buttons-carousel.component";

import pl from "./lang/pl.json";
import en from "./lang/en.json";
import route_pl from "./../../lang/routes/pl.json";
import route_en from "./../../lang/routes/en.json";

import "./layout.styles.scss";

const HomePage = lazy(() => import("./../../views/home/home.component"));
const AboutMePage = lazy(() => import("./../../views/about/about.component"));
const PortfolioPage = lazy(() => import("./../../views/portfolio/portfolio.component"));
const PortfolioItemPage = lazy(() => import("./../../views/portfolio-item/portfolio-item.component"));
const ServicesPage = lazy(() => import("./../../views/services/services.component"));
const BlogPage = lazy(() => import("./../../views/blog/blog.component"));
const ContactPage = lazy(() => import("./../../views/contact/contact.component"));

const Layout = ({match, setLangTag}) => {
    let {lang} = useParams();
    
    useEffect(() => {
      setLangTag(lang);
    }, ["*"]);
    
    let langData = {
        pl: {
            ...pl,
            routes: route_pl
        },
        en: {
            ...en,
            routes: route_en
        }
    }
    
    const { path } = match;

    lang = langData[lang];
    langData = undefined;

    return(
        <div>
            <Suspense callback={() => <Loading />}>
                <TopNav/>
                <Hero />
                <div className="page">
                    <Switch>
                        <Route path={`${path}`} exact component={HomePage} />
                        <Route path={`${path}${lang.routes.aboutMe}`} exact component={AboutMePage} />
                        <Route path={`${path}${lang.routes.portfolio}`} exact component={PortfolioPage} />
                        <Route path={`${path}${lang.routes.portfolio}/${lang.routes.project}/:project`} exact component={PortfolioItemPage} />
                        <Route path={`${path}${lang.routes.services}`} exact component={ServicesPage} />
                        <Route path={`${path}${lang.routes.blog}`} component={BlogPage} />
                        <Route path={`${path}${lang.routes.contact}`} exact component={ContactPage} />
                    </Switch>
                </div>
                <Testimonials/>
                <ContactBar />
                <ScrollToTop/>
                <ButtonsCarousel/>
                <Footer />
            </Suspense>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setLangTag: langTag => dispatch(setLangTag(langTag))
});
export default connect(null, mapDispatchToProps)(Layout);
