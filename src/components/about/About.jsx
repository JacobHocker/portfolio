import React from 'react';
import MeAbout from '../../assets/selfieoneback.jpg';
import {FaAward} from 'react-icons/fa';
import {GiSkills} from 'react-icons/gi';
import {VscFolderLibrary} from 'react-icons/vsc';

import './About.css';

const About = ({isDark}) => {
    return (
        <section id='about' className={isDark === true ? 'dk-section' : 'lt-section'}>
            <div className={isDark === true ? 'dk-section__head' : 'lt-section__head'}>
                <h2>Get To Know</h2>
                <h5>About Me</h5>
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
                            <h5>Experience</h5>
                            <small>2 Years Experience</small>
                        </article>

                        <article className={isDark === true ? 'dk-about__card' : 'lt-about__card'}>
                            <GiSkills className={isDark === true ? 'dk-about__icon' : 'lt-about__icon'} />
                            <h5>Skills</h5>
                            <small>TBD</small>
                        </article>

                        <article className={isDark === true ? 'dk-about__card' : 'lt-about__card'}>
                            <VscFolderLibrary className={isDark === true ? 'dk-about__icon' : 'lt-about__icon'} />
                            <h5>Projects</h5>
                            <small>15+ Completed Projects</small>
                        </article>

                    
                    </div>
                        
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ea reiciendis doloremque tenetur optio harum praesentium a, pariatur accusantium voluptatem minus iure perferendis? Expedita voluptas, voluptatibus adipisci necessitatibus neque ipsa?
                        </p>

                        <a href='#contact' className={isDark === true ? 'dk-btn dk-btn-primary' : 'lt-btn lt-btn-primary'}>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About