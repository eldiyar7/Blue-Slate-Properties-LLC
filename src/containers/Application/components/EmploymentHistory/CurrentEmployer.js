import React from 'react';
import {Row, Col} from 'react-bootstrap';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import FormsyDate from 'formsy-material-ui/lib/FormsyDate';

class CurrentEmployer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentEmployer: {
                employer: "",
                occupation: "",
                employerAddress: "",
                employerPhone: "",
                employmentDate: {},
                supervisor: "",
                salary: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
    };

    componentWillMount() {
        if (this.props.model) {
            this.setState({
                ...this.state,
                currentEmployer: this.props.model
            });
        }
    }

    handleChange(e, v) {
        if(e) {
            this.setState({
                ...this.state,
                currentEmployer: {
                    ...this.state.currentEmployer,
                    [e.target.name]: e.target.value
                }
            });
        }

        if (v instanceof Date) {
            this.setState({
                ...this.state,
                currentEmployer: {
                    ...this.state.currentEmployer,
                    employmentDate: v
                }
            });
        }
    };

    render() {
        return (
            <Row>
                <Col sm={4}>
                    <FormsyText
                        name="employer"
                        value={this.state.currentEmployer.employer}
                        validations="isWords"
                        validationError="Please enter your employer name."
                        onChange={this.handleChange}
                        floatingLabelText="Current Employer"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="occupation"
                        value={this.state.currentEmployer.occupation}
                        validations="isWords"
                        validationError="Please enter your ocupation."
                        onChange={this.handleChange}
                        floatingLabelText="Occupation"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="employerAddress"
                        value={this.state.currentEmployer.employerAddress}
                        validations="isExisty"
                        validationError="Please enter your employer address."
                        onChange={this.handleChange}
                        floatingLabelText="Employer Address"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="employerPhone"
                        value={this.state.currentEmployer.employerPhone}
                        validations={{matchRegexp: /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/}}
                        validationError="Please provide valid cell phone number."
                        onChange={this.handleChange}
                        floatingLabelText="Employer's Phone"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyDate
                        onChange={this.handleChange}
                        name="employmentDate"
                        value={this.state.currentEmployer.employmentDate}
                        required
                        floatingLabelText="Employment Date"
                        mode="landscape"
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="supervisor"
                        value={this.state.currentEmployer.supervisor}
                        validations="isWords"
                        validationError="Please enter your supervisor name."
                        onChange={this.handleChange}
                        floatingLabelText="Supervisor Name"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="Monthly Pay"
                        value={this.state.currentEmployer.salary}
                        onChange={this.handleChange}
                        validations="isFloat"
                        validationError="Please provide your monthly income."
                        floatingLabelText="Monthly Pay"
                        hintText="3200"
                        type="text"
                        required
                    />
                </Col>
            </Row>
        );
    }
}

export default CurrentEmployer;