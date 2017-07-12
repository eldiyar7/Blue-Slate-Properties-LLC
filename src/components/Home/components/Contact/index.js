import React from 'react';
import firebase from 'firebase';
import _ from 'lodash';
import {Grid, Row, Col} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import './index.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
            disableSubmit: true,
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // events are nullified inside the callback, pass cached to var event to callback func
        let targetInput = e.target;

        // update this.state after input change
        this.setState({[targetInput.name]: targetInput.value}, () => {
            let errors = Object.assign({}, this.state.errors);

            switch (targetInput.name) {
                case "name":
                    if (this.state.name.length > 1) {
                        errors['name'] = '';
                        delete errors['name'];
                    }
                    else {
                        errors['name'] = 'Name is required';
                    }
                    break;
                case "email":
                    if (this.state.email.match(/^\S+@\S+\.\S+$/)) {
                        errors['email'] = '';
                        delete errors['email'];
                    } else {
                        errors['email'] = 'Please enter valid email address';
                    }
                    break;
                case "phone":
                    if (this.state.phone.match(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/)) {
                        errors['phone'] = '';
                        delete errors['phone'];
                    } else {
                        errors['phone'] = 'Please enter valid phone number';
                    }
                    break;

                default:
                    return null;
            }

            // checking for this.state.errors AFTER assigning errors to scope's errors object
            this.setState({errors}, () => {
                const isValid = Object.keys(this.state.errors).length === 0 && (!!this.state.phone);

                if (isValid) {
                    this.setState({disableSubmit: false})
                } else {
                    this.setState({disableSubmit: true})
                }
            });

        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const {name, email, phone, message} = this.state;

        firebase.database().ref('user-' + _.uniqueId()).set({
            username: name,
            email: email,
            phone : phone,
            message: message
        }).then(() => window.location.reload());

    }

    render() {
        return (
            <Grid className="bsp-contact">
                <Row>
                    <Col sm={12}>
                        <div>
                            <h2>Contact Us</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Paper zDepth={5}>
                            <form onSubmit={this.handleSubmit}>
                                <TextField
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    floatingLabelText="name"
                                    type="text"
                                    errorText={this.state.errors['name']}
                                />
                                <br/>
                                <TextField
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    floatingLabelText="email"
                                    errorText={this.state.errors.email}
                                />
                                <br/>
                                <TextField
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    floatingLabelText="phone"
                                    errorText={this.state.errors.phone}
                                    type="tel"
                                />
                                <br/>
                                <TextField
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    floatingLabelText="message"
                                    type="textarea"
                                    multiLine={true}
                                />
                                <br/>
                                <RaisedButton
                                    primary={true}
                                    label="send"
                                    type="submit"
                                    disabled={this.state.disableSubmit}
                                />
                            </form>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Contact;
