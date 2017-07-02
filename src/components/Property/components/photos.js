import React from 'react';
import Slider from 'react-slick';


class Photos extends React.Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        return (
            <div>
                <Slider {...settings}>
                    {this.props.apt.pictures.map(function (pic) {
                        return (
                            <div key={pic}>
                                <img src={pic} className="img-responsive" alt=""/>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}

export default Photos;
