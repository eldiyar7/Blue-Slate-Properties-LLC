import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// https://github.com/callemall/material-ui/issues/4670
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from '../Header/index';
import Footer from '../Footer/index';


injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#607D8B'
    }
});

class App extends React.Component {

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
