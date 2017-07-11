import React from 'react';
import _ from 'lodash';
import Formsy from 'formsy-react';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Grid} from 'react-bootstrap';
import Dialog from 'material-ui/Dialog';

import ApplicantInformation from './components/ApplicantInformation';
import CurrentResidence from './components/RentalHistory/CurrentResidence';
import PreviousResidence from './components/RentalHistory/PreviousResidence';
import CurrentEmployer from './components/EmploymentHistory/CurrentEmployer';
import PreviousEmployer from './components/EmploymentHistory/PreviousEmployer';
import CreditHistory from './components/CreditHistory';
import References from './components/References';
import Agreement from './components/Agreement';

import axios from 'axios';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canSubmit: false,
            stepIndex: 0,
            open: false,
            errors: []
        };
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.getStepContent = this.getStepContent.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    enableButton() {
        this.setState({canSubmit: true});
    }

    disableButton() {
        this.setState({canSubmit: false});
    }

    submitForm = () => {
        const {
            applicant_information,
            current_residence,
            previous_residence,
            current_employer,
            previous_employer,
            credit_history,
            references,
            agreement
        } = this.state;

        axios({
            method: 'post',
            url: '/api/applicants',
            data: {
                applicant_information: applicant_information,
                current_residence: current_residence,
                previous_residence: previous_residence,
                current_employer: current_employer,
                previous_employer: previous_employer,
                credit_history: credit_history,
                references: references,
                agreement: agreement
            }
        }).then((response) => {
            console.log(response);

        }).catch(function (error) {
            console.log(error);
        });

        console.log(this.state);
        alert(JSON.stringify(this.state, null, 4));
    };

    getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <ApplicantInformation ref={instance => {
                    this.child = instance;
                }} handleNext={this.handleNext} obj={this.state}/>;
            case 1:
                return <CurrentResidence ref={instance => {
                    this.child = instance;
                }} handleNext={this.handleNext} obj={this.state}/>;
            case 2:
                return <PreviousResidence ref={instance => {
                    this.child = instance;
                }} handleNext={this.handleNext} obj={this.state}/>;
            case 3:
                return <CurrentEmployer ref={instance => {
                    this.child = instance;
                }} handleNext={this.handleNext} obj={this.state}/>;
            case 4:
                return <PreviousEmployer ref={instance => {
                    this.child = instance;
                }} handleNext={this.handleNext} obj={this.state}/>;
            case 5:
                return <CreditHistory ref={instance => {
                    this.child = instance;
                }} handleNext={this.handleNext} obj={this.state}/>;
            case 6:
                return <References ref={instance => {
                    this.child = instance;
                }} handleNext={this.handleNext} obj={this.state}/>;
            case 7:
                return <Agreement ref={instance => {
                    this.child = instance;
                }} handleNext={this.handleNext} obj={this.state}/>;
            case 8:
                return <h1>Please press the submit button to submit the application form.</h1>;
            default:
                return 'Please fill out the application form.';
        }
    };

    handleNext = (obj, name) => {

        axios({
            method: 'post',
            url: '/api/validate',
            data: {
                [name]: obj
            }
        }).then((response) => {
            if (response.data === "OK") {
                this.setState({
                    ...this.state,
                    [name]: obj,
                    stepIndex: obj.stepIndex + 1,
                    errors: []
                });
            }

            else {
                this.setState({
                    open: true,
                    errors: response.data
                });
            }

        }).catch(function (error) {
            console.log(error);
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;

        if (stepIndex > 0) {
            this.setState({
                ...this.state,
                stepIndex: stepIndex - 1
            });
        }
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {stepIndex} = this.state;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />];
        return (
            <Grid style={{marginTop: 50}}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>Applicant Information</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Rental History</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Rental History</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Employment History</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Employment History</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Credit History</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>References</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Therms and Conditions</StepLabel>
                    </Step>
                </Stepper>
                <Paper zDepth={5}>
                    <Formsy.Form ref="form"
                                 onValid={this.enableButton}
                                 onInvalid={this.disableButton}
                                 style={{padding: 20}}
                    >

                        {this.getStepContent(stepIndex)}

                        <div style={{marginTop: 12}}>
                            <FlatButton
                                label="Back"
                                disabled={stepIndex === 0}
                                onTouchTap={this.handlePrev}
                                style={{marginRight: 12}}
                            />
                            {this.state.stepIndex === 8
                                ? <RaisedButton
                                    label="Submit"
                                    primary={true}
                                    onTouchTap={this.submitForm}
                                />
                                : <RaisedButton
                                    label="Next"
                                    primary={true}
                                    disabled={!this.state.canSubmit}
                                    onTouchTap={() => {
                                        this.child.next();
                                    }}
                                />
                            }
                        </div>
                    </Formsy.Form>
                    <div>
                        <Dialog
                            title="Validation Errors"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            <ul style={{listStyle: "none", color: "red"}}>
                                {this.state.errors.map((err) => <li key={_.uniqueId()}>{err.msg}</li>)}
                            </ul>
                        </Dialog>
                    </div>
                </Paper>
            </Grid>
        );
    }
}

export default Application;
