import React from 'react';
//import React, { Component } from "react";
import { NavLink,} from 'react-router-dom';


class Header extends React.Component{
  render(){
    return (
        <div>
            <header>
            <div className="nav">
    <div className="logo">
      <img src="/assets/images/logo1_png.png" alt=""/>
    </div>
    <div className="dropdowN">
      <button
        className="dropbtN"
        style={{
          width: "100%",
          height: "100%",
          zIndex: 1,
          fontSize: 28,
          backgroundColor: "#12575d",
          color: "white",
          borderRadius: 5
        }}
      >
        <i className="fa fa-bars" />
      </button>
      <div
        id="dropdown-contenT"
        style={{
          zIndex: 1,
          float: "right",
          fontSize: 12,
          right: 10,
          lineHeight: 0,
          display: "none",
          top: 70,
          width: 150,
          borderRadius: 5
        }}
      >
        <NavLink to="/" style={{ marginTop: 8 }} title="index">
          Home
        </NavLink>
        <hr style={{ margin: 8 }} />
        <NavLink to="./Aboutus.js">AboutUs</NavLink>
        <hr style={{ margin: 8 }} />
        <NavLink to="./Cloud.js">Cloud Fast Start</NavLink>
        <hr style={{ margin: 8 }} />
        <NavLink to="./Application"> Cloud Application Services</NavLink>
        <hr style={{ margin: 8 }} />
        <NavLink to="./Mcloud">
          Managed Cloud <br /> Services
        </NavLink>
        <hr style={{ margin: 8 }} />
        <NavLink to="./casestudies">Case Studies</NavLink>
        <hr style={{ margin: 8 }} />
       <NavLink to="#">Blog</NavLink>
        <hr style={{ margin: 8 }} />
        <NavLink to="./careers">Careers</NavLink>
        <hr style={{ margin: 8 }} />
        <NavLink to="./contact" style={{ marginBottom: 8 }}>
          Contact
        </NavLink>
      </div>
    </div>
    <nav>
      <div id="menu">
        <ul id="trial" className=''>
        <li> 
            <NavLink to="/"
              style={{ textDecoration: "none" }}
              activeClassName="active"> 
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="./Aboutus"
              style={{ textDecoration: "none" }}
              title="about us">
              About Us
            </NavLink>
          </li>
          <li>
            <div className="subnav">
              <div className="subnavbtn">
                Services <i className="fa fa-caret-down" />
              </div>
              <div className="subnav-content">
                <NavLink to="./cloud">Cloud Fast Start</NavLink>
                <br />
                <NavLink to="./application">Cloud Application Services</NavLink>
                <br />
                <NavLink to="./mcloud">Managed Cloud Services</NavLink>
              </div>
            </div>
          </li>
          
         
          
          {/*<li> <a href="cloud.html" style="text-decoration: none;color: #068775;text-decoration: underline;" title="services"> Services </a> </li>*/}
          
          <li>
            <NavLink to="./Contact" style={{ textDecoration: "none" }}>
              
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    <div id="back2Top" title="Back to top" href="#">
    {" "}
    <i className="fa fa-chevron-circle-up"> </i>
  </div>
  <div className="loader-wrapper">
    <span className="loader">
      <span className="loader-inner" />
    </span>
  </div>
  <div className="wrapper" />
     </header>
        </div>
    )

  }
}

export default Header;