import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';
import './Experience.css';

const Experience = ({isDark}) => {
    return (
        <section id='experience' className={isDark === true ? 'dk-section' : 'lt-section'}>
            <div className={isDark === true ? 'dk-section__head' : 'lt-section__head'}>
                <h2>View My</h2>
                <h5>Experience</h5>
            </div>

            <div className="container experience__container">
                <div className={isDark === true ? "dk-experience__frontend" : "lt-experience__frontend"}>
                    <h3>Frontend Development</h3>
                    <div className={isDark === true ? "dk-experience__content" : "lt-experience__content"}>
                        <article className={isDark === true ? "dk-experience__details" : "lt-experience__details"}>
                            <BsPatchCheckFill className={isDark === true ? "dk-experience__details-icon" : "lt-experience__details-icon"}/>
                            <div>
                                <h4>HTML5</h4>
                                <small className={isDark === true ? "dk-text-light" : "lt-text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={isDark === true ? "dk-experience__details" : "lt-experience__details"}>
                            <BsPatchCheckFill className={isDark === true ? "dk-experience__details-icon" : "lt-experience__details-icon"}/>
                            <div>
                                <h4>CSS3</h4>
                                <small className={isDark === true ? "dk-text-light" : "lt-text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={isDark === true ? "dk-experience__details" : "lt-experience__details"}>
                            <BsPatchCheckFill className={isDark === true ? "dk-experience__details-icon" : "lt-experience__details-icon"}/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className={isDark === true ? "dk-text-light" : "lt-text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={isDark === true ? "dk-experience__details" : "lt-experience__details"}>
                            <BsPatchCheckFill className={isDark === true ? "dk-experience__details-icon" : "lt-experience__details-icon"}/>
                            <div>
                                <h4>React.js</h4>
                                <small className={isDark === true ? "dk-text-light" : "lt-text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={isDark === true ? "dk-experience__details" : "lt-experience__details"}>
                            <BsPatchCheckFill className={isDark === true ? "dk-experience__details-icon" : "lt-experience__details-icon"}/>
                            <div>
                                <h4>Sass</h4>
                                <small className={isDark === true ? "dk-text-light" : "lt-text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={isDark === true ? "dk-experience__details" : "lt-experience__details"}>
                            <BsPatchCheckFill className={isDark === true ? "dk-experience__details-icon" : "lt-experience__details-icon"}/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className={isDark === true ? "dk-text-light" : "lt-text-light"}>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className={isDark === true ? "dk-experience__backend" : "lt-experience__backend"}>
                    <h3>Backend Development</h3>
                    <div className={isDark === true ? "dk-experience__content" : "lt-experience__content"}>
                        <article className={isDark === true ? "dk-experience__details" : "lt-experience__details"}>
                            <BsPatchCheckFill className={isDark === true ? "dk-experience__details-icon" : "lt-experience__details-icon"}/>
                            <div>
                                <h4>Ruby</h4>
                                <small className={isDark === true ? "dk-text-light" : "lt-text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={isDark === true ? "dk-experience__details" : "lt-experience__details"}>
                            <BsPatchCheckFill className={isDark === true ? "dk-experience__details-icon" : "lt-experience__details-icon"}/>
                            <div>
                                <h4>Ruby on Rails</h4>
                                <small className={isDark === true ? "dk-text-light" : "lt-text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={isDark === true ? "dk-experience__details" : "lt-experience__details"}>
                            <BsPatchCheckFill className={isDark === true ? "dk-experience__details-icon" : "lt-experience__details-icon"}/>
                            <div>
                                <h4>SQL</h4>
                                <small className={isDark === true ? "dk-text-light" : "lt-text-light"}>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    ) 
}

export default Experience;