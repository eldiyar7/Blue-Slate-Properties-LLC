import React from 'react';
import {Row, Col} from 'react-bootstrap';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import Subheader from 'material-ui/Subheader';

class CreditHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checking_account: "",
            savings_account: "",
            credit_card: "",
            auto_loan: "",
            additional_debt: "",
            stepIndex: 5
        };
        this.handleChange = this.handleChange.bind(this);
        this.next = this.next.bind(this);

    };

    componentWillMount() {
        if (this.props.obj) {
            const obj = this.props.obj;
            this.setState(obj);
        }
    };

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    next = () => {
        const obj = this.state;
        this.props.handleNext(obj);
    };

    render() {
        return (
            <Row>
                <Subheader>Balance on deposit or Balance owed</Subheader>
                <Col sm={12}>
                    <FormsyText
                        name="checking_account"
                        value={this.state.checking_account}
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
                        name="savings_account"
                        value={this.state.savings_account}
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
                        name="credit_card"
                        value={this.state.credit_card}
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
                        name="auto_loan"
                        value={this.state.auto_loan}
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
                        name="additional_debt"
                        value={this.state.additional_debt}
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