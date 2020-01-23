import React, { useState } from "react";

import useLang from "./../useLang/useLang.component";
import FormInput from "./../form-input/form-input.component";
import Button from "./../button/button.component";

import "./contact-form.styles.scss";

const ContactForm = ({lang, lang_tag}) => {
    lang = lang[lang_tag];
    
    const [formData, setFormData] = useState({
        first_name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: [e.target.value]
        });
    }

    return(
        <div className="contactForm">
            <div className="row">
            <FormInput name="first_name" type="text" placeholder={lang.name} value={formData.first_name} handleChange={handleChange} />
            <FormInput name="email" type="email" placeholder={lang.email} value={formData.email} handleChange={handleChange} />
            </div>
            <FormInput name="message" type="textarea" placeholder={lang.message} value={formData.message} handleChange={handleChange} />
            <Button type="submit" text={lang.button} modifier="purple" />
        </div>
    );
}

export default useLang(ContactForm, "contact-form");