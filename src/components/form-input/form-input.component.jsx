import React from "react";
import "./form-input.styles.scss";

const FormInput = ({type, name, placeholder, value, handleChange, label, extraClasses}) => {
    return(
        <div className={`form-input ${type === "textarea" ? "form-input--textarea" : "form-input--field"} ${extraClasses ? extraClasses : ""}`}>
            { label ? <label class="form-input__label">{label}</label> : ""}
            {
                type !== "textarea" ?
                    <input type={type} className="form-input__field" name={name} placeholder={placeholder} value={value} onChange={handleChange} />
                : type === "textarea" ? 
                    <textarea className="form-input__textarea" onChange={handleChange} value={value} name={name} placeholder={placeholder} />
                : null 
            }
        </div>
    );
}

export default FormInput;