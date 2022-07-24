import React from 'react';
import {BiCheck} from 'react-icons/bi';
import './Services.css';

const Services = ({isDark}) => {
    return (
        <section id='services' className={isDark === true ? 'dk-section' : 'lt-section'}>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className={isDark === true ? 'dk-service' : 'lt-service'}>
                    <div className={isDark === true ? 'dk-service__head' : 'lt-service__head'}>
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className={isDark === true ? 'dk-service__list' : 'lt-service__list'}>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Lorem, ispsum</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Lorem, ispsum</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Lorem, ispsum</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Lorem, ispsum</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Lorem, ispsum</p>
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
                            <p>Lorem, ispsum</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Lorem, ispsum</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Lorem, ispsum</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Lorem, ispsum</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Lorem, ispsum</p>
                        </li>
                    </ul>
                </article>


                <article className={isDark === true ? 'dk-service' : 'lt-service'}>
                    <div className={isDark === true ? 'dk-service__head' : 'lt-service__head'}>
                        <h3>TBD</h3>
                    </div>
                    <ul className={isDark === true ? 'dk-service__list' : 'lt-service__list'}>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Lorem, ispsum</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Lorem, ispsum</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Lorem, ispsum</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Lorem, ispsum</p>
                        </li>
                        <li>
                            <BiCheck className={isDark === true ? 'dk-service__list-icon' : 'lt-service__list-icon'}/>
                            <p>Lorem, ispsum</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services;