import React from 'react';
import { Link } from 'react-router-dom';

class Managed extends React.Component{
    render(){
        return(
            <div> 
 
 ;<>
  {/* Header */}
  <div className="nav">
    <div className="logo">
      <img src="logo-final.png" alt=''/>
    </div>
    <div className="dropdowN">
      <button
        className="dropbtN"
        style={{
          width: "100%",
          height: "100%",
          zIndex: 1,
          fontSize: 28,
          color: "#179e9f"
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
          right: 0,
          lineHeight: 0,
          display: "none",
          top: 70
        }}
      >
        <Link to="index.html" style={{ marginTop: 8 }} title="index">
          HOME
        </Link>
        <hr style={{ margin: 8 }} />
        <Link to="about-us.html">ABOUT US</Link>
        <hr style={{ margin: 8 }} />
        <Link to="services.html">SERVICES</Link>
        <hr style={{ margin: 8 }} />
        <Link to="ourworks.html">Case Studies</Link>
        <hr style={{ margin: 8 }} />
        <Link to="error.html">BLOG</Link>
        <hr style={{ margin: 8 }} />
        <Link to="careers.html">CAREERS</Link>
        <hr style={{ margin: 8 }} />
        <Link to="contact.html" style={{ marginBottom: 8 }}>
          CONTACT
        </Link>
      </div>
    </div>
    <nav>
      <div id="menu">
        <ul id="trial" className>
          <li>
            {" "}
            <Link to="error.html" style={{ textDecoration: "none" }}>
              {" "}
              Blog{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="careers.html" style={{ textDecoration: "none" }}>
              {" "}
              Career{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="contact.html" style={{ textDecoration: "none" }}>
              {" "}
              Contact{" "}
            </Link>{" "}
          </li>{" "}
          <br />
          <li>
            {" "}
            <Link to="index.html" style={{ textDecoration: "none" }}>
              {" "}
              Home{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              to="about-us.html"
              style={{ textDecoration: "none" }}
              title="about us"
            >
              {" "}
              About Us{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              to="services.html"
              style={{ textDecoration: "underline", color: "#068775" }}
              title="services"
            >
              {" "}
              Services{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="ourworks.html" style={{ textDecoration: "none" }}>
              {" "}
              Case Studies{" "}
            </Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <Link id="back2Top" title="Back to top" to="#">
    {" "}
    <i className="fa fa-chevron-circle-up"> </i>
  </Link>
  <div className="loader-wrapper">
    <span className="loader">
      <span className="loader-inner" />
    </span>
  </div>
  <div className="wrapper" />
  {/*HEADER OVER*/}
  <div className="cont1">
    <div className="heading">
      <img src="rect.png" width="60px" style={{ float: "left" }} alt=''/>
      <h1 style={{ float: "right", lineHeight: "0.4" }}>
        {" "}
        MANAGED CLOUD SERVICES{" "}
      </h1>
    </div>
    <div className="text">
      <p>
        {" "}
        We offer end to end cloud management services with automated application
        monitoring mechanisms and alerts for a seamless cloud experience. Our
        managed services can be tailored to fit your unique business needs{" "}
      </p>
      <p>
        {" "}
        We also provide application maintenance services covering application
        monitoring, incident management,bug fixing, minor &amp; major
        enhancements. We make sure your applications run uninterrupted based on
        the business criticality.{" "}
      </p>
      <p> Key features of our services: </p>
      <ul>
        <li> Integrated Maintenance and support services </li>
        <li> Automated monitoring and health checks </li>
        <li> Proactive support </li>
        <li> Configuration Management </li>
        <li> Security and compliance monitoring </li>
        <li> 24/7 support window </li>
      </ul>
    </div>
  </div>
  <div id="footer" />
</>
   </div>
           )
     }
 }
 export default Managed