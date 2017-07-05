import React from 'react';
import {Grid} from 'react-bootstrap';
import Photos from "./components/photos";
import Info from "./components/info";

class Property extends React.Component {
    render() {
        return (
            <Grid className="bsp-property">
                <Photos apt={this.props.location.state.property.apt}/>
                <Info apt={this.props.location.state.property.apt}/>
            </Grid>
        );
    }
}

export default Property;