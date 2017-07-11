import React from 'react';
import {Grid} from 'react-bootstrap';
import './index.css';
import {servicesMedia} from '../Home/components/Services/data/servicesMedia';
import Paper from 'material-ui/Paper';

const Services = () => (
    <Grid className="services">
        <Paper>
            {servicesMedia.map(function (s) {
                return (
                    <div className="content">
                        <h3>{s.title}</h3>
                        <p>{s.text}</p>
                    </div>
                );
            })}
        </Paper>
    </Grid>
);

export default Services;