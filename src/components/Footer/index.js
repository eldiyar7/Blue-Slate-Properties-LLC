import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const footerRow = {
    fontSize: "14px",
    color: "#ccc",
    margin: "auto",
    padding: "20px 0px"
};

const copyright = {
    display: "inline-block",
    margin: "0 20px",
    verticalAlign: "middle"
};

const social = {
    display: "inline-block",
    margin: "0 20px",
    verticalAlign: "middle"
};

const socialLinks = {
    marginRight: "15px",
    color: "#ccc",
    fontSize: "14px",
    cursor: "pointer"
};


const Footer = () => (
    <Grid fluid style={{backgroundColor: "#131317", marginTop: '100px'}}>
        <Row>
            <Col sm={6} style={footerRow}>
                <ul style={{listStyle: "none", paddingLeft: "0"}}>
                    <li style={copyright}>
                        &copy; Blue Slate Properties, LLC. All Rights Reserved.
                    </li>
                    <li style={social}>
                        <div>
                            <span style={{margin: "0 20px"}}>Follow Us</span>
                            <a style={socialLinks}><i className="fa fa-facebook"/></a>
                            <a style={socialLinks}><i className="fa fa-instagram"/></a>
                            <a style={socialLinks}><i className="fa fa-twitter"/></a>
                        </div>
                    </li>
                </ul>
            </Col>
        </Row>
    </Grid>
);

export default Footer;




