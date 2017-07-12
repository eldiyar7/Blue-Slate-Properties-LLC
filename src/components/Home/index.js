import React from 'react';

import ViewportTop from './components/ViewportTop/index';
import Services from './components/Services/index';
import Projects from './components/Projects/index';
import Contact from './components/Contact/index';

const Home = () => (
    <div>
        <ViewportTop />
        <Services />
        <Projects />
        <Contact />
    </div>
);

export default Home;
