//import React from 'react';
import React, { Component } from 'react';
//import { Link,} from "react-router-dom";
class Home extends Component{
    render(){
        return(
            <div>
                      
  <div className="home">
    <h4> "YOUR TRUSTED DIGITAL PARTNER" </h4>
    <p>
    Niotact is a Digital Transformation company providing business and 
    <br></br>
    techincal solutions to thr Transportation, Manufacturing, Energy & Utilities Industries 
     <br />
<br />
<br></br>
Our Experts will help Clients to harness the business value enabled by
<br />
Cloud Digitization, including optmzing productivity and innovation 
<br />
while securing business continuity.
<br />
<br></br>
 We leverage on latest trends and technolgies in the market 
<br />
- Application Modernization, Digitization, Automation, Data Analytics
    </p>
  </div>
  
<div className="can1">
<h2 style={{ textAlign:"center", fontWeight:"bold"}}> OUR EXPERTISE </h2>
</div>
<div className="row">
<div className="image21">
<img src="/assets/images/Image21.png" width="300px"  style={{ top: 50,paddingLeft:100}} alt='' />
<p>
<ul style={{ listStyleType: "square", paddingLeft: 160, color:"black", fontSize:"14px"}}>
        
 <li>Consultancy Services<br/> </li>
 <li> Define Cloud Strategy <br/></li>
 <li> Cloud Migration <br/></li>
 <li> Cloud Native Custom <br/>
    application development<br/></li>
    <li>CI/CD DevSecOps Support </li>
    
    </ul>
</p>
</div>
<div className="image21">
<img src="/assets/images/Image22.png" width="300px"  style={{ top: 50,paddingLeft:70 }} alt='' />
<p>
<ul style={{ listStyleType: "square", paddingLeft: 150, color:"black",fontSize:"14px"}}>
<li> Digital Consultancy & <br/>
   Transformation <br/></li>
   <li> Setup Data Analytics Platform<br/></li>
   <li>  Design & Develop Analytics<br/>
    Solutions</li>
    </ul>
</p>
</div>

<div className="image21">
<img src="/assets/images/Image23.png" width="300px"  style={{ top: 50, paddingLeft:20 }} alt='' />
<p>
<ul style={{ listStyleType: "square", paddingLeft: 100, color:"black",fontSize:"14px"}}>
<li> Digital Design And architecture <br/></li>
<li> Application Modernization <br/> </li>
<li>Define, Design, Build And <br/>
  Manage <br/></li>
  <li> Enterprise Aplliaction <br/>
  Integeation <br/></li>
  <li>Kubernetes Enablement <br/></li>
  <li> Proof Of Concepts </li>
  </ul> 
</p>
</div>

<div className="image21">
<img src="/assets/images/Image24.png" width="300px"  style={{ top: 50,paddingRight:10 }} alt='' />
<p>
<ul style={{ listStyleType: "square", paddingLeft: 80, color:"black",fontSize:"14px",}}>
<li> Integeated Maintenance and <br/>
  Support Services <br/> </li>
  <li> Automated Monitoring and <br/>
  Health checks <br/> </li>
  <li> Proactive Support<br/> </li>
  <li> Configuration Management <br/> </li>
  <li> Security and Compliance <br/>
  Monitoring <br/> </li>
  <li> 24/7 Support Window <br/> </li>
  <li> Skill Augmentation </li>
  </ul>
</p>
</div>
</div>
  <div className="cont2">
    <h1 style={{ fontWeight: "bold" }}> Why Us? </h1>
    <div className="vl" />
    <p>
      {" "}
      At Niotact, we have the expertise to provide end-to-end solutions in
      cloud, either by setting up a green field cloud environment for your
      business or migrating &amp; transforming your existing application
      landscape to cloud. <br />
      <br />
      <br />
      Using state of the art industry best practices and tools – either to start
      a cloud migration journey or scaling up across your services, we help to
      optimize client value, while minimizing the risk and cost.
    </p>
  </div>

    <div className="cont_contact">
    <div className="cont_Image"/>
    <h1> REQUEST A DEMO  </h1>
    
    <h2>  We'll be in touch shortly to discuss our solutions for you </h2>
    <div className="Form1">
      <div className="wrapper3">
        <div className="font1" />
        <div className="contact-form">
          <div className="input-fields1">
            <br />
            <form>
              <img src="/assets/images/user.png" width="25px" className="formimg" style={{ top: 50 }} alt='' />
              <input className="input" type="name" required />
              <br />
              <img src="/assets/images/phone.png" width="25px" className="formimg" style={{ top: 120 }} alt=''/>
              <input className="input" type="email" required /> <br />
              <img src="/assets/images/mail.png" width="25px" className="formimg" style={{ top: 180 }} alt=''/>
              <input className="input" pattern="\d{10}" title="Please enter exactly 10 digits" type="tel"
                max={12} required />
              <br />
              <img src="/assets/images/msg.png" width="25px" className="formimg" style={{ top: 220 }} alt=''/>
              <textarea className="input" type="email" id="msgtxt" textarea="10px" required defaultValue={""} />
              <br />
              <button  type="submit" id="form-submit" className="btn" style={{ position: "relative", left:220, top:20 }} >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div id="footer"/>
</div>   
        )
    }
}
export default Home;