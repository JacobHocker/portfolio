import React from 'react';
import REACT from '../../assets/lang-logo/react-transparent.png';
import HTML from '../../assets/lang-logo/html-transparent.png';
import CSS from '../../assets/lang-logo/css-transparent.png';
import './Skills.css';

// import Swiper core and required modules
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const skillData = [
    {
        avatar: REACT,
        name: 'React.js',
        content: 'This is where the content for the skill will go.  Testing how long text should be'
    }, 
    {
        avatar: HTML,
        name: 'HTML5',
        content: 'This is where the content for the skill will go.  Testing how long text should be'
    }, 
    {
        avatar: CSS,
        name: 'CSS3',
        content: 'This is where the content for the skill will go.  Testing how long text should be'
    }
]

const Skills = ({isDark}) => {
    return (
        <section id='skills' className={isDark === true ? 'dk-section' : 'lt-section'}>
            <div className={isDark === true ? 'dk-section__head' : 'lt-section__head'}>
                <h2>Knowledge & Abilities</h2>
                <h5><strong>My Skills</strong></h5>
            </div>

            <Swiper className="container skills__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            
            >
                {skillData.map(({avatar, name, content}, index) => {
                    return (
                        <SwiperSlide key={index} className={isDark === true ? 'dk-skill' : 'lt-skill'}>
                            <div className="skill__avatar">
                                <img src={avatar} alt='react-image' className='avatar'/>
                                <div className={isDark === true ? 'dk-skill__overlay' : 'lt-skill__overlay'} >
                                    <h2 className={isDark === true ? 'dk-skill__name' : 'lt-skill__name'}>{name}</h2>
                                    <small className={isDark === true ? 'dk-skill__content' : 'lt-skill__content'}>
                                        {content}
                                    </small>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Skills;