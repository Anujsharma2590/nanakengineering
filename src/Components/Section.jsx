import React from "react";
import { animateScroll as scroll } from "react-scroll";
export default function Section({ title, subtitle, dark, id }) {
   function scrollToTop () {
        scroll.scrollToTop();
      };
      
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
     <button onClick={scrollToTop}>Top</button>
    </div>
  );
}
