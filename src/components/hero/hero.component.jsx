import React, { useEffect, useState } from "react";

import HeroImg from "./../../assets/img/hero.png"
import Button from "../button/button.component";
import useLang from "./../useLang/useLang.component";
import TabFocus from "./../tab-focus/tab-focus.component";


import "./hero.styles.scss";

const Hero = ({lang, lang_tag}) => {
    const onFocus = () => {
        setFocus(true);
        // setCloudsCords({
        //     ...cloudsCords,
        //     cloud1: {
        //         ...cloudsCords.cloud1,
        //         left: getPosition(cloudsCords.cloud1.left, cloudsCords.cloud1.speed),
        //     },
        //     cloud2: {
        //         ...cloudsCords.cloud2,
        //         left: getPosition(cloudsCords.cloud2.left, cloudsCords.cloud2.speed),
        //     },
        //     cloud3: {
        //         ...cloudsCords.cloud3,
        //         left: getPosition(cloudsCords.cloud3.left, cloudsCords.cloud3.speed),
        //     },
        //     cloud4: {
        //         ...cloudsCords.cloud4,
        //         left: getPosition(cloudsCords.cloud4.left, cloudsCords.cloud4.speed),
        //     },
        //     birds1: {
        //         ...cloudsCords.birds1,
        //         left: getPosition(cloudsCords.birds1.left, cloudsCords.birds1.speed),
        //     }
        // });

    }

    const onBlur = () => {
        setFocus(false);
    }

    lang = lang[lang_tag];
    const [inFocus, setFocus] = useState("true");
    const [cloudsCords, setCloudsCords] = useState({
        cloud1: {
            left: 160,
            top: 5,
            speed: 0.8,
            size: 1
        },
        cloud2: {
            left: 120,
            top: 15,
            speed: 3,
            size: 1.4
        },
        cloud3: {
            left: 140,
            top: 60,
            speed: 1.5,
            size: 1.1
        },
        cloud4: {
            left: 120,
            top: 55,
            speed: 3,
            size: 0.7
        },
        birds1: {
            left: 160,
            top: 20,
            speed: 2,
            size: 1
        }
    });

    const getPosition = (left, speed) => {
        if (left > -30) {
            return left - (3 * speed)
        } else {
            return 150;
        }

    }

    useEffect(() => {
        setTimeout(() => {
            if (inFocus)
            setCloudsCords({
                ...cloudsCords,
                cloud1: {
                    ...cloudsCords.cloud1,
                    left: getPosition(cloudsCords.cloud1.left, cloudsCords.cloud1.speed),
                },
                cloud2: {
                    ...cloudsCords.cloud2,
                    left: getPosition(cloudsCords.cloud2.left, cloudsCords.cloud2.speed),
                },
                cloud3: {
                    ...cloudsCords.cloud3,
                    left: getPosition(cloudsCords.cloud3.left, cloudsCords.cloud3.speed),
                },
                cloud4: {
                    ...cloudsCords.cloud4,
                    left: getPosition(cloudsCords.cloud4.left, cloudsCords.cloud4.speed),
                },
                birds1: {
                    ...cloudsCords.birds1,
                    left: getPosition(cloudsCords.birds1.left, cloudsCords.birds1.speed),
                }
            });
        }, 1000)
    }, [cloudsCords, inFocus]);

    return (
        <div className="hero">
            <TabFocus onFocus={onFocus} onBlur={onBlur} />
            <img alt="hero" className="hero__img" src={HeroImg} />
            <div className="hero__cloud hero__cloud--2nd" style={{width: `${cloudsCords.cloud1.size * 140}px`, display: (cloudsCords.cloud1.left > -30) ? "block" : "none", "top": `${cloudsCords.cloud1.top}%`, "left": `${cloudsCords.cloud1.left}%`}} />
            <div className="hero__cloud" style={{width: `${cloudsCords.cloud2.size * 140}px`, display: (cloudsCords.cloud2.left > -30) ? "block" : "none","top": `${cloudsCords.cloud2.top}%`, "left": `${cloudsCords.cloud2.left}%`}} />
            <div className="hero__cloud hero__cloud--2nd" style={{width: `${cloudsCords.cloud3.size * 140}px`, display: (cloudsCords.cloud3.left > -30) ? "block" : "none","top": `${cloudsCords.cloud3.top}%`, "left": `${cloudsCords.cloud3.left}%`}} />
        
            <div className="hero__content">
                <h2 className="hero__header">{lang.title}</h2>
                <p className="hero__text">{lang.content}</p>
                <Button url="/" text={lang.button1} modifier="bordered" />
                <Button url="/" text={lang.button2} modifier="pink"/>
            </div>
        </div>
    );
}

export default useLang(Hero, "hero");