import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// https://github.com/callemall/material-ui/issues/4670
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

injectTapEventPlugin();


class App extends React.Component {

    render(props) {
        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    {this.props.children}
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
