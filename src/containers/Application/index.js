import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import FormsyDate from 'formsy-material-ui/lib/FormsyDate';
import FormsySelect from 'formsy-material-ui/lib/FormsySelect';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';

import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import states from './states.json';

class ApplicantInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applicant: {
                fullName: "",
                email: "",
                cellPhone: "",
                homePhone: "",
                ssn: "",
                dob: {}
            }
        }
        this.handleChange = this.handleChange.bind(this);
    };

    componentWillMount() {
        console.log(this.props.model);
        if (this.props.model) {
            this.setState({
                ...this.state,
                applicant: this.props.model
            });
        }
    }

    handleChange(e, v) {
        if (e) {
            this.setState({
                ...this.state,
                applicant: {
                    ...this.state.applicant,
                    [e.target.name]: e.target.value
                }
            });
        }

        if (v && v instanceof Date) {
            // let dateObj = new Date(v);
            // let month = dateObj.getUTCMonth() + 1; //months from 1-12
            // let day = dateObj.getUTCDate();
            // let year = dateObj.getUTCFullYear();
            // const dob = `${month}-${day}-${year}`;

            this.setState({
                ...this.state,
                applicant: {
                    ...this.state.applicant,
                    dob: v
                }
            });
        }
    };

    render() {
        return (
            <Row>
                <Col sm={4}>
                    <FormsyText
                        name="fullName"
                        value={this.state.applicant.fullName}
                        validations="isWords"
                        validationError="Please enter your full name."
                        onChange={this.handleChange}
                        floatingLabelText="Full Name"
                        hintText="ex: Victor Ayala"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyDate
                        onChange={this.handleChange}
                        name="dob"
                        value={this.state.applicant.dob}
                        required
                        floatingLabelText="Date of Birth"
                        mode="landscape"
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="ssn"
                        value={this.state.applicant.ssn}
                        validations={{matchRegexp: /^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/}}
                        validationError="Please provide valid social security number"
                        onChange={this.handleChange}
                        floatingLabelText="SSN"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="email"
                        value={this.state.applicant.email}
                        validations="isEmail"
                        validationError="Please provide an email"
                        onChange={this.handleChange}
                        floatingLabelText="Email"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="cellPhone"
                        value={this.state.applicant.cellPhone}
                        validations={{matchRegexp: /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/}}
                        validationError="Please provide valid cell phone number"
                        onChange={this.handleChange}
                        floatingLabelText="Cell phone"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="homePhone"
                        value={this.state.applicant.homePhone}
                        validations={{matchRegexp: /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/}}
                        validationError="Please provide valid home phone number"
                        onChange={this.handleChange}
                        floatingLabelText="Home phone"
                        type="text"
                        required
                    />
                </Col>
            </Row>
        );
    }
}

class RentalHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rentalHistory: {
                currentResidence: {
                    address: "",
                    city: "",
                    state: "",
                    zip: "",
                    rent: "",
                    date: "",
                    ownerManagersName: "",
                    ownerManagersPhone: ""
                }
            }
        };
        this.handleChange2 = this.handleChange2.bind(this);
        this.stateHandler = this.stateHandler.bind(this);
    }

    handleChange2(e) {
        this.setState({
            ...this.state,
            rentalHistory: {
                ...this.state.rentalHistory,
                currentResidence: {
                    ...this.state.rentalHistory.currentResidence,
                    [e.target.name]: e.target.value
                }
            }
        });
    }

    stateHandler(e, v) {
        this.setState({
            ...this.state,
            rentalHistory: {
                ...this.state.rentalHistory,
                currentResidence: {
                    ...this.state.rentalHistory.currentResidence,
                    state: v
                }
            }
        });
    }

    render() {
        return (
            <Row>
                <Col sm={3}>
                    <FormsyText
                        name="address"
                        value={this.state.rentalHistory.currentResidence.address}
                        validations="isExisty"
                        validationError="Please provide valid address"
                        onChange={this.handleChange2}
                        floatingLabelText="Address"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={3}>
                    <FormsyText
                        name="city"
                        value={this.state.rentalHistory.currentResidence.city}
                        validations="isWords"
                        validationError="Please provide valid city"
                        onChange={this.handleChange2}
                        floatingLabelText="City"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={3}>
                    <FormsySelect
                        name="state"
                        onChange={this.stateHandler}
                        required
                        floatingLabelText="State"
                    >
                        {states.map(function (s) {
                            return (
                                <MenuItem value={s.name} primaryText={s.abbreviation} key={s.abbreviation}/>
                            );
                        })}
                    </FormsySelect>
                </Col>
                <Col sm={3}>
                    <FormsyText
                        name="zip"
                        value={this.state.rentalHistory.currentResidence.zip}
                        validations={{matchRegexp: /(^\d{5}$)|(^\d{5}-\d{4}$)/}}
                        validationError="Please provide valid zipcode"
                        onChange={this.handleChange2}
                        floatingLabelText="ZIP"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="rent"
                        value={this.state.rentalHistory.currentResidence.rent}
                        validations="isFloat"
                        validationError="Please provide monthly rent amount"
                        onChange={this.handleChange2}
                        floatingLabelText="Monthly Rent"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="date"
                        value={this.state.rentalHistory.currentResidence.date}
                        validationError="Dates of residency (From/To)"
                        onChange={this.handleChange2}
                        floatingLabelText="Dates of residency (From/To)"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={3}>
                    <FormsyText
                        name="ownerManagersName"
                        value={this.state.rentalHistory.currentResidence.ownerManagersName}
                        validations="isWords"
                        validationError="Please provide owner or managers name"
                        onChange={this.handleChange}
                        floatingLabelText="Owner/Manager's Name"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="ownerManagersPhone"
                        value={this.state.rentalHistory.currentResidence.ownerManagersPhone}
                        validations={{matchRegexp: /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/}}
                        validationError="Please provide valid cell phone number"
                        onChange={this.handleChange}
                        floatingLabelText="Phone number"
                        type="text"
                        required
                    />
                </Col>
            </Row>
        );
    }
}


class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canSubmit: false,
            stepIndex: 0,
            finished: false
        };
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.getStepContent = this.getStepContent.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    enableButton() {
        this.setState({canSubmit: true});
    }

    disableButton() {
        this.setState({canSubmit: false});
    }

    submitForm(data) {
        console.log(data);
        alert(JSON.stringify(data, null, 4));
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <ApplicantInformation model={this.state['applicant']}/>;
            case 1:
                return <RentalHistory/>;
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    handleNext = () => {
        const model = this.refs.form.getModel();
        this.setState({
            ...this.state,
            applicant: model
        });
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    render() {
        const {stepIndex} = this.state;

        return (
            <Grid style={{marginTop: '100px'}}>

                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>Applicant Information</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Rental History</StepLabel>
                    </Step>
                </Stepper>

                <Paper zDepth={5}>
                    <Formsy.Form ref="form"
                                 onValid={this.enableButton}
                                 onInvalid={this.disableButton}
                                 onValidSubmit={this.submitForm}
                    >
                        {this.getStepContent(stepIndex)}
                        <FlatButton
                            label="Back"
                            disabled={stepIndex === 0}
                            onTouchTap={this.handlePrev}
                            style={{marginRight: 12}}
                        />
                        <RaisedButton
                            label={stepIndex === 2 ? 'Finish' : 'Next'}
                            primary={true}
                            onTouchTap={this.handleNext}
                            disabled={!this.state.canSubmit}
                        />
                        {/*<RaisedButton*/}
                        {/*type="submit"*/}
                        {/*label="Submit"*/}
                        {/*disabled={!this.state.canSubmit}*/}
                        {/*/>*/}
                    </Formsy.Form>
                </Paper>

            </Grid>
        );
    }
}

export default Application;
