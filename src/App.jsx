import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(JSON.parse(window.localStorage.getItem('isDark')));
    }, []);
    
    useEffect(() => {
        window.localStorage.setItem('isDark', isDark);
    }, [isDark]);
    
    
    const toggleDarkMode = () => setIsDark(!isDark);
    return (
    <div className={isDark === true ? 'dk-app' : 'lt-app'}>
        <Header isDark={isDark}/>
        <Nav onDarkClick={toggleDarkMode} isDark={isDark}/>
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
    </div>
    )
}

export default App;
