import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Sean Robison's personal website. Seattle based Bethel School of Technology graduate, "
    + 'Restaurant Manager in the greater Seattle area.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome!</Link></h2>
          <p>
            Take a tour around this app
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Click to look at my GitHub <a href="https://github.com/hawaiiankid">here</a>.</p>
    </article>
  </Main>
);

export default Index;
