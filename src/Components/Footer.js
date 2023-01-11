//import React, {Component} from 'react';
import React from 'react';


class Footer extends React.Component{
    render(){
        return(
            <div>

 <div className="footer">
  <img id="logo_m" width="150px" src="/assets/images/logo1_png.png" alt=""/>
  <div className="terms">
    <h5>
      {" "}
      Terms &amp; Conditions &nbsp; &nbsp; ● &nbsp; &nbsp; Privacy Policy &nbsp;
      &nbsp; ● &nbsp; &nbsp; Services
    </h5>
    <h6>
      BANGLORE, INDIA 
    </h6>
    <h7>
      +91 74066 49900
    </h7>
  </div>
  <div className="contact">
    <div className="grid-container">
      <div className="grid-item">
        <h5>info@niotact.com</h5>
      </div>
      <div className="grid-item">
        <img src="/assets/images/email_footer.png" width="20px" alt=""/>
      </div>
      <div className="grid-item">
        <h5> +91 74066 49900</h5>
      </div>
      <div className="grid-item">
        <img src="/assets/images/phone_footer.png" width="20px" alt=""/>
      </div>
    </div>
    {/*<h5> info@niotact.com </h5>*/}
    {/*<h5> +91 74066 49900  </h5>*/}
  </div>
</div>

    </div>
         
     )
  }
  }
export default Footer