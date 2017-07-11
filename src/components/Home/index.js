import React from 'react';

import ViewportTop from './components/viewportTop';
import Services from './components/services';
import Projects from './components/projects';
import Contact from './components/contact';

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
