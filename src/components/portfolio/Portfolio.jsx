import React from 'react';
import './Portfolio.css';
import EC from '../../assets/ec-portfolio-img.png';
import OWSLAB from '../../assets/oslab-portfolio-img.png';

const Portfolio = ({isDark}) => {
    return (
        <section id='portfolio' className={isDark === true ? 'dk-section' : 'lt-section'}>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className={isDark === true ? 'dk-portfolio__item' : 'lt-portfolio__item'}>
                    <div className="portfolio__item-image">
                        <img src={EC} alt='entertainment-center-image' />
                    </div>
                    <h3>Entertainment Center</h3>
                    <div className="portfolio__item-cta">
                        <a href='https://github.com' rel='noreferrer' target='_blank' className={isDark === true ? 'dk-btn' : 'lt-btn'}>
                            GitHub
                        </a>
                        <a href='https://github.com' rel='noreferrer' target='_blank' className={isDark === true ? 'dk-btn dk-btn-primary' : 'lt-btn lt-primary-btn'}>
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className={isDark === true ? 'dk-portfolio__item' : 'lt-portfolio__item'}>
                    <div className="portfolio__item-image">
                        <img src={OWSLAB} alt='entertainment-center-image' />
                    </div>
                    <h3>OverStat Lab</h3>
                    <div className="portfolio__item-cta">
                        <a href='https://github.com' rel='noreferrer' target='_blank' className={isDark === true ? 'dk-btn' : 'lt-btn'}>
                            GitHub
                        </a>
                        <a href='https://github.com' rel='noreferrer' target='_blank' className={isDark === true ? 'dk-btn dk-btn-primary' : 'lt-btn lt-primary-btn'}>
                            Live Demo
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio;