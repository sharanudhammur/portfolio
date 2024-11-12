import './App.scss';
import './theme.scss';
import Home from './Screens/Home/index';
import Experience from './Screens/Experience/index';
import Tech from './Screens/Tech/index';
import Project from './Screens/Project/index';
import Footer from './Screens/Footer/index';
import Header from './Screens/Header/index';
import About from './Screens/About/index';
import { useEffect, useRef, useState } from 'react';

function App() {
    const [activePage, setActivePage] = useState("home");
    const [isScrolling, setIsScrolling] = useState(false);  // State to track programmatic scroll
    const scrollTimeoutRef = useRef(null);  // Store the timeout reference

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const techRef = useRef(null);
    const projectRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // Don't trigger if we are in the middle of a programmatic scroll
            if (isScrolling) return;

            const homeRect = homeRef.current.getBoundingClientRect();
            const aboutRect = aboutRef.current.getBoundingClientRect();
            const experienceRect = experienceRef.current.getBoundingClientRect();
            const techRect = techRef.current.getBoundingClientRect();
            const projectRect = projectRef.current.getBoundingClientRect();
            const footerRect = footerRef.current.getBoundingClientRect();

            if (footerRect.top < 450) {
                setActivePage("footer");
            }
            else if (projectRect.top < 300) {
                setActivePage("project");
            }
            else if (techRect.top < 300) {
                setActivePage("tech");
            }
            else if (experienceRect.top < 300) {
                setActivePage("experience");
            }
            else if (aboutRect.top < 300) {
                setActivePage("about");
            }
            else if (homeRect.top < 300) {
                setActivePage("home");
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolling]);  // We only want to re-run the scroll listener if `isScrolling` changes

    const handleSelectMenu = (menu) => {
        setActivePage(menu);
        setIsScrolling(true);  // Set isScrolling to true to prevent scroll event

        if (menu === "home") {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (menu === "about") {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (menu === "experience") {
            experienceRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (menu === "tech") {
            techRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (menu === "project") {
            projectRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (menu === "footer") {
            footerRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        // Set a timeout to reset isScrolling after smooth scroll animation completes
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);  // Clear any previous timeouts
        }

        scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
        }, 1000);  // Adjust the timeout duration if needed
    };

    return (
        <div className="App">
            <Header
                activePage={activePage}
                setActivePage={setActivePage}
                handleSelectMenu={handleSelectMenu}
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
