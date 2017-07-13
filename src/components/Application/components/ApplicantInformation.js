import React from 'react';
import {Row, Col} from 'react-bootstrap';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import FormsyDate from 'formsy-material-ui/lib/FormsyDate';

class ApplicantInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            full_name: "",
            email: "",
            cell_phone: "",
            home_phone: "",
            social_security_number: "",
            date_of_birth: {},
            stepIndex: 0
        };

        this.next = this.next.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    componentWillMount() {
        if (this.props.obj) {
            const obj = this.props.obj;
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
                date_of_birth: v
            });
        }
    };

    next = () => {
        const obj = this.state;
        this.props.handleNext(obj);
    };

    render() {
        return (
            <div>
                <Row>
                    <Col sm={4}>
                        <FormsyText
                            name="full_name"
                            value={this.state.full_name}
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
                            name="date_of_birth"
                            value={this.state.date_of_birth}
                            floatingLabelText="Date of Birth"
                            mode="landscape"
                            required
                        />
                    </Col>
                    <Col sm={4}>
                        <FormsyText
                            name="social_security_number"
                            value={this.state.social_security_number}
                            validations={{matchRegexp: /^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/}}
                            validationError="Please provide valid social security number"
                            onChange={this.handleChange}
                            floatingLabelText="SSN"
                            type="text"
                            required
                        />
                    </Col>
                </Row>
                <Row>
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
                            name="cell_phone"
                            value={this.state.cell_phone}
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
                            name="home_phone"
                            value={this.state.home_phone}
                            validations={{matchRegexp: /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/}}
                            validationError="Please provide valid home phone number"
                            onChange={this.handleChange}
                            floatingLabelText="Home phone"
                            type="text"
                            required
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ApplicantInformation;