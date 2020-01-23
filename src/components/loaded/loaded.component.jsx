import { useEffect } from "react";

const Loaded = () => {
    useEffect(() => {
        const scroll = () => {
            document.querySelectorAll(".animate-opacity.animate-opacity--inactive").forEach((el) => {
                if (window.pageYOffset + window.innerHeight > el.offsetTop && window.pageYOffset - window.innerHeight < el.offsetTop) {
                  if (el.hasAttribute("data-delay") && el.getAttribute("data-delay")) {
                    setTimeout(() => {
                      el.classList.remove("animate-opacity--inactive");
                    }, el.getAttribute("data-delay") * 500);
                  } else {
                    el.classList.remove("animate-opacity--inactive");
                  }
                }
            });
          }
  
          window.addEventListener('scroll', function() {
            scroll();  
          });

        setTimeout(() => {
            scroll();
        }, 1000);
        
    }, ["*"]);

    return (null);
}

export default Loaded;