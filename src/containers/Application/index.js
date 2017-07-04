import React from 'react';
import Formsy from 'formsy-react';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Grid} from 'react-bootstrap';

import ApplicantInformation from './components/ApplicantInformation';
import CurrentResidence from './components/RentalHistory/CurrentResidence';
import PreviousResidence from './components/RentalHistory/PreviousResidence';
import CurrentEmployer from './components/EmploymentHistory/CurrentEmployer';
import PreviousEmployer from './components/EmploymentHistory/PreviousEmployer';
import CreditHistory from './components/CreditHistory';

class Application extends React.Component {
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
            },
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
                },
                previousResidence: {
                    address: "",
                    city: "",
                    state: "",
                    zip: "",
                    rent: "",
                    date: "",
                    ownerManagersName: "",
                    ownerManagersPhone: ""
                }
            },
            employmentHistory: {
                currentEmployer: {
                    employer: "",
                    occupation: "",
                    employerAddress: "",
                    employerPhone: "",
                    employmentDate: {},
                    supervisor: "",
                    salary: ""
                },
                previousEmployer: {
                    employer: "",
                    occupation: "",
                    employerAddress: "",
                    employerPhone: "",
                    employmentDate: {},
                    supervisor: "",
                    salary: ""
                }
            },
            creditHistory: {
                checkingAccount: "",
                savingsAccount: "",
                creditCard: "",
                autoLoan: "",
                additionalDebt: ""
            },
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
                return <ApplicantInformation model={this.state.applicant}/>;
            case 1:
                return <CurrentResidence model={this.state.rentalHistory.currentResidence }/>;
            case 2:
                return <PreviousResidence model={this.state.rentalHistory.previousResidence }/>;
            case 3:
                return <CurrentEmployer model={this.state.employmentHistory.currentEmployer}/>;
            case 4:
                return <PreviousEmployer model={this.state.employmentHistory.previousEmployer}/>;
            case 5:
                return <CreditHistory model={this.state.creditHistory}/>;
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    handleNext = () => {
        const model = this.refs.form.getModel();

        switch (this.state.stepIndex) {
            case 0:
                this.setState({...this.state, applicant: model});
                break;
            case 1:
                this.setState({
                    ...this.state,
                    rentalHistory: {
                        ...this.state.rentalHistory,
                        currentResidence: model
                    }
                });
                break;
            case 2:
                this.setState({
                    ...this.state,
                    rentalHistory: {
                        ...this.state.rentalHistory,
                        previousResidence: model
                    }
                });
                break;
            case 3:
                this.setState({
                    ...this.state,
                    employmentHistory: {
                        ...this.state.employmentHistory,
                        currentEmployer: model
                    }
                });
                break;
            case 4:
                this.setState({
                    ...this.state,
                    employmentHistory: {
                        ...this.state.employmentHistory,
                        previousEmployer: model
                    }
                });
                break;
            case 5:
                this.setState({...this.state, creditHistory: model});
                break;

            default:
                return this.state;
        }

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

    // let dateObj = new Date(v);
    // let month = dateObj.getUTCMonth() + 1; //months from 1-12
    // let day = dateObj.getUTCDate();
    // let year = dateObj.getUTCFullYear();
    // const dob = `${month}-${day}-${year}`;

    render() {
        const {stepIndex} = this.state;
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
                </Stepper>
                <Paper zDepth={5}>
                    <Formsy.Form ref="form"
                                 onValid={this.enableButton}
                                 onInvalid={this.disableButton}
                                 onValidSubmit={this.submitForm}
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
                            <RaisedButton
                                label={stepIndex === 6  ? 'Finish' : 'Next'}
                                primary={true}
                                onTouchTap={this.handleNext}
                                disabled={!this.state.canSubmit}
                            />
                        </div>
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
