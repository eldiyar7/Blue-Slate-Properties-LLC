import React from 'react';
import {Row, Col} from 'react-bootstrap';
import FormsyText from 'formsy-material-ui/lib/FormsyText';

class References extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            relationship: "",
            stepIndex: 6
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

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    next = () => {
        const obj = this.state;
        const name = this.constructor.name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
        this.props.handleNext(obj, name);
    };


    render() {
        return (
            <Row>
                <Col sm={4}>
                    <FormsyText
                        name="name"
                        value={this.state.name}
                        validations="isWords"
                        validationError="Please enter name."
                        onChange={this.handleChange}
                        floatingLabelText="Name"
                        hintText="ex: Victor Ayala"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="phone"
                        value={this.state.phone}
                        validations={{matchRegexp: /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/}}
                        validationError="Please provide valid cell phone number"
                        onChange={this.handleChange}
                        floatingLabelText="Phone"
                        type="text"
                        required
                    />
                </Col>
                <Col sm={4}>
                    <FormsyText
                        name="relationship"
                        value={this.state.relationship}
                        validations="isWords"
                        validationError="Please provide valid answer."
                        onChange={this.handleChange}
                        floatingLabelText="Relationship"
                        hintText="ex: wife"
                        type="text"
                        required
                    />
                </Col>
            </Row>
        );
    }
}

export default References;

