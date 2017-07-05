import React from 'react';
import {Row, Col} from 'react-bootstrap';
import FormsyText from 'formsy-material-ui/lib/FormsyText';

class References extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reference: {
                name: "",
                phone: "",
                relationship: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
    };

    componentWillMount() {
        if (this.props.model) {
            this.setState({
                ...this.state,
                reference: this.props.model
            });
        }
    }

    handleChange(e, v) {
        this.setState({
            ...this.state,
            reference: {
                ...this.state.reference,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return (
            <Row>
                <Col sm={4}>
                    <FormsyText
                        name="name"
                        value={this.state.reference.name}
                        validations="isWords"
                        validationError="Please enter reference name."
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
                        value={this.state.reference.phone}
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
                        value={this.state.reference.relationship}
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

