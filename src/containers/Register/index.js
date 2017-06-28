import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css';

import {firebaseAuth} from '../../config/constants';
import {connect} from 'react-redux';
import {register} from './action';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        firebaseAuth().createUserWithEmailAndPassword(this.email.input.value, this.pw.input.value)
            .then(user => {
                this.props.register(user);
            }).catch(e => this.setState({error: e.message}))
    };

    render() {
        return (
            <div className="bsp-register">
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        floatingLabelText="Email"
                        ref={(email) => this.email = email}
                        type="email"
                    />
                    <br />
                    <TextField
                        floatingLabelText="Password"
                        ref={(pw) => this.pw = pw}
                        type="password"
                    />
                    <br />
                    <br />
                    {
                        this.state.error &&
                        <span>{this.state.error}</span>
                    }
                    <RaisedButton
                        label="Sign Up"
                        type="submit"
                    />
                </form>
            </div>
        );
    }
}

export default connect(null, {register})(Register);