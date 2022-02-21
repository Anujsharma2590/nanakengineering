import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,

} from 'react-router-dom';
import MiddleSection from './MiddleSection'
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import About from './Components/About/About'
import Contact from "./Components/Contact/Contact";
import Map from './Components/Map'

function App() {

    return (
      <div className="App">
        {/* <Router>

        
        <Routes>
                 
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/map' element={< Map isMarkerShown />}></Route>

          </Routes>
        </Router>  */}
      

       <Navbar />
       <MiddleSection />
       
        {/* <Section
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
        <Section
          title="CONTACT"
          subtitle={Contact}
          dark={true}
          id="section5"
        />
       */}
       
      </div> 
    );
  }


export default App;
