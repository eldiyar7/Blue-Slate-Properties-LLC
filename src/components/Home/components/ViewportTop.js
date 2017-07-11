import React from 'react';
import {Carousel, CarouselItem, Grid, Row, Col} from 'react-bootstrap';
import '../index.css';

const viewportMedia = [
    {
        heroImg: 'http://s1.picswalls.com/wallpapers/2014/08/08/house-high-quality-wallpaper_015636679_148.jpg',
        captionTop: "Real Estate for",
        captionBottom: "Your World"
    },
    {
        heroImg: 'http://cdn1.buuteeq.com/upload/3142/463150-10150593556457217-1295987900-o.jpg.1920x1080_0_14_10000.jpg',
        captionTop: "Lifestyle is",
        captionBottom: "Where it Begins"
    },
    {
        heroImg: 'https://static.pexels.com/photos/261146/pexels-photo-261146.jpeg',
        captionTop: "It's your Journey",
        captionBottom: "We're here to help"
    }
];

const ViewportTop = () => (
    <Carousel className="bsp-carousel" controls={false} indicators={false}>
        {viewportMedia.map(function (media) {
            return (
                <CarouselItem className="bsp-carousel-item" key={media.heroImg}>
                    <img src={media.heroImg} alt=""/>
                    <Carousel.Caption className="bsp-carousel-caption">
                        <Grid>
                            <Row>
                                <Col sm={7} xsHidden>
                                    <h2 className="caption-text-top">{media.captionTop}</h2>
                                    <h1 className="caption-text-bottom">{media.captionBottom}</h1>
                                </Col>
                            </Row>
                        </Grid>
                    </Carousel.Caption>
                </CarouselItem>
            );
        })}
    </Carousel>
);

export default ViewportTop;
