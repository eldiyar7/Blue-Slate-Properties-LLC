import React from 'react';
import states from './states.json';
import {Row, Col} from 'react-bootstrap';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import FormsySelect from 'formsy-material-ui/lib/FormsySelect';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';

class PreviousResidence extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            city: "",
            state: "",
            zip: "",
            rent: "",
            date: "",
            owner_managers_name: "",
            owner_managers_phone: "",
            stepIndex: 2
        };
        this.handleChange = this.handleChange.bind(this);
        this.stateHandler = this.stateHandler.bind(this);
        this.next = this.next.bind(this);

    }

    componentWillMount() {
        const name = this.constructor.name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
        if (this.props.obj[name]) {
            const obj = this.props.obj[name];
            this.setState(obj);
        }
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    stateHandler = (e, v) => {
        this.setState({
            ...this.state,
            state: v
        });
    };

    next = () => {
        const obj = this.state;
        const name = this.constructor.name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
        this.props.handleNext(obj, name);
    };

    render() {
        return (
            <div>
                <Subheader>Previous Residence</Subheader>
                <Row>
                    <Col sm={3}>
                        <FormsyText
                            name="address"
                            value={this.state.address}
                            onChange={this.handleChange}
                            validations="isExisty"
                            validationError="Please provide valid current address."
                            floatingLabelText="Address"
                            hintText="4527 N Greenview Ave, Apt #3"
                            type="text"
                            required
                        />
                    </Col>
                    <Col sm={3}>
                        <FormsyText
                            name="city"
                            value={this.state.city}
                            validations="isWords"
                            validationError="Please provide valid city"
                            onChange={this.handleChange}
                            floatingLabelText="City"
                            type="text"
                            required
                        />
                    </Col>
                    <Col sm={3}>
                        <FormsySelect
                            name="state"
                            onChange={this.stateHandler}
                            value={this.state.state}
                            required
                            floatingLabelText="State"
                        >
                            {states.map(function (s) {
                                return (
                                    <MenuItem value={s.name} primaryText={s.abbreviation} key={s.abbreviation}/>
                                );
                            })}
                        </FormsySelect>
                    </Col>
                    <Col sm={3}>
                        <FormsyText
                            name="zip"
                            value={this.state.zip}
                            validations={{matchRegexp: /(^\d{5}$)|(^\d{5}-\d{4}$)/}}
                            validationError="Please provide valid zipcode"
                            onChange={this.handleChange}
                            floatingLabelText="ZIP"
                            type="text"
                            required
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <FormsyText
                            name="rent"
                            value={this.state.rent}
                            onChange={this.handleChange}
                            validations="isFloat"
                            validationError="Please provide monthly rent amount in numbers"
                            floatingLabelText="Monthly Rent"
                            hintText="1200"
                            type="text"
                            required
                        />
                    </Col>
                    <Col sm={3}>
                        <FormsyText
                            name="date"
                            value={this.state.date}
                            onChange={this.handleChange}
                            validationError="Dates of residency (From/To)"
                            floatingLabelText="Dates of residency (From/To)"
                            hintText="15 Jan 2015 to 20 Jan 2017"
                            type="text"
                            required
                        />
                    </Col>
                    <Col sm={3}>
                        <FormsyText
                            name="owner_managers_name"
                            value={this.state.owner_managers_name}
                            validations="isWords"
                            validationError="Please provide owner or managers name"
                            onChange={this.handleChange}
                            floatingLabelText="Owner/Manager's Name"
                            type="text"
                            required
                        />
                    </Col>
                    <Col sm={3}>
                        <FormsyText
                            name="owner_managers_phone"
                            value={this.state.owner_managers_phone}
                            validations={{matchRegexp: /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/}}
                            validationError="Please provide valid cell phone number"
                            onChange={this.handleChange}
                            floatingLabelText="Phone number"
                            type="text"
                            required
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PreviousResidence;