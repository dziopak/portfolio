import React from "react";

import useLang from "../../useLang/useLang.component";
import DescriptionBox from "../../description-box/description-box.component";

const WhoAmI = ({lang, lang_tag}) => {
    lang = lang[lang_tag];
    return(
        <DescriptionBox>
        <h3 className="description-box__title description-box__title--centered">{lang.title}</h3>
        <p className="description-box__text text-short">
            Mam 25 lat i urodziłem się w Rzeszowie. Jestem freelancerem zajmującym się głównie programowaniem Front-End. Oferuję jednak kompleksowe usługi w zakresie tworzenia stron internetowych - począwszy od projektowania graficznego, tworzenia stron i szablonów WordPress, pisania wtyczek i rozszereń przeglądarkowych, aż po programowanie Back-End'u.
        </p>
        </DescriptionBox>
    );
}

export default useLang(WhoAmI, "content/who-am-i");