import React from 'react';
import MeAbout from '../../assets/selfieoneback.jpg';
import {FaAward} from 'react-icons/fa';
import {FaHandsHelping} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';

import './About.css';

const About = ({isDark}) => {
    return (
        <section id='about' className={isDark === true ? 'dk-section' : 'lt-section'}>
            <div className={isDark === true ? 'dk-section__head' : 'lt-section__head'}>
                <h2>Get To Know</h2>
                <h5><strong>About Me</strong></h5>
            </div>
            

            <div className='container about__container'>
                <div className={isDark === true ? 'dk-about__me' : 'lt-about__me'}>
                    <div className='about__me-image'>
                        <img src={MeAbout} alt='me-about' />
                    </div>
                </div>
                <div className={isDark === true ? 'dk-about__content' : 'lt-about__content'}>
                    <div className='about__cards'>
                        <article className={isDark === true ? 'dk-about__card' : 'lt-about__card'}>
                            <FaAward className={isDark === true ? 'dk-about__icon' : 'lt-about__icon'} />
                            <h5>Development</h5>
                            <small>2 Years Experience</small>
                        </article>

                        <article className={isDark === true ? 'dk-about__card' : 'lt-about__card'}>
                            <FaHandsHelping className={isDark === true ? 'dk-about__icon' : 'lt-about__icon'} />
                            <h5>Customer Service</h5>
                            <small>8+ Years Experience</small>
                        </article>

                        <article className={isDark === true ? 'dk-about__card' : 'lt-about__card'}>
                            <VscFolderLibrary className={isDark === true ? 'dk-about__icon' : 'lt-about__icon'} />
                            <h5>Projects</h5>
                            <small>15+ Completed Projects</small>
                        </article>

                    
                    </div>
                        
                        <p>
                            I am a full stack software engineer that brings a passion and focus to create a seemless frontend user experience.  
                            My goal is to take the ideas that you have for your web application and make it a reality. 
                            I love to integrate my positivity and my passion for what I do into every project I work on.
                            Together we can create something we can truly be proud of!
                            So reach out let's talk ideas, jobs, music, movies, or anything you have on your mind!
                        </p>

                        <a href='#contact' className={isDark === true ? 'dk-btn dk-btn-primary' : 'lt-btn lt-btn-primary'}>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About