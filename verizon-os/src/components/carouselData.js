import React, { Component } from 'react';
import { Link } from "gatsby";
import os1 from "../images/open-source-1.jpg";
import os2 from "../images/open-source-2.jpg";
import os3 from "../images/open-source-3.jpg"; 
import os4 from "../images/open-source-4.jpg"; 
import {  Title } from '@vds/typography';
import { Button } from '@vds/buttons';

class Slide1 extends Component {
    render() {
      return (<div className="slideData">
        <img src={ os1 } alt="os1"></img>
        <div className="slideTitle1">
            <Title size="large" color="#FFFFFF"> Welcome to Verizon Open Source. <br></br> We welcome and encourage contributions. </Title>
            <br></br>
            <Title size="large" color="#FFFFFF">Innovate. Collaborate. Learn. </Title>
        </div>
        <div className="slideButton1">
            <Link to="/community"><Button>Learn More</Button></Link>
        </div>
      </div>);
    };
}

class Slide2 extends Component {
  render() {
    return (<div className="slideData">
      <img src={ os3 } alt="os3"></img>
      <div className="slideTitle2">
          <Title size="large" color="#000000">YANG Validator</Title>
          <br></br>
          <Title size="small" bold={true} color="#00000">A project to help equipment vendors validate against OpenConfig YANG.</Title>
      </div>
      <div className="slideButton2">
          <Link to="https://github.com/Verizon/YANG-validator" target="_blank" rel="noreferrer"><Button>Project Details</Button></Link>
      </div>
    </div>);
  };
}

class Slide3 extends Component {
    render() {
      return (<div className="slideData">
        <img src={ os2 } alt="os2"></img>
        <div className="slideTitle3">
            <Title size="large" color="#FFFFFF"> Safecache </Title>
            <br></br>
            <Title size="small" bold={true} color="#FFFFFF">Thread-safe. Mutation-safe.</Title>
        </div>
        <div className="slideButton3">
            <Link to="https://github.com/Verizon/safecache" target="_blank" rel="noreferrer"><Button>Project Details</Button></Link>
        </div>
      </div>);
    };
  }


class Slide4 extends Component {
    render() {
      return (<div className="slideData">
        <img src={ os4 } alt="os4"></img>
        <div className="slideTitle4">
            <Title size="large" color="#000000">Redshell</Title>
            <br></br>
            <Title size="small" bold={true} color="#000000">Execute commands through proxychains. Automatically log them on a Cobalt Strike team server.</Title>
        </div>
        <div className="slideButton4">
        <Link to="https://github.com/Verizon/redshell" target="_blank" rel="noreferrer"><Button>Project Details</Button></Link>
        </div>
      </div>);
    };
  }
  
  export { Slide1, Slide2, Slide3, Slide4}