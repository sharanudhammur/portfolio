import './App.scss';
import "./theme.scss"
import Home from './Screens/Home/index';
import Experience from './Screens/Experience/index';
import Tech from './Screens/Tech/index';
import Project from './Screens/Project/index';
import Footer from './Screens/Footer/index';
import Header from './Screens/Header/index';
import About from './Screens/About/index';
import { useRef } from 'react';
// import Techn from './Screens/Techn/Techn';
// import Tech2 from './Screens/Tech2';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const techRef = useRef(null);
  const projectRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
};

  return (
    <div className="App">
   <Header 
                scrollToHome={() => scrollToSection(homeRef)}
                scrollToAbout={() => scrollToSection(aboutRef)}
                scrollToExperience={() => scrollToSection(experienceRef)}
                scrollToTech={() => scrollToSection(techRef)}
                scrollToProject={() => scrollToSection(projectRef)}
                scrollToFooter={() => scrollToSection(footerRef)}
            />
            <div ref={homeRef}>
                <Home />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={experienceRef}>
                <Experience />
            </div>
            <div ref={techRef}>
                <Tech />
            </div>
            <div ref={projectRef}>
                <Project />
            </div>
            <div ref={footerRef}>
                <Footer />
            </div>
    </div>
  );
}

export default App;
