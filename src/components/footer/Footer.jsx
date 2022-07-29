import React from 'react';
import {BsLinkedin, BsGithub, BsMedium} from 'react-icons/bs';
import './Footer.css';

const Footer = ({isDark}) => {
    return (
        <footer className={isDark === true ? 'dk-footer' : 'lt-footer'}>
            <a href='#' className={isDark === true ? 'dk-footer__logo' : 'lt-footer__logo'}>Jacob Hocker</a>

            <ul className={isDark === true ? 'dk-permalinks' : 'lt-permalinks'}>
                <li><a href='#' className={isDark === true ? 'dk-foot-link' : 'lt-foot-link'}>Home</a></li>
                <li><a href='#about' className={isDark === true ? 'dk-foot-link' : 'lt-foot-link'}>About</a></li>
                <li><a href='#experience' className={isDark === true ? 'dk-foot-link' : 'lt-foot-link'}>Experience</a></li>
                <li><a href='#services' className={isDark === true ? 'dk-foot-link' : 'lt-foot-link'}>Services</a></li>
                <li><a href='#portfolio' className={isDark === true ? 'dk-foot-link' : 'lt-foot-link'}>Portfolio</a></li>
                <li><a href='#skills' className={isDark === true ? 'dk-foot-link' : 'lt-foot-link'}>Skills</a></li>
                <li><a href='#contact' className={isDark === true ? 'dk-foot-link' : 'lt-foot-link'}>Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href='https://github.com/JacobHocker' className={isDark === true ? 'dk-foot-social' : 'lt-foot-social'}><BsGithub /></a>
                <a href='https://medium.com/@jacobhocker' className={isDark === true ? 'dk-foot-social' : 'lt-foot-social'}><BsMedium /></a>
                <a href='https://www.linkedin.com/in/jacobhocker/' className={isDark === true ? 'dk-foot-social' : 'lt-foot-social'}><BsLinkedin /></a>
            </div>

            <div className={isDark === true ? 'dk-copyright' : 'lt-copyright'}>
                <small>&copy; Jacob Hocker. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer;