import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import Dialog from 'material-ui/Dialog';
import './index.css';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import {firebaseAuth} from '../../config/constants';
import SignInDialog from './components/SignInDialog';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authed: false,
            dialog: false
        };
        this.openDialog = this.openDialog.bind(this);
        this.logout = this.logout.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
    }

    componentWillMount() {
        firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                this.setState({
                    authed: true
                })
                this.closeDialog();

            } else {
                // No user is signed in.
                this.setState({
                    authed: false
                })
            }
        });
    };

    logout() {
        firebaseAuth().signOut();
    };

    openDialog() {
        this.setState({
            dialog: true
        });
    };

    closeDialog() {
        this.setState({
            dialog: false
        });
    }

    render() {
        const actions = [
            <NavigationClose
                onClick={this.closeDialog}
            />
        ];
        return (
            <div>
                <Navbar fixedTop fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <NavLink exact to="/">Blue Slate Properties</NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer activeClassName="active" to="/application">
                                <NavItem>Application</NavItem>
                            </LinkContainer>
                            <LinkContainer activeClassName="active" to="/services">
                                <NavItem>Services</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/">
                                {this.state.authed
                                    ? <NavItem onClick={this.logout}>Sign Out</NavItem>
                                    : <NavItem onClick={this.openDialog}>Sign In</NavItem> }
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Dialog
                    open={this.state.dialog}
                    onRequestClose={this.closeDialog}
                    bodyStyle={{padding: 0}}
                    actions={actions}
                    contentStyle={{maxWidth: '363px'}}
                >
                    <SignInDialog />
                </Dialog>
            </div>
        );
    }
}

export default Header;
