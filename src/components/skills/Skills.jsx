import React from 'react';
import VS from '../../assets/lang-logo/vscode-transparent.png';
import GITHUB from '../../assets/lang-logo/github-transparent.png';
import OOP from '../../assets/lang-logo/oop-transparent.webp';
import GOOGLE from '../../assets/lang-logo/google-transparent.svg.png';
import API from '../../assets/lang-logo/restapi-transparent.svg';
import STACK from '../../assets/lang-logo/stack_overflow.png';
import RESPONSE from '../../assets/lang-logo/responsive-transparent.png';
import './Skills.css';

// import Swiper core and required modules
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const skillData = [
    {
        avatar: GOOGLE,
        name: 'Google',
        content: 'One key for every developer is when you are stuck is to be able to research the solution.  I am quite skilled with the developers best friend Google.'
    },
    {
        avatar: RESPONSE,
        name: 'Mobile First Responsive Design',
        content: 'Just like my belief in life that inclusion is a must, the same can be said for development of applications. I include the ability to view the application from all devices by styling mobile first.'
    },
    {
        avatar: VS,
        name: 'VS Code',
        content: 'My prefered code editor.'
    },
    {
        avatar: GITHUB,
        name: 'GitHub',
        content: 'All of my development experience starts on GitHub the lifeline for all developers and engineers!'
    },
    {
        avatar: OOP,
        name: 'Object Oriented Programming',
        content: 'OOP with relational databases is my primary method when creating a full stack application.'
    }, 
    {
        avatar: STACK,
        name: 'Stack Overflow',
        content: 'Along with Google when a developer is stuck navigation and interaction with Stack Overflow is a must.'
    },
    {
        avatar: API,
        name: 'RestAPI',
        content: 'Experience with using RESTful APIs to integrate large amounts of data with complex end points to the GUI.'
    },
    
    
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