import React from 'react';

import ViewportTop from './components/ViewportTop';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

class Home extends React.Component {
    render() {
        return (
            <div>
                <ViewportTop />
                <Services />
                <Projects />
                <Contact />
            </div>
        );
    }
}

export default Home;
