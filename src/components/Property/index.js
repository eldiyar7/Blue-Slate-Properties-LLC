import React from 'react';
import {Grid} from 'react-bootstrap';
import Photos from "./components/Photos/index";
import Info from "./components/Info/index";

class Property extends React.Component {
    render() {
        return (
            <Grid style={{marginTop: "51px"}}>
                <Photos apt={this.props.location.state.property.apt}/>
                <Info apt={this.props.location.state.property.apt}/>
            </Grid>
        );
    }
}

export default Property;
