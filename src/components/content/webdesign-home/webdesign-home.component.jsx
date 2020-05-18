import React from "react";
import stock1 from "./../../../assets/vectors/services-4.svg";

const WebdesignHome = () => {
    
    return (
        <div className="frontend row">
            <div className="frontend__col col">
            <h3 className="content-tab__sub-title">Web Design</h3>
                <p>
                    <strong>Schludne i przejrzyste</strong><br/>
                    <p>projekty graficzne, które nie zdominują treści, lecz ją wyeksponują.</p>
                </p>
                
                <p>
                    <strong>Szczegółowe i dopracowane,</strong><br/>
                    z marginesem błędu do jednego piksela. Starannie zachowane marginesy i wcięcia, przemyślana typografia i zachowane standardy UX. Przygotowane w trzech wersjach - komputer, tablet, telefon - co znacząco skróci czas pracy nad responsywnym szablonem. Projekty graficzne które nie tylko przyciągną uwagę klientów, ale także ułatwią pracę developerom.
                </p>
            </div>

            <div className="frontend__col col">
                <img className="frontend__img" src={stock1} alt="Front-End" />
            </div>
        </div>
    );
}

export default WebdesignHome;