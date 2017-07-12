import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import {servicesMedia} from './data/servicesMedia';
import {Link} from 'react-router-dom';

class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: servicesMedia,
            selectedService: servicesMedia[0]
        };
        this.updateService = this.updateService.bind(this);
    }

    updateService(s) {
        this.setState(function () {
            return {selectedService: s}
        })
    }

    render() {
        return (
            <Grid className="bsp-services">
                <Row>
                    <Col sm={12}>
                        <h2>Services</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={5} xs={6}>
                        <ul className="circle-container">
                            {this.state.services.map(function (s) {
                                return (
                                    <li onMouseOver={this.updateService.bind(null, s)} key={s.title}><a
                                        href="/">{s.logo}</a></li>
                                );
                            }, this)}
                        </ul>
                    </Col>
                    <Col md={8} sm={7} xs={6}>
                        <ul className="services-container">
                            <li>
                                <div className="service-item">
                                    <div className="header">
                                        <h4>{this.state.selectedService.title}</h4>
                                    </div>
                                    <div className="body">
                                        <p>{this.state.selectedService.text}</p>
                                    </div>
                                    <div className="footer">
                                        <Link to="/services"><RaisedButton label="View More" primary={true}/></Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Services;
