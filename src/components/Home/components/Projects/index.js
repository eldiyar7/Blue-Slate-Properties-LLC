import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import {Card, CardHeader, CardMedia} from 'material-ui/Card';
import Slider from 'react-slick';
import {apartment} from './data/apartmentMedia';
import './index.css';

const Caption = (props) => (
    <div className="caption">
        <p>
            <span className="price">$ {props.apt.price}</span>
            <span className="info">
                {props.apt.beds} <i className="fa fa-bed"/>
                <span className="interpunct">.</span>
                {props.apt.baths} <i className="fa fa-bath"/>
                <span className="interpunct">.</span>
                {props.apt.area} sqft
            </span>
        </p>
        <p>
            <span className="address">{props.apt.address}</span>
        </p>
    </div>
);

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartments: apartment,
            selectedApartment: null,
            width: '0',
            height: '0'
        };
        this.updateApartment = this.updateApartment.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateApartment(this.state.selectedApartment);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    updateApartment(apt) {
        this.setState(function () {
            return {selectedApartment: apt};
        });
    }

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: this.state.width < 576 ? 1
                : this.state.width > 575 && this.state.width < 768 ? 2
                    : this.state.width > 767 && this.state.width < 992 ? 3
                        : 4,
            slidesToScroll: 1
        };

        return (
            <Grid className="bsp-projects">
                <Row>
                    <Col sm={12}>
                        <h2>Apartments</h2>
                    </Col>
                </Row>
                <Row>
                    <Slider {...settings}>
                        {this.state.apartments.map(function (apt) {
                            return (
                                <Card key={apt.address}>
                                    <Link to={{
                                        pathname: `property/${apt.address.replace(/\s+/g, '-').toLowerCase()}`,
                                        state: {
                                            property: {
                                                apt: apt
                                            }
                                        }
                                    }} onClick={this.updateApartment.bind(null, apt)}>
                                        <CardHeader
                                            title={apt.title}
                                            subtitle={apt.status}
                                            textStyle={{paddingRight: "2px"}}
                                        />
                                        <CardMedia overlay={<Caption apt={apt}/>}>
                                            <img src={apt.mainPicture} alt=""/>
                                        </CardMedia>
                                    </Link>
                                </Card>
                            );
                        }, this)}
                    </Slider>
                    {!this.state.selectedApartment
                        ? false
                        : <Redirect to="/property/:address"/>}
                </Row>
            </Grid>
        );
    }
}

export default Projects;
