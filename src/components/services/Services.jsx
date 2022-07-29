import React from 'react';
import {BiCheck} from 'react-icons/bi';
import './Services.css';

const Services = ({isDark}) => {
    return (
        <section id='services' className={isDark === true ? 'dk-section' : 'lt-section'}>
            <div className={isDark === true ? 'dk-section__head' : 'lt-section__head'}>
                <h2>What I Offer</h2>
                <h5><strong>Services</strong></h5>
            </div>

            <div className="container services__container">
                <article className={isDark === true ? 'dk-service' : 'lt-service'}>
                    <div className={isDark === true ? 'dk-service__head' : 'lt-service__head'}>
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className={isDark === true ? 'dk-service__list' : 'lt-service__list'}>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Wireframing</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Mobil First Responsive Design</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Business Branding</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Graphic Design</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Fluid Interfaces</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Modern Layouts</p>
                        </li>
                    </ul>
                </article>


                <article className={isDark === true ? 'dk-service' : 'lt-service'}>
                    <div className={isDark === true ? 'dk-service__head' : 'lt-service__head'}>
                        <h3>Web Development</h3>
                    </div>
                    <ul className={isDark === true ? 'dk-service__list' : 'lt-service__list'}>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Client-Side Scripting</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Server-Side Scripting</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Server and Network Security Configuration</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>eCommerce Development</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Content Management Systems (CMS)</p>
                        </li>
                    </ul>
                </article>


                <article className={isDark === true ? 'dk-service' : 'lt-service'}>
                    <div className={isDark === true ? 'dk-service__head' : 'lt-service__head'}>
                        <h3>Non-Technical</h3>
                    </div>
                    <ul className={isDark === true ? 'dk-service__list' : 'lt-service__list'}>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Consultations</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Excellent Communication</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Quick & Informative Responses</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Market Research</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Deadline Punctuality</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services;