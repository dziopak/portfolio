import React from "react";
import useLang from "./../useLang/useLang.component";

import SocialIcons from "../social-icons/social-icons.component";
import ContactForm from "../contact-form/contact-form.component";

import "./contact-bar.styles.scss";

const ContactBar = ({lang, lang_tag}) => {
    lang = lang[lang_tag];
    return (
        <div className="contact-bar">
            <div className="container row">
                <div className="contact-bar__content col">
                    <h3 className="contact-bar__title">{lang.title}</h3>
                    <p className="contact-bar__text">{lang.content}</p>

                    <SocialIcons />
                </div>

                <div className="contact-bar__form col">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default useLang(ContactBar, "contact-bar");