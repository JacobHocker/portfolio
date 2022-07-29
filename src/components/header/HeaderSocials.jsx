import React from 'react'
import {BsLinkedin, BsGithub, BsMedium} from 'react-icons/bs';
const HeaderSocials = ({isDark}) => {
    return (
        <div className={isDark === true ? "dk-header__socials" : "lt-header__socials"}>
            <a href='https://www.linkedin.com/in/jacobhocker/' target="_blank" rel="noreferrer" className={isDark === true ? 'dk-link' : 'lt-link'}><BsLinkedin /></a>
            <a href='https://github.com/JacobHocker' target="_blank" rel="noreferrer" className={isDark === true ? 'dk-link' : 'lt-link'}><BsGithub /></a>
            <a href='https://medium.com/@jacobhocker' target="_blank" rel="noreferrer" className={isDark === true ? 'dk-link' : 'lt-link'}><BsMedium /></a>
        </div>
    )
}

export default HeaderSocials