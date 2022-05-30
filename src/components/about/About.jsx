import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward, FaUserCheck, FaFolder } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about">
            <h5>Get To know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years</small>
                        </article>
                        <article className="about__card">
                            <FaUserCheck className="about__icon" />
                            <h5>Clients</h5>
                            <small>10+ WorldWide</small>
                        </article>
                        <article className="about__card">
                            <FaFolder className="about__icon" />
                            <h5>Projects</h5>
                            <small>10+</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic cumque quisquam placeat
                        vitae possimus quos vel pariatur delectus nisi incidunt cum aliquam repellendus quia beatae,
                        ipsum eos, quod perspiciatis.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
