import React, { Component } from 'react';
import './App.css';
import Timeline from './assets/timeline.png';
import Scroll from './assets/scroll.png';
import Rollover1 from './assets/rollover-1.png';
import Rollover2 from './assets/rollover-2.png';
import p116 from './assets/2016-p1.png';
import p216 from './assets/2016-p2.png';
import LeftSmallArrow from './assets/left-small-arrow.png';
import RightSmallArrow from './assets/right-small-arrow.png';
import p17 from './assets/2017.png';
import DownArrow from './assets/down-arrow.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Facetime1 from './assets/facetime-1.png';
import Facetime2 from './assets/facetime-2.png';
import Facetime3 from './assets/facetime-3.png';
import Facetime4 from './assets/facetime-4.png';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import r181 from './assets/r181.png';
import r182 from './assets/r182.png';
import r183 from './assets/r183.png';
import p19 from './assets/2019.png';
import { CSSTransition } from "react-transition-group-v2";
import Poem from './Poem';
import ParallaxImages from './ParallaxImages';
import { whileStatement } from '@babel/types';
import ReactTypingEffect from 'react-typing-effect';
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import headerImg from './assets/header.png';
import BlueArrow from './assets/blue-arrow.png';
import Eighteen from './Eighteen';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sixteenPage: 1
    };

    this.nextSixteenPage = this.nextSixteenPage.bind(this);
    this.prevSixteenPage = this.prevSixteenPage.bind(this);
  }

  nextSixteenPage() {
    var nextPage = this.state.sixteenPage + 1;
    if (nextPage == 4) {
      nextPage = 1;
    }
    this.setState({sixteenPage: nextPage});
  }

  prevSixteenPage() {
    var prevPage = this.state.sixteenPage - 1;
    if (prevPage == 0) {
      prevPage = 3
    }
    this.setState({sixteenPage: prevPage});
  }

  

  render () {
    const treePoem = `Love is a temporary madness, it erupts like volcanoes and then subsides. And when it subsides you have to make a decision. You have to work out whether your roots have so entwined together that it is inconceivable that you should ever part. Because this is what love is.

    Love is not breathlessness, it is not excitement, it is not the promulgation of promises of eternal passion. That is just being in love, which any fool can do. Love itself is what is left over when being in love has burned away, and this is both an art and a fortunate accident.

    Those that truly love have roots that grow towards each other underground, and, when all the pretty blossoms have fallen from their branches, they find that they are one tree and not two.`;

    const treeParas = treePoem.split('\n').map((item, key) => 
      <span key={key} className="mono text-white" style={{fontSize: 20}}>{item}<br/></span>
    );

    var sixteenPage;
    if (this.state.sixteenPage == 1) {
      sixteenPage = <img src={p116} style={{width: '100%', objectFit: 'contain'}}/>
    } else if (this.state.sixteenPage == 3) {
      sixteenPage = <img src={p216} style={{width: '100%', objectFit: 'contain'}}/>
    } else if (this.state.sixteenPage == 2){
      sixteenPage = (
        <div className="treePoem-container">
          {treeParas}
          <p className="text-white mono" style={{fontWeight: 'bold', fontSize: 22, marginTop: 20}}>We make a helluva tree.</p>
        </div>
      )
    }
   
    return (
      <ParallaxProvider>
      <div className="container-parent" style={{cursor: 'url(./assets/cursor-pointer.png), auto'}}>

        <div className="container-child bkg-blue">
        <ParallaxBanner 
            className="container-child-inner"
            layers={[ {
              image: {headerImg},
              amount: 0.3
            } ]}
            style={{width: '100%', height:'80%'}}>
          <div className="container-child-inner landing-bkg">
            <CSSTransition
              in={true}
              appear={true}
              timeout={1000}
              classNames="fade"
            >
              <div className="container-child1-infoBox">
                  <p className="playfair parallax-out" style={{marginBottom: 10}}>Ja<span className="text-rose parallax-out">red</span></p>
                  <p className="mono c1-subtitle">Wood and fur</p>
                  <hr />
                  <a href="#start-ref"><button className="explore-btn mono fade-animate-in">Explore</button></a>
              </div>
              </CSSTransition>
          </div>
          </ParallaxBanner>

        </div>
        <div className="container-child bkg-white" id="start-ref">
          <div className="container-child-inner">
            <div style={{width: '100%', textAlign: 'center'}}>
              <p className="playfair text-navy">A Short History of Nearly Everything</p>
                <div className="timeline-container"> 
                    <img src={Timeline} className="sliding-timeline"/>
                </div> 
              <img src={Scroll}/>
            </div>
          </div>
        
        </div>
        <div className="container-child bkg-purple">
          <div className="container-child-inner">
            <div>
              <Poem />
            </div>
            
          </div>
        
        </div>
        <div className="container-child bkg-rose">
          <div className="container-child-inner">
            <div style={{width: '100%', textAlign: 'center'}}>
              <p className="text-rose mono" style={{marginBottom: 30}}>KISS TO ACTIVATE</p>
              <img
                src={Rollover1}
                onMouseOver={e => (e.currentTarget.src = Rollover2)}
                onMouseOut={e => (e.currentTarget.src = Rollover1)}
                style={{maxWidth: '100%'}}
                className="kiss-picture-border"
              />
              <ReactTypingEffect className="playfair text-navy" style={{fontSize: '22px', marginTop: 20}} text="Let's take it from the top" />
              <img src={BlueArrow} style={{marginTop: 50}} className="fade-animate-in" />
            </div>
          </div>
        </div>
        <div className="container-child bkg-blue">
          <div className="container-child-inner tree-bkg" style={{flexDirection: 'column'}}>
            <p className="playfair text-white" style={{fontSize: 80, marginTop: 0, marginBottom: 40, position: 'absolute', top: '50px'}}>2016</p>
            <div style={{textAlign: 'center', alignContent: 'center', width: '75%'}}>
              <Pulse>
                {sixteenPage}
              </Pulse>
              <div style={{position: "absolute", bottom: 25, width: '75%'}}>
                <div style={{position: 'relative', margin: '0 auto'}}>
                  <img src={LeftSmallArrow} onClick={this.prevSixteenPage} style={{display: 'inline-block', cursor: 'pointer'}}/>
                  <p style={{display: 'inline-block', padding: '0px 15px', margin: '0px 0px', fontWeight: 'bold', fontSize: 22}} className="mono text-white">{this.state.sixteenPage} / 3</p>
                  <img src={RightSmallArrow} onClick={this.nextSixteenPage} style={{display: 'inline-block', cursor: 'pointer'}}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-child p17-bkg" >
          <ParallaxImages />
        </div>
        <div className="container-child bkg-rose-gradient">
          <div style={{textAlign: 'center'}}>
            <p className="playfair text-rose" style={{fontSize: 200, margin: 0}}>2018</p>
            <Fade>
              <img src={DownArrow} />
            </Fade>
          </div>
          <div>
          </div>
        </div>
        <div className="container-child bkg-white">
          <div className="container-child-inner">
            <Eighteen />
          </div>
        </div>
        <div className="container-child bkg-blue" style={{flexDirection: 'column'}}>
          <div style={{width: '25%'}}>
            <Carousel dynamicHeight showThumbs={false} infiniteLoop={true} autoPlay={true} showIndicators={false} transitionTime={150}>
              <div>
                <img src={Facetime1} />
              </div>
              <div>
                <img src={Facetime2} />
              </div>
              <div>
                <img src={Facetime3} style={{width: '80%'}}/>
              </div>
              <div>
                <img src={Facetime4} style={{width: '80%'}}/>
              </div>
            </Carousel>
          </div>
          <p className="playfair text-white" style={{textAlign: 'center', fontSize: 40}}>hi can i call now</p>
        </div>

        <div className="container-child bkg-white" style={{flexDirection: 'column'}}>
          <Fade top>
            <div className="container-child-inner" >
              <img src={p19} style={{height: '90%', objectFit: 'contain'}} />
            </div>
          </Fade>
        </div>

        <div className="container-child bkg-blue" style={{height: '100vh'}}>
          <div className="container-child-inner ending-bkg" style={{flexDirection: 'column'}}>
            <p className="mono text-white" style={{fontSize: 32, textAlign: 'center', width: '70%'}}>I honestly don’t think it can be done due to the limitations of language. So I’ll leave it with this: you absolutely blow me away with everything that you are and do, everyday. As long as I live I will always be your #1 fan. I am smitten and absolutely under your spell.</p>
            <ReactTypingEffect className="mono text-white" style={{fontSize: 32, textAlign: 'center', width: '70%'}} text="Jack Blaisdell, I really, truly, deeply and perfectly love you." />
          </div>
        </div>
      </div>
      </ParallaxProvider>
    );
  }
}

export default App;
