import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import JSProj from "./JSProjects"
import CSProj from "./CSProjects"
import Resume from "./Resume"
import Contact from "./Contact"



export default function Main () {

    return (
        <div>
            <ReactFullpage 
            licenseKey = {`4L9KI-N82OK-KLZ36-6E4J9-XXAUO`}
            navigation={true}
            scrollingSpeed={1250}
            continuousVertical={true}
            continuousHorizontal={true}
            slidesNavigation={true}
            slidesNavPosition='bottom'
            credits={false}
                    
            render={() => (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <Home />
                    </div>
                    <div className="section">
                        <About />
                    </div>
                    <div className="section">
                        <Skills />
                    </div>
                    <div className="section">
                        <JSProj />
                    </div>
                    <div className="section">
                        <CSProj />
                    </div>
                    <div className="section">
                        <Resume />
                    </div>
                    <div className="section">
                        <Contact />
                    </div>
                </ReactFullpage.Wrapper>
            )}
            />
        </div>
    )

}