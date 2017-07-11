import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {firebaseAuth} from '../../config/constants';

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
                //TODO
            }).catch(e => this.setState({error: e.message}))
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{textAlign: 'center'}}>
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
                    <span style={{display: "block", color: '#ff0033'}}>{this.state.error}</span>
                }
                <RaisedButton
                    label="Sign Up"
                    type="submit"
                    primary={true}
                />
            </form>
        );
    }
}

export default Register;