import React, { Component } from 'react';
import './Eighteen.css';
import img1 from './assets/2018Images/Mask Group 21.png';
import img2 from './assets/2018Images/Image 82.png';
import img3 from './assets/2018Images/Image 102.png';
import img4 from './assets/2018Images/Image 84.png';
import img44 from './assets/2018Images/Mask Group 50.png'
import img5 from './assets/2018Images/Mask Group 22.png';
import img6 from './assets/2018Images/Mask Group 23.png';
import img7 from './assets/2018Images/Mask Group 24.png';
import img8 from './assets/2018Images/Mask Group 25.png';
import img88 from './assets/2018Images/Mask Group 49.png';
import img9 from './assets/2018Images/Image 80.png';
import img10 from './assets/2018Images/Mask Group 26.png';
import img11 from './assets/2018Images/Mask Group 31.png';
import img12 from './assets/2018Images/Mask Group 28.png';
import img13 from './assets/2018Images/Mask Group 51.png';




function Eighteen() {
    return (
        <div style={{height: '100%', textAlign: 'center', width: '100%'}}>
            <div className="picture-outline">
                <div className="picture-outline-border">
                    <figure><img src={img1} className="img-grow-hover"/></figure>
                    <figure><img src={img2} className="img-grow-hover"/></figure>
                    <figure><img src={img3} className="img-grow-hover"/></figure>
                    <figure><img src={img4} className="img-grow-hover"/></figure>
                    <figure><img src={img44} className="img-grow-hover"/></figure>
                </div>
            </div> 
            <div className="picture-outline">
                <div className="picture-outline-border">
                    <figure><img src={img5} className="img-grow-hover"/></figure>
                    <figure><img src={img6} className="img-grow-hover"/></figure>
                    <figure><img src={img7} className="img-grow-hover"/></figure>
                    <figure><img src={img8} className="img-grow-hover"/></figure>
                    <figure><img src={img88} className="img-grow-hover"/></figure>
                </div>
            </div> 
            <div className="picture-outline">
                <div className="picture-outline-border">
                    <figure><img src={img9} className="img-grow-hover"/></figure>
                    <figure><img src={img10} className="img-grow-hover"/></figure>
                    <figure><img src={img11} className="img-grow-hover"/></figure>
                    <figure><img src={img12} className="img-grow-hover"/></figure>
                    <figure><img src={img13} className="img-grow-hover"/></figure>
                </div>
            </div> 
        </div>
    )
}

export default Eighteen;