import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {List, ListItem} from 'material-ui/List';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import FormsyCheckbox from 'formsy-material-ui/lib/FormsyCheckbox';

class Agreement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deposit_amount: "",
            checked: false,
            stepIndex: 7
        };
        this.handleChange = this.handleChange.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.next = this.next.bind(this);

    };

    componentWillMount() {
        const name = this.constructor.name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
        if (this.props.obj[name]) {
            const obj = this.props.obj[name];
            this.setState(obj);
        }
    };

    handleChange(e, v) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    onCheck(e, v) {
        this.setState({
            ...this.state,
            [e.target.name]: v
        });
    }

    next = () => {
        const obj = this.state;
        const name = this.constructor.name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
        this.props.handleNext(obj, name);
    };


    render() {
        return (
            <Row>
                <Col sm={12}>
                    <h4>DEPOSIT WITH APPLICATION: MINIMUM $230 ($30 CREDIT NON-REFUNDABLE)
                        PLEASE MAKE CHECKS PAYABLE TO “Blue Slate Properties LLC”"</h4>
                    <FormsyText
                        name="deposit_amount"
                        value={this.state.deposit_amount}
                        validations="isFloat"
                        validationError="Please enter deposit amount only in numbers."
                        onChange={this.handleChange}
                        type="text"
                        hintText="Please enter deposit amount."
                        required
                    />
                    <List>
                        <ListItem
                            primaryText="I AUTHORIZE AGENTS OF “Blue Slate Properties”. TO PERFORM A CREDIT CHECK."/>
                        <ListItem
                            primaryText="IF APPLICANT IS ACCEPTED, THE DEPOSIT (    ABOVE) WILL APPLY TOWARDS THE SECURITY DEPOSIT DUE."/>
                        <ListItem primaryText="IF APPLICANT IS NOT ACCEPTED, $200.00 WILL BE REFUNDED. "/>
                        <ListItem
                            primaryText="PRIOR TO MOVE IN, APPLICANT WILL SIGN A LEASE, AND PAY THE BALANCE OF THE SECURITY DEPOSIT AND THE FIRST MONTH RENT."/>
                        <ListItem
                            primaryText="IF APPLICANT BACKS OUT FOR ANY REASON AFTER APPROVAL, APPLICANT FORFEIT THE DEPOSIT OF $230."/>
                    </List>
                    <h4>IMPORTANT NOTE: “Blue Slate Properties or its agents” WILL NOT BE RESPONSIBLE FOR
                        PERSONAL PROPERTY. CONSULT AN INSURANCE AGENT FOR PROPER COVERAGE. NO
                        DOGS OR WATERBEDS ACCEPTED.</h4>
                    <FormsyCheckbox
                        name="checked"
                        label="I agree to the therms and conditions"
                        checked={this.state.checked}
                        onChange={this.onCheck}
                        required="isFalse"
                    />
                </Col>
            </Row>
        );
    }
}

export default Agreement;

