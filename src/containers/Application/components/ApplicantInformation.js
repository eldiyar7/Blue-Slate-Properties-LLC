import React from 'react';
import {Row, Col} from 'react-bootstrap';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import FormsyDate from 'formsy-material-ui/lib/FormsyDate';

class ApplicantInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            cellPhone: "",
            homePhone: "",
            ssn: "",
            dob: {},
            stepIndex: 0
        };

        this.next = this.next.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    componentWillMount() {
        const name = this.constructor.name.charAt(0).toLocaleLowerCase() + this.constructor.name.slice(1);
        if (this.props.obj[name]) {
            const obj = this.props.obj[name];
            this.setState(obj);
        }
    };

    handleChange(e, v) {
        if (e) {
            this.setState({
                ...this.state,
                [e.target.name]: e.target.value
            });
        }
        if (v instanceof Date) {
            this.setState({
                ...this.state,
                dob: v
            });
        }
    };

    next = () => {
        const obj = this.state;
        const name = this.constructor.name.charAt(0).toLocaleLowerCase() + this.constructor.name.slice(1);
        this.props.handleNext(obj, name);
    };

    render() {
        return (
            <Row>
                <Col sm={4}>
                    <FormsyText
                        name="fullName"
                        value={this.state.fullName}
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
                        value={this.state.dob}
                        required
                        floatingLabelText="Date of Birth"
                        mode="landscape"
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="ssn"
                        value={this.state.ssn}
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
                        value={this.state.email}
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
                        value={this.state.cellPhone}
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
                        value={this.state.homePhone}
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

export default ApplicantInformation;