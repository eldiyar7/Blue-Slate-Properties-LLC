import React from 'react';
import {Row, Col} from 'react-bootstrap';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import FormsyDate from 'formsy-material-ui/lib/FormsyDate';

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

export default ApplicantInformation;