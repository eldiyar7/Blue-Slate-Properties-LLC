import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import Slider from 'react-slick';

let apartment = [
  {
    "status": "Elston Timber Lofts",
    "neighbourhood": "Old Town",
    "description": "",
    "price": 1500,
    "beds": 2,
    "baths": 1,
    "area": 1300,
    "address": "3641 N Elston Ave, Chicago, IL 60645",
    "mainPicture": require('../images/apartment-1/project-1.jpg'),
    "pictures": [
      require('../images/apartment-1/img-1.jpg'),
      require('../images/apartment-1/img-2.jpg'),
      require('../images/apartment-1/img-3.jpg'),
      require('../images/apartment-1/img-4.jpg'),
      require('../images/apartment-1/img-5.jpg'),
      require('../images/apartment-1/img-6.jpg'),
      require('../images/apartment-1/img-7.jpg'),
      require('../images/apartment-1/house-1.jpg'),
      require('../images/apartment-1/house-2.jpg'),
      require('../images/apartment-1/house-3.jpg'),
      require('../images/apartment-1/house-4.jpg'),
      require('../images/apartment-1/house-5.jpg')
    ]
  }, {
    "status": "New",
    "neighbourhood": "Old Town",
    "price": 2200,
    "beds": 5,
    "baths": 2,
    "area": 5000,
    "address": "625 W Division St, Chicago, IL 60610",
    "mainPicture": require('../images/apartment-2/project-2.jpg'),
    "pictures": [
      require('../images/apartment-2/img-1.jpg'),
      require('../images/apartment-2/img-2.jpg'),
      require('../images/apartment-2/img-3.jpg'),
      require('../images/apartment-2/img-4.jpg'),
      require('../images/apartment-2/img-5.jpg'),
      require('../images/apartment-2/img-6.jpg'),
      require('../images/apartment-2/img-7.jpg')
    ]
  }, {
    "status": "For Rent",
    "title": "Beautiful Greenview Apartments",
    "neighbourhood": "Lakeview",
    "description": `Live on beautiful Greenview area in sunny large 1-2 bedroom, 1 bathroom apartment units.Lovely green lawns and beautiful flowers await resident in Greenview, Illinois. Our 1-and 2-bedroom garden apartments for rent on 3 distinctive floor plans have spacious separate living and dining rooms, large bedrooms, hardwood flooring, and tones of closets! Great layout! Heat is included! Great walkup building! The building has laundry and storage lockers for your convenience.Walk to   the Red line and Brown line trains, shopping, restaurants, and much more!`,
    "units": [
      {
        "bedroom": "studio",
        "floorplan": require('../images/apartment-3/units/1-bedroom.jpg')
      },
      {
        "bedroom": "2 bedroom",
        "floorplan": require('../images/apartment-3/units/2-bedroom.jpg')
      }
    ],
    "price": 3000,
    "beds": 6,
    "baths": 3,
    "area": 6000,
    "address": "4525-29 N Greenview Ave Chicago 60640",
    "mainPicture": require('../images/apartment-3/project-3.jpg'),
    "pictures": [require('../images/apartment-3/img-1.jpg'), require('../images/apartment-3/img-2.jpg'), require('../images/apartment-3/img-3.jpg'), require('../images/apartment-3/img-4.jpg')]

  }, {
    "status": "New",
    "title": "Luxury Gold Cost Apartments",
    "neighbourhood": "Old Town",
    "price": 3000,
    "beds": 2,
    "baths": 1,
    "area": 2000,
    "address": "625 W Division St, Chicago, IL 60618",
    "mainPicture": require('../images/apartment-4/project-4.jpg'),
    "pictures": [
      require('../images/apartment-4/img-1.jpg'),
      require('../images/apartment-4/img-2.jpg'),
      require('../images/apartment-4/img-3.jpg'),
      require('../images/apartment-4/img-4.jpg'),
      require('../images/apartment-4/img-5.jpg'),
      require('../images/apartment-4/img-6.jpg')
    ]
  }
];

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
      slidesToShow: this.state.width < 576 ? 1 : this.state.width > 575 && this.state.width < 768 ? 2 : this.state.width > 767 && this.state.width < 992 ? 3 : 4,
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
                <div className="listing-wrapper" key={apt.address}>
                  <Link to={{
                    pathname: `property/${apt.address.replace(/\s+/g, '-').toLowerCase()}`,
                    state: {
                      property: {
                        apt: apt
                      }
                    }
                  }} onClick={this.updateApartment.bind(null, apt)}>
                    <img src={apt.mainPicture} className="img-responsive" alt=""/></Link>
                  <div className="listing-caption">
                    <h4>{apt.status}</h4>
                    <p>
                    <span style={{
                      fontSize: "2em",
                      lineHeight: "0"
                    }}>$ {apt.price}</span>
                      <span style={{
                        marginLeft: "6px"
                      }}>
                      {apt.beds}
                        <i className="fa fa-bed"/>
                      <span className="interpunct">.</span>
                        {apt.baths}
                        <i className="fa fa-bath"/>
                      <span className="interpunct">.</span>
                        {apt.area}
                        sqft
                    </span>
                    </p>
                    <p style={{
                      lineHeight: "0"
                    }}>{apt.address}</p>
                  </div>
                </div>
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
