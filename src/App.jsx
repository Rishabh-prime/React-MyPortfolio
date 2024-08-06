import React from 'react';
import Header from "./Components/Header.jsx";
import HeroSection from "./Components/heroSection.jsx";
import About from "./Components/about.jsx"
import Projects from "./Components/projects.jsx";
import OtherProjects from './Components/othersProject.jsx';
import Skills from './Components/skill.jsx';
import Footer from "./Components/footer.jsx";
import './App.css';


function App() {
    return (
        <>
            <Header />
            <HeroSection />
            <About />
            <Projects />
            <OtherProjects />
            <Skills />
            <Footer />
        </>
    );
}

export default App;
