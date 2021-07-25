import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sean Robison</h2>
        <p><a href="mailto:seantrobison@gmail.com">seantrobison@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Sean. I like building things.
        I am a <a href="https://betheltech.net/">Bethel School of Technology</a> graduate, Bethel Tech Alumni, and
        a Restaurant Manager at <a href="https://www.google.com/maps/place/Zeeks+Pizza/@47.6762737,-122.2080461,17z/data=!3m1!4b1!4m5!3m4!1s0x549072adbc7e7a6d:0x4f3def289dbaebfd!8m2!3d47.6762737!4d-122.2058574">Zeeks Pizza in Kirkland, WA</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Sean&apos;Robison </p>
    </section>
  </section>
);

export default SideBar;
