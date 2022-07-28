import React from 'react';
import './Portfolio.css';
import EC from '../../assets/ec-portfolio-img.png';
import OWSLAB from '../../assets/oslab-portfolio-img.png';

const Portfolio = ({isDark}) => {
    return (
        <section id='portfolio' className={isDark === true ? 'dk-section' : 'lt-section'}>
            <div className={isDark === true ? 'dk-section__head' : 'lt-section__head'}>
                <h2>My Recent Work</h2>
                <h5><strong>My Portfolio</strong></h5>
            </div>

            <div className="container portfolio__container">
                <article className={isDark === true ? 'dk-portfolio__item' : 'lt-portfolio__item'}>
                    <div className="portfolio__item-image">
                        <img src={EC} alt='entertainment-center-image' />
                    </div>
                    <h3>Entertainment Center</h3>
                    <div className="portfolio__item-cta">
                        <a href='https://github.com' rel='noreferrer' target='_blank' className={isDark === true ? 'dk-btn dk-btn-primary' : 'lt-btn lt-btn-primary'}>
                            GitHub
                        </a>
                        <a href='https://github.com' rel='noreferrer' target='_blank' className={isDark === true ? 'dk-btn dk-btn-primary' : 'lt-btn lt-btn-primary'}>
                            Live Demo
                        </a>
                        <a href='https://github.com' rel='noreferrer' target='_blank' className={isDark === true ? 'dk-btn dk-btn-primary' : 'lt-btn lt-btn-primary'}>
                            Watch Video
                        </a>
                    </div>
                </article>
                <article className={isDark === true ? 'dk-portfolio__item' : 'lt-portfolio__item'}>
                    <div className="portfolio__item-image">
                        <img src={OWSLAB} alt='entertainment-center-image' />
                    </div>
                    <h3>OverStat Lab</h3>
                    <div className="portfolio__item-cta">
                        <a href='https://github.com' rel='noreferrer' target='_blank' className={isDark === true ? 'dk-btn dk-btn-primary' : 'lt-btn lt-btn-primary'}>
                            GitHub
                        </a>
                        <a href='https://github.com' rel='noreferrer' target='_blank' className={isDark === true ? 'dk-btn dk-btn-primary' : 'lt-btn lt-btn-primary'}>
                            Live Demo
                        </a>
                        <a href='https://github.com' rel='noreferrer' target='_blank' className={isDark === true ? 'dk-btn dk-btn-primary' : 'lt-btn lt-btn-primary'}>
                            Watch Video
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio;