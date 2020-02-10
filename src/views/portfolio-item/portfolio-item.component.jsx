import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ContentRow from "../../components/content/content-row.component";
import useLang from "../../components/useLang/useLang.component";

import firebase from "./../../utils/firebase";
import "./portfolio-item.styles.scss";
import Button from "../../components/button/button.component";

const PortfolioItem = ({match, lang, lang_tag}) => {
    const { project } = match.params;
    lang = lang[lang_tag];
    const [projectData, setProjectData] = useState({});

    useEffect(() => {
        const db = firebase.firestore();
        const fn = async () => {
            const postRef = await db.collection("items").where("url", "==", project).limit(1).get();
            if (!postRef.empty) {
                const data = postRef.docs[0].data();
                if (data.testimonial) {
                    const testimonial = await data.testimonial.get(); 
                    data.testimonial = testimonial.data();
                }
                setProjectData(data);
            } else {
                setProjectData({error: true});
            }
        };
        fn();
    }, ["*"]);

    return(
        <div className="portfolio-item-page">
            {
                projectData && !projectData.error ?
                <div className="container">
                        <ContentRow contentSide="right" title={projectData.name} images={projectData.images} imagesPath={`folio/${projectData.url}`}>
                            <p className="portfolio-item-page__intro">{projectData["intro_"+lang_tag]}</p>
                            {
                                projectData.tags ?
                                    <p className="portfolio-item-page__tags">{lang.tags}:&nbsp;
                                        {
                                            projectData.tags.map((tag) => 
                                                <Link key={tag} className="portfolio-item-page__tag" to="/">{tag}</Link>
                                            )
                                        }
                                    </p>
                                : ""
                            }
                            <Button text={lang.demo} modifier="purple"/>
                            <Button text={lang.live} modifier="pink"/>
                        </ContentRow>
                        {
                            projectData["desc_"+lang_tag] && projectData.images ?
                                <ContentRow title={lang.description} vector={require(`../../assets/img/folio/${projectData.url}/${projectData.images[0]}`)}>
                                    <p>{projectData["desc_"+lang_tag]}</p>
                                </ContentRow>
                            : ""
                        }
                        {
                            projectData.testimonial && projectData.images ?
                                <ContentRow title={lang.testimonial} contentSide="right" vector={require(`../../assets/img/folio/${projectData.url}/${projectData.images[1]}`)}>
                                    <p className="portfolio-item-page__testimonial-content">{projectData.testimonial["content_"+lang_tag]}</p>
                                    <strong className="portfolio-item-page__testimonial-author">{projectData.testimonial.author}</strong>
                                    <small className="portfolio-item-page__testimonial-author-title">{projectData.testimonial["author_title_"+lang_tag]}</small>
                                </ContentRow>
                            : ""
                        }
                    </div>
                : "" 
            }
        </div>
    );
}

export default useLang(PortfolioItem, "portfolio-item", "views");