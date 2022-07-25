import React, {useRef} from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import emailjs from 'emailjs-com';

import './Contact.css';

const Contact = ({isDark}) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9k83egs', 'template_1st1fhb', form.current, '0OOjS9m7lFLQbs1Ry')
        
        e.target.reset()
        alert('Your Email Has Been Sent!')
    };
    return (
        <section id='contact' className={isDark === true ? 'dk-section' : 'lt-section'}>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className={isDark === true ? 'dk-contact__options' : 'lt-contact__options'}>
                    <article className={isDark === true ? 'dk-contact__option' : 'lt-contact__option'}>
                        <RiMessengerLine className={isDark === true ? 'dk-contact__option-icon' : 'lt-contact__option-icon'}/>
                        <h4>Messenger</h4>
                        <a className={isDark === true ? 'dk-link' : 'lt-link'} href='https://m.me/jacob.hocker' rel='noreferrer' target='_blank'>Send A Message</a>
                    </article>
                    <article className={isDark === true ? 'dk-contact__option' : 'lt-contact__option'}>
                        <AiOutlineMail className={isDark === true ? 'dk-contact__option-icon' : 'lt-contact__option-icon'}/>
                        <h4>Email</h4>
                        <a className={isDark === true ? 'dk-link' : 'lt-link'} href='mailto: jacobdouglas06@gmail.com' rel='noreferrer' target='_blank'>Send A Message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form className={isDark === true ? 'dk-form' : 'lt-form' } ref={form} onSubmit={sendEmail}>
                    <input autoComplete='off' className={isDark === true ? 'dk-input' : 'lt-input' }type="text" name='name' placeholder='Your Full Name' required />
                    <input autoComplete='off' className={isDark === true ? 'dk-input' : 'lt-input' }type='email' name='email' placeholder='Your Email' required />
                    <textarea className={isDark === true ? 'dk-textarea' : 'lt-textarea' }name='message' rows={7} placeholder='Your Message' required></textarea>
                    <button type='submit' className={isDark === true ? 'dk-btn dk-btn-primary' : 'lt-btn lt-btn-primary'}>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;