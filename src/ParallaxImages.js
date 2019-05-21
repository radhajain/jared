import React, {Component } from 'react';
import { ParallaxProvider, Parallax, ParallaxBanner, withController } from 'react-scroll-parallax';
import './ParallaxImages.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from './assets/2017Images/Image 13.png';
import img2 from './assets/2017Images/Image 18.png';
import img3 from './assets/2017Images/Image 24.png';
import img4 from './assets/2017Images/Image 60.png';
import img5 from './assets/2017Images/Image 67.png';
import img6 from './assets/2017Images/Image 68.png';
import img7 from './assets/2017Images/Image 73.png';
import img8 from './assets/2017Images/Image 77.png';
import img9 from './assets/2017Images/Image 78.png';
import img10 from './assets/2017Images/Image 8.png';
import img11 from './assets/2017Images/Mask Group 15.png';
import img12 from './assets/2017Images/Mask Group 17.png';
import img13 from './assets/2017Images/Mask Group 18.png';
import img14 from './assets/2017Images/Mask Group 19.png';
import img15 from './assets/2017Images/Mask Group 20.png';
import img16 from './assets/2017Images/Mask Group 41.png';
import img17 from './assets/2017Images/Mask Group 42.png';




class ParallaxImages extends Component {
    constructor(props) {
        super(props);
        // this.handleLoad = this.handleLoad.bind(this);
    }
    
    // handleLoad = () => {
    //     // updates cached values after image dimensions have loaded
    //     this.props.parallaxController.update();
    // };

    render() {
        return (
            <div className="container-parallax-image-flow">
                <Carousel infiniteLoop={true} autoPlay={true} transitionTime={150} dynamicHeight>
                    <div className="p-image"><img src={img1} className="p-photo"/></div>
                    <div className="p-image"><img src={img2} className="p-photo"/></div>
                    <div className="p-image"><img src={img3} className="p-photo"/></div>
                    <div className="p-image"><img src={img4} className="p-photo"/></div>
                    <div className="p-image"><img src={img5} className="p-photo"/></div>
                    <div className="p-image"><img src={img6} className="p-photo"/></div>
                    <div className="p-image"><img src={img7} className="p-photo"/></div>
                    <div className="p-image"><img src={img8} className="p-photo"/></div>
                    <div className="p-image"><img src={img9} className="p-photo"/></div>
                    <div className="p-image"><img src={img10} className="p-photo"/></div>
                    <div className="p-image"><img src={img11} className="p-photo"/></div>
                    <div className="p-image"><img src={img12} className="p-photo"/></div>
                    <div className="p-image"><img src={img13} className="p-photo"/></div>
                    <div className="p-image"><img src={img14} className="p-photo"/></div>
                    <div className="p-image"><img src={img15} className="p-photo"/></div>
                    <div className="p-image"><img src={img16} className="p-photo"/></div>
                    <div className="p-image"><img src={img17} className="p-photo"/></div>
                </Carousel>




                {/* <Parallax className="p-image" y={[-30, 30]} x={[-20, 20]} >
                    <div><img src={img1} onLoad={this.handleLoad}/></div>
                </Parallax>
                <Parallax className="p-image" y={[-30, 30]} x={[-10, 10]} >
                    <div><img src={img2}onLoad={this.handleLoad}/></div>
                </Parallax>
                <Parallax className="p-image" y={[-30, 30]} x={[10, -10]}>
                    <div><img src={img3} onLoad={this.handleLoad}/></div>
                </Parallax>
                <Parallax className="p-image" y={[-30, 30]} x={[20, -20]}>
                    <div><img src={img4} onLoad={this.handleLoad}/></div>
                </Parallax>
                <Parallax className="p-image" y={[-30, 30]} x={[-20, 20]}>
                    <div><img src={img5} onLoad={this.handleLoad}/></div>
                </Parallax>
                <Parallax className="p-image" y={[-30, 30]} x={[-10, 10]}>
                    <div><img src={img6} onLoad={this.handleLoad}/></div>
                </Parallax>
                <Parallax className="p-image" y={[-30, 30]} x={[10, -10]}>
                    <div><img src={img7} onLoad={this.handleLoad}/></div>
                </Parallax>
                <Parallax className="p-image" y={[-30, 30]} x={[20, -20]}>
                    <div><img src={img8} onLoad={this.handleLoad}/></div>
                </Parallax>
                <Parallax className="p-image" y={[-30, 30]} x={[-10, 10]}>
                    <div><img src={img9} onLoad={this.handleLoad}/></div>
                </Parallax>
                <Parallax className="p-image" y={[-30, 30]} x={[20, -20]}>
                    <div><img src={img10} onLoad={this.handleLoad}/></div>
                </Parallax>
                <Parallax className="p-image" y={[-30, 30]} x={[-30, 10]}>
                    <div><img src={img11} onLoad={this.handleLoad}/></div>
                </Parallax>
                <Parallax className="p-image" y={[-30, 30]} x={[10, -20]}>
                    <div><img src={img12} onLoad={this.handleLoad}/></div>
                </Parallax> */}
        
            </div>
        );
    }
}

export default withController(ParallaxImages);