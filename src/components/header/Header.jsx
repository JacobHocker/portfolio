import React from 'react';
import CTA from './CTA';
import './Header.css';
import ME from '../../assets/mefulltrans.png';
import HeaderSocials from './HeaderSocials';

const Header = ({isDark}) => {
    return (
        <header id='#'>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Jacob Hocker</h1>
                <h5 className={isDark === true ? 'dk-head-text-light' : 'lt-head-text-light'}><strong>Web Developer</strong></h5>
                <h5 className={isDark === true ? 'dk-head-text-light' : 'lt-head-text-light'}><strong>&</strong></h5>
                <h5 className={isDark === true ? 'dk-head-text-light' : 'lt-head-text-light'}><strong>Full Stack Software Engineer</strong></h5>
                <CTA isDark={isDark}/>
                <HeaderSocials isDark={isDark}/>

                <div className={isDark === true ? 'dk-me' : 'lt-me'}>
                    <img src={ME} alt='me' className='me-img' />
                </div>

                <a href='#contact' className={isDark === true ? 'dk-scroll__down' : 'lt-scroll__down'}>Scroll Down</a>
            </div>

        </header>
    )
}

export default Header;