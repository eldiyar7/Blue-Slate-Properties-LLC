import React from 'react';
import {Row, Col} from 'react-bootstrap';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import Subheader from 'material-ui/Subheader';

class CreditHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creditHistory: {
                checkingAccount: "",
                savingsAccount: "",
                creditCard: "",
                autoLoan: "",
                additionalDebt: "",
            }
        };
        this.handleChange = this.handleChange.bind(this);
    };

    componentWillMount() {
        if (this.props.model) {
            this.setState({
                ...this.state,
                applicant: this.props.model
            });
        }
    }

    handleChange(e, v) {
        this.setState({
            ...this.state,
            creditHistory: {
                ...this.state.creditHistory,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return (
            <Row>
                <Subheader>Balance on deposit or Balance owed</Subheader>
                <Col sm={12}>
                    <FormsyText
                        name="checkingAccount"
                        value={this.state.creditHistory.checkingAccount}
                        validations="isFloat"
                        validationError=""
                        onChange={this.handleChange}
                        floatingLabelText="Checking Account"
                        floatingLabelFixed={true}
                        type="text"
                        required
                    />
                </Col>
                <Col sm={12}>
                    <FormsyText
                        name="savingsAccount"
                        value={this.state.creditHistory.savingsAccount}
                        validations="isFloat"
                        validationError=""
                        onChange={this.handleChange}
                        floatingLabelText="Savings Account"
                        floatingLabelFixed={true}
                        type="text"
                        required
                    />
                </Col>
                <Col sm={12}>
                    <FormsyText
                        name="creditCard"
                        value={this.state.creditHistory.creditCard}
                        validations="isFloat"
                        validationError=""
                        onChange={this.handleChange}
                        floatingLabelText="Credit Card"
                        floatingLabelFixed={true}
                        type="text"
                        required
                    />
                </Col>
                <Col sm={12}>
                    <FormsyText
                        name="autoLoan"
                        value={this.state.creditHistory.autoLoan}
                        validations="isFloat"
                        validationError=""
                        onChange={this.handleChange}
                        floatingLabelText="Auto Loan"
                        floatingLabelFixed={true}
                        type="text"
                        required
                    />
                </Col>
                <Col sm={12}>
                    <FormsyText
                        name="additionalDebt"
                        value={this.state.creditHistory.additionalDebt}
                        validations="isFloat"
                        validationError=""
                        onChange={this.handleChange}
                        floatingLabelText="Additional Debt"
                        floatingLabelFixed={true}
                        type="text"
                        required
                    />
                </Col>
            </Row>
        );
    }
}

export default CreditHistory;