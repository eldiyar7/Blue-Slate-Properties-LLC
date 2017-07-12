import React from 'react';
import {Row, Col} from 'react-bootstrap';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import FormsyDate from 'formsy-material-ui/lib/FormsyDate';
import Subheader from 'material-ui/Subheader';

class PreviousEmployer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employer: "",
            occupation: "",
            employer_address: "",
            employer_phone: "",
            employment_date: {},
            supervisor: "",
            salary: "",
            stepIndex: 4
        };
        this.handleChange = this.handleChange.bind(this);
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
        if (e) {
            this.setState({
                ...this.state,
                [e.target.name]: e.target.value
            });
        }

        if (v instanceof Date) {
            this.setState({
                ...this.state,
                employment_date: v
            });
        }
    };

    next = () => {
        const obj = this.state;
        const name = this.constructor.name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
        this.props.handleNext(obj, name);
    };


    render() {
        return (
            <Row>
                <Subheader>Previous Employer</Subheader>
                <Col sm={4}>
                    <FormsyText
                        name="employer"
                        value={this.state.employer}
                        validations="isWords"
                        validationError="Please enter your employer name."
                        onChange={this.handleChange}
                        floatingLabelText="Previous Employer"
                        type="text"
                        // required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="occupation"
                        value={this.state.occupation}
                        validations="isWords"
                        validationError="Please enter your ocupation."
                        onChange={this.handleChange}
                        floatingLabelText="Occupation"
                        type="text"
                        // required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="employer_address"
                        value={this.state.employer_address}
                        validations="isExisty"
                        validationError="Please enter your employer address."
                        onChange={this.handleChange}
                        floatingLabelText="Employer Address"
                        type="text"
                        // required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="employer_phone"
                        value={this.state.employer_phone}
                        validations={{matchRegexp: /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/}}
                        validationError="Please provide valid cell phone number."
                        onChange={this.handleChange}
                        floatingLabelText="Employer's Phone"
                        type="text"
                        // required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyDate
                        onChange={this.handleChange}
                        name="employment_date"
                        value={this.state.employment_date}
                        floatingLabelText="Employment Date"
                        mode="landscape"
                        // required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="supervisor"
                        value={this.state.supervisor}
                        validations="isWords"
                        validationError="Please enter your supervisor name."
                        onChange={this.handleChange}
                        floatingLabelText="Supervisor Name"
                        type="text"
                        // required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="Monthly Pay"
                        value={this.state.salary}
                        onChange={this.handleChange}
                        validations="isFloat"
                        validationError="Please provide your monthly income."
                        floatingLabelText="Monthly Pay"
                        hintText="3200"
                        type="text"
                        // required
                    />
                </Col>
            </Row>
        );
    }
}

export default PreviousEmployer;