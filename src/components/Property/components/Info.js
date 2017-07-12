import React from 'react';
import {
  Row,
  Col,
  Accordion,
  Panel
} from 'react-bootstrap';
import Badge from 'material-ui/Badge';


class Units extends React.Component {
  render() {
    return (
      <div className="unit-group">
        <div className="total-units">
          <Badge badgeContent={this.props.units.length} primary="true">available units</Badge>
        </div>
        <div className="bedroom-group">
          <Accordion>
            {this.props.units.map(function(unit) {
              return (
                <Panel header={unit.bedroom} eventKey={unit} key={unit.bedroom}>
                  <img src={unit.floorplan} className="img-responsive" alt=""></img>
                </Panel>
              );
            })}
          </Accordion>
        </div>
      </div>
    );
  }
}

const Info = (props) => (
  <Row className="info-row">
    <Col sm={7}>
      <div className="address-group">
        <h1>{props.apt.neighbourhood}</h1>
        <h5>{props.apt.address}</h5>
      </div>
      {props.apt.units
        ? <Units units={props.apt.units}/>
        : false}
      <div className="description-group">
        <h1>Reside On {props.apt.title}</h1>
        <p>{props.apt.description}</p>
      </div>
    </Col>
    <Col sm={5}>
      <div className="estimate-group">
        <div className="status-group">
          <span className="status-row">
            <i className="fa fa-dot-circle-o" aria-hidden="true"></i>
            {props.apt.status}
          </span>
        </div>
        <div className="price-group">
          <span className="price-row">${props.apt.price}
            <span className="price-suffix">/mo</span>
          </span>
        </div>
      </div>
    </Col>
  </Row>
);

export default Info;
