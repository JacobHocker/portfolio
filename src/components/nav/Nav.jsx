import React, {useState} from 'react';
import {AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMessage} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {BsLightbulb, BsLightningCharge} from 'react-icons/bs';
import {MdOutlineDarkMode} from 'react-icons/md';
import {TbHeartHandshake} from 'react-icons/tb';

import './Nav.css';

const Nav = ({onDarkClick, isDark}) => {
    const [activeNav, setActiveNav] = useState('#');
    
    return (
        <nav>
            <a className={isDark === true ? 'dk-nav-link' : 'lt-nav-link'} onClick={onDarkClick}>{isDark === true ? <BsLightbulb/> : <MdOutlineDarkMode/>}</a>
            <a href='#' onClick={() => setActiveNav('#')} className={isDark === true ? activeNav === '#' ? 'dk-nav-link active' : 'dk-nav-link' : activeNav === '#' ? 'lt-nav-link active' : 'lt-nav-link'}><AiOutlineHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={isDark === true ? activeNav === '#about' ? 'dk-nav-link active' : 'dk-nav-link' : activeNav === '#about' ? 'lt-nav-link active' : 'lt-nav-link'}><AiOutlineUser /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={isDark === true ? activeNav === '#experience' ? 'dk-nav-link active' : 'dk-nav-link' : activeNav === '#experience' ? 'lt-nav-link active' : 'lt-nav-link'}><BiBook /></a>
            <a href='#services' onClick={() => setActiveNav('#services')} className={isDark === true ? activeNav === '#services' ? 'dk-nav-link active' : 'dk-nav-link' : activeNav === '#services' ? 'lt-nav-link active' : 'lt-nav-link'}><TbHeartHandshake /></a>
            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={isDark === true ? activeNav === '#portfolio' ? 'dk-nav-link active' : 'dk-nav-link' : activeNav === '#portfolio' ? 'lt-nav-link active' : 'lt-nav-link'}><AiOutlineProject /></a>
            <a href='#skills' onClick={() => setActiveNav('#skills')} className={isDark === true ? activeNav === '#skills' ? 'dk-nav-link active' : 'dk-nav-link' : activeNav === '#skills' ? 'lt-nav-link active' : 'lt-nav-link'}><BsLightningCharge /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={isDark === true ? activeNav === '#contact' ? 'dk-nav-link active' : 'dk-nav-link' : activeNav === '#contact' ? 'lt-nav-link active' : 'lt-nav-link'}><AiOutlineMessage /></a>
        </nav>
    )
}

export default Nav;