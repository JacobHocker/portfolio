import React from 'react';
import CV from '../../assets/jacob-hocker-resume.pdf';

const CTA = ({isDark}) => {
    return (
        <div className='cta'>
            <a href={CV} download className={isDark === true ? 'dk-btn' : 'lt-btn-head'}>Download CV</a>
            <a href='#contact' className={isDark === true ? 'dk-btn dk-btn-primary' : 'lt-btn lt-btn-primary'}>Let's Talk</a>
        </div>
    )
}

export default CTA;