import React from 'react';
import { useState, useEffect } from "react";
import Navigation from './Navigation/Navigation';
import About from './About/About';
import ParticlesBg from 'particles-bg'
import Project from './Project/Project';
import Footer from './Footer/Footer'
import Skills from './Skills/Skills';

import './App.css';


function App(){
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
 

    return (
      <div className='App'>
        <ParticlesBg type="lines" bg={{
          position:"fixed",
          zIndex:-1,
          top:0,
          left:0
        }} />
      
      
         
        <Navigation goToTop={goToTop} scrollToBottom={scrollToBottom}/> 
        <About />
        <Project />
        <Skills />
        <Footer />
      </div>
   
      
    )
  }



export default App;
