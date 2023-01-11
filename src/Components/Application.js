//import React, {Component} from 'react';
import React from 'react';
//import { Link } from 'react-router-dom';

class Application extends React.Component{
    render(){
        return(
            <div> 
 
 
  {/*HEADER OVER*/}
  <div className="cont2_a">
    <div className="why">
      <h1>Cloud Application Services</h1>
      <h4> Design, Transform, Build, Manage </h4>
    </div>
    {/*<div class="grid-container">
			  <div class="grid-item j"><h3> Advise </h3></div>
			  <div class="grid-item i"><h3> Move to <br> Cloud </h3></div>
			  <div class="grid-item i"><h3> Build on <br> Cloud </h3></div>
			  <div class="grid-item k"><h3> Manage on <br> Cloud </h3></div>
			  <div class="grid-item t">
			  	<div class="text1">
			  		<p> Assess the current state of your IT landscape </p>
					<p> Create optimized cost efficient solution based on business needs </p>
					<p> Jointly develop a future roadmap with a compelling business case / TCO </p>
			    </div>
			  </div>
			  <div class="grid-item t">
			  	<div class="text2">
			        <p> Move applications to cloud environment, using proven, low-risk methodology and tools </p>
			</div>
			  </div>
			  <div class="grid-item t">
		  	      <div class="text3">
			        <p> Build new, cloud-native business-critical applications for the rapid creation of new business solutions </p>
					<p> Implement structural changes to the architecture of the application, applying APIs, integration and a microservices-based architecture </p>
			      </div>
			  </div>
			  <div class="grid-item t">
		  	      <div class="text4">
			        <p> Manage Cloud Landing zone </p>
					<p> Manage & Support Applications in Cloud </p>
					<p> Automated Monitoring & Health-checks </p>
					<p> Managed Cloud Security </p>
			      </div>
			  </div>    
			</div>*/}
    <div className="grid-container">
      <div className="grid-item">
        <h3 style={{ fontWeight: "lighter" }}> Design </h3>
        <img src="/assets/images/arrow.png" alt=''
          width="80%"
          style={{ marginLeft: "calc(10% - 20px)" }}
        />
      </div>
      <div className="grid-item">
        <h3 style={{ fontWeight: "lighter" }}> Transform </h3>
        <img src="/assets/images/arrow.png"
          width="80%" alt=''
          style={{ marginLeft: "calc(10% - 20px)" }}
        />
      </div>
      <div className="grid-item">
        <h3 style={{ fontWeight: "lighter" }}> Build </h3>
        <img src="/assets/images/arrow.png"
          width="80%" alt=''
          style={{ marginLeft: "calc(10% - 20px)" }}
        />
      </div>
      <div className="grid-item">
        <h3 style={{ fontWeight: "lighter" }}> Manage </h3>
        <img src="/assets/images/arrow.png"
          width="80%" alt=''
          style={{ marginLeft: "calc(10% - 20px)" }}
        />
      </div>
      <div className="grid-item t">
        <div className="text1">
          <p> Assess the current state of your IT landscape </p>
          <p>
            {" "}
            Create optimized cost efficient solution based on business needs{" "}
          </p>
          <p>
            {" "}
            Jointly develop a future roadmap with a compelling business case /
            TCO{" "}
          </p>
        </div>
      </div>
      <div className="grid-item t">
        <div className="text2">
          <p>
            {" "}
            Move applications to cloud environment, using proven, low-risk
            methodology and tools{" "}
          </p>
        </div>
      </div>
      <div className="grid-item t">
        <div className="text3">
          <p>
            {" "}
            Build new, cloud-native business-critical applications for the rapid
            creation of new business solutions{" "}
          </p>
          <p>
            {" "}
            Implement structural changes to the architecture of the application,
            applying APIs, integration and a microservices-based architecture{" "}
          </p>
        </div>
      </div>
      <div
        className="grid-item"
        style={{ padding: "0px 20px 0px 20px", textAlign: "left" }}
      >
        <div className="text4">
          <p> Manage Cloud Landing zone </p>
          <p> Manage &amp; Support Applications in Cloud </p>
          <p> Automated Monitoring &amp; Health-checks </p>
          <p> Managed Cloud Security </p>
        </div>
      </div>
    </div>
  </div>
  <div className="home_m">
    <h1>Cloud Application Services</h1>
    <h4> Design, Transform, Build, Manage </h4>
  </div>
  <div className="cont2_m">
    <img src="/assets/images/arrow_down.png" height="160px" id="#one" alt='' />
    <img src="/assets/images/arrow_down.png" height="160px" id="#two" alt=''/>
    <img src="/assets/images/arrow_down.png" height="160px" id="#three" alt=''/>
    <div className="grid-container">
      <div className="grid-item t">
        <h3 style={{ textAlign: "center", fontWeight: "lighter" }}> Design </h3>
        <div className="text1">
          <p> Assess the current state of your IT landscape </p>
          <p>
            {" "}
            Create optimized cost efficient solution based on business needs{" "}
          </p>
          <p>
            {" "}
            Jointly develop a future roadmap with a compelling business case /
            TCO{" "}
          </p>
        </div>
      </div>
      <div className="grid-item t">
        <br />
        <br />
        <h3 style={{ textAlign: "center", fontWeight: "lighter" }}>
          {" "}
          Transform{" "}
        </h3>
        <div className="text2">
          <p>
            {" "}
            Move applications to cloud environment, using proven, low-risk
            methodology and tools{" "}
          </p>
        </div>
      </div>
      <div className="grid-item t">
        <h3 style={{ textAlign: "center", fontWeight: "lighter" }}> Build </h3>
        <div className="text3">
          <p>
            {" "}
            Build new, cloud-native business-critical applications for the rapid
            creation of new business solutions{" "}
          </p>
          <p>
            {" "}
            Implement structural changes to the architecture of the application,
            applying APIs, integration and a microservices-based architecture{" "}
          </p>
        </div>
      </div>
      <div className="grid-item t">
        <br />
        <br />
        <h3 style={{ textAlign: "center", fontWeight: "lighter" }}> Manage </h3>
        <div className="text4">
          <p> Manage Cloud Landing zone </p>
          <p> Manage &amp; Support Applications in Cloud </p>
          <p> Automated Monitoring &amp; Health-checks </p>
          <p> Managed Cloud Security </p>
        </div>
      </div>
    </div>
  </div>
  <div className="cont1_a">
    <div className="text">
      <div className="top">
        <img src="/assets/images/circle.png" style={{ float: "left" }} alt=''/>
        <p style={{ float: "right", lineHeight: "0.2" }}>
          {" "}
          We will continually optimize and evolve your IT landscape to meet your
          demanding business <br />
          <br />
          <br />
          <br />
          <br />
          <br /> needs for today and the future.{" "}
        </p>
      </div>
      <div className="topm">
        <img src="/assets/images/circle.png" style={{ float: "left" }} alt=""/>
        <p style={{ float: "right", lineHeight: "1.2" }}>
          {" "}
          We will continually optimize and evolve your IT landscape to meet your
          demanding business needs for today and the future.{" "}
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>
        {" "}
        As a trusted partner, we can be the extended arm of your organization IT
        to define solutions, manage and develop new applications, enhance
        existing applications or assist to augment your IT team with flexible
        resourcing models.{" "}
      </p>
      <p> What we offer: </p>
      <ul style={{ paddingLeft: 20 }}>
        <li> Digital design and architecture </li>
        <li> Application modernization </li>
        <li>
          {" "}
          Cloud native custom application development – Define, Design, Build
          and Manage{" "}
        </li>
        <li> Enterprise Application Integration </li>
        <li> Kubernetes enablement </li>
      </ul>
    </div>
  </div>
  <div id="footer" />

            </div>
           )
     }
 }
 export default Application