import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const useLang = (WrappedComponent, path, type, routeLangs) => {
    const HOC = loadingProps => {
        const { lang } = useParams();
        const [langState, setLangState] = useState({
            langData: {}
        });

        useEffect(() => {
            let lang_pl;
            let lang_en;
            let route_pl;
            let route_en;

            if (routeLangs === true) {
                route_pl = import(`./../../lang/routes/pl.json`);
                route_en = import(`./../../lang/routes/en.json`);
            }

            if (type) {
                lang_pl = import(`./../../${type}/${path}/lang/pl.json`);
                lang_en = import(`./../../${type}/${path}/lang/en.json`);
            } else {
                lang_pl = import(`./../${path}/lang/pl.json`);
                lang_en = import(`./../${path}/lang/en.json`);
            }

            let langData;
            lang_pl.then((langs_pl) => {
                lang_en.then((langs_en) => {
                    langData = {
                        pl: langs_pl.default,
                        en: langs_en.default
                    }
                    if (routeLangs === true) {
                        route_pl.then((routes_pl) => {
                            route_en.then((routes_en) => {
                                langData = {
                                    pl: {
                                        ...langData.pl,
                                        routes: routes_pl.default
                                    },
                                    en: {
                                        ...langData.en,
                                        routes: routes_en.default
                                    }
                                }
                                setLangState({
                                    ...langState,
                                    langData
                                });
                            });
                        });
                    } else {
                        setLangState({
                            ...langState,
                            langData
                        });
                    }
                    
                    
                });
            });
        }, []);
        
        if (langState.langData[lang]) {
            return <WrappedComponent lang={langState.langData} lang_tag={lang} {...loadingProps} />
        } else {
            return <WrappedComponent lang={{pl: {}, en: {}}} lang_tag={lang} {...loadingProps} />
        }
    }
        
  return HOC;
};

export default useLang;