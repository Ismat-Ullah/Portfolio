import React from 'react';
import './contact.css';

import { MdEmail } from 'react-icons/md';
import { SiMessenger } from 'react-icons/si';
import { IoLogoWhatsapp } from 'react-icons/io';

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        {/* Email */}
                        <MdEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>asmatkhan0018@gmail.com</h5>
                        <a href="mailto:asmatkhan0018@gmail.com" target="_blank">
                            Send a Message
                        </a>
                    </article>
                    {/* Messenger */}
                    <article className="contact__option">
                        <SiMessenger className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Ismat Ullah</h5>
                        <a href="https://m.me/profile.php?id=100080975298352" target="_blank">
                            Send a Message
                        </a>
                    </article>

                    {/* Whatsapp */}
                    <article className="contact__option">
                        <IoLogoWhatsapp className="contact__option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+92330219291189289189</h5>
                        <a href="https://api.whatsapp.com/send/phone=+923498953561" target="_blank">
                            Send a Message
                        </a>
                    </article>
                </div>

                {/* End Of Contact Option */}
                <form action="">
                    <input type="text" name="name" placeholder="Your Full name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
