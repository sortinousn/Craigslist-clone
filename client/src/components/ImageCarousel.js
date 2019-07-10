import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import logo from '../images/logo.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.postImages
        };
    }

    renderImages = () => {
        if (this.props.postImages) {
            // if user hasn't provided images
            if (this.props.postImages.length === 0) {
                return (
                    <div style={{background: 'white'}}>
                        <img src={logo} />
                    </div>
                )
            }

            return this.props.postImages.map((image, i) => {
                return (
                    <div key={`${image}-${i}`}>
                        <img src={image} />
                        {console.log('hi')}
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className="image-carousel__outer">
                <Carousel showArrows={true} infiniteLoop={true} useKeyboardArrows={true}>
                    {this.renderImages()}
                </Carousel>
            </div>
        )
    }
}

export default ImageCarousel;