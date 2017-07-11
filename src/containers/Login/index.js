import React from 'react';
import {firebaseAuth} from '../../config/constants';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
    }

    resetPassword = () => {
        firebaseAuth().sendPasswordResetEmail(this.email.input.value)
            .then(() => this.setState({error: `Password reset email sent to ${this.email.input.value}.`}))
            .catch((error) => this.setState({error: 'Email address not found.'}))
    };

    handleSubmit = (e) => {
        e.preventDefault();
        firebaseAuth().signInWithEmailAndPassword(this.email.input.value, this.pw.input.value)
            .then(user => {
                //user
            }).catch(e => this.setState({error: 'Invalid username/password.'}))
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
                    <div>
                        <span style={{display: "block", color: '#ff0033'}}>{this.state.error}</span>
                        <RaisedButton
                            label="Reset Password"
                            secondary={true}
                            onClick={this.resetPassword}>
                        </RaisedButton>
                    </div>
                }
                <br />
                <RaisedButton
                    label="Login"
                    type="submit"
                    primary={true}
                />
            </form>
        );
    }
}

export default Login;