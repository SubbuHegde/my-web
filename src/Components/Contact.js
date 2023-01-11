import React from 'react';
class Contact extends React.Component{
    render(){
        return(
            <div> 
            
      
  {/*HEADER OVER*/}
  <div className="cont">
    <h1> Drop Us A Query And We'll Be In Touch Soon </h1>
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
              <img
                src="/assets/images/phone.png"
                width="25px"
                className="formimg"
                style={{ top: 130 }}
              alt=''/>
              <input className="input" type="email" required /> <br />
              <img
                src="/assets/images/mail.png"
                width="25px"
                className="formimg"
                style={{ top: 200 }}
              alt=''/>
              <input
                className="input"
                pattern="\d{10}"
                title="Please enter exactly 10 digits"
                type="tel"
                max={12}
                required
              />
              <br />
              <img
                src="/assets/images/msg.png"
                width="25px"
                className="formimg"
                style={{ top: 240 }}
              alt=''/>
              <textarea
                className="input"
                type="email"
                id="msgtxt"
                required
                defaultValue={""}
              />
              <br />
              <button
                type="submit"
                id="form-submit"
                className="btn"
                style={{ position: "absolute", right: 0 }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="footer" />

            </div>
           )
     }
 }
 export default Contact;