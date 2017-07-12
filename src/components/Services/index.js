import React from 'react';
import {Grid} from 'react-bootstrap';
import './index.css';
import {servicesMedia} from '../Home/components/Services/data/servicesMedia';
import Paper from 'material-ui/Paper';

const Services = () => (
    <div className="services">
        <div className="s-hero">

        </div>
        <Grid>
            <Paper zDepth={5} className="s-paper">
                {servicesMedia.map(function (s) {
                    return (
                        <div className="s-content" key={s.title}>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                        </div>
                    );
                })}
            </Paper>
        </Grid>
    </div>

);

export default Services;