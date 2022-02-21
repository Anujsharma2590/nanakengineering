import React from "react";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import Contact from './Components/Contact/Contact' 
function MiddleSection() {
  return (
    <div>
         <Section
          title="HOME"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="ABOUT"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="EQUIPMENT"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="OUR RANGE"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
  
        <div id="section5">
         <Contact/>
        </div>
      
    </div>
  );
}

export default MiddleSection;
