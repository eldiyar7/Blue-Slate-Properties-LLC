import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan900
} from 'material-ui/styles/colors';
// https://github.com/callemall/material-ui/issues/4670
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

import {firebaseAuth} from '../../config/constants';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    // TODO
    palette: {
        primary1Color: cyan900
    }
});

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        firebaseAuth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user.emailVerified);
            } else {
                //TODO
            }
        });
    }

    render(props) {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
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
