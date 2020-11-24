import React from "react";
import { Link } from "gatsby";

const Body = typeof window !== 'undefined' && require('@vds/typography').Body;

const Footer = () => (
  <footer>
    <div className="inner-footer">
      <div className="navigation">
        <nav>
          <Link to="/projects" style={{ textDecoration: 'none' }}><Body size="medium" bold={true} color="#FFFFFF">Projects</Body></Link>
          <Link to="/community" style={{ textDecoration: 'none' }}><Body size="medium" bold={true} color="#FFFFFF">Community</Body></Link>
          <a href="https://github.com/Verizon" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><Body size="medium" bold={true} color="#FFFFFF">Github</Body></a>

        </nav>
      </div>
       <div className="logos">
          <Body size="small" color="#FFFFFF">&#169;	 2020 Verizon</Body>
      </div> 
    </div>
  </footer>
)

export default Footer;