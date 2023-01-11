import React, { Component } from "react";
//import React from 'react';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Application from './Components/Application';
import Careers from './Components/Careers';
import Casestudies from './Components/Casestudies';
import Contact from './Components/Contact';
import Managed from './Components/Managed';
import Mcloud from './Components/Mcloud';
import Cloud from './Components/Cloud';
import Ourservices from "./Components/Ourservices";
//import SimpleForm from "./Components/Chatbot/SimpleForm";
import { Route,Routes } from "react-router-dom"

class App extends Component  { 
  render() {
  return (
      <div className="App">
      <Header/>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/Aboutus" element={<Aboutus />} />
                <Route exact path="/Application" element={<Application />} />
                <Route exact path="/Careers" element={<Careers />}/>
                <Route exact path="/Casestudies" element={<Casestudies />}/>
                <Route exact path="/Cloud" element={<Cloud />}/>
                <Route exact path="/Contact" element={<Contact />}/>
                <Route exact path="/Managed" element={<Managed />}/>
                <Route exact path="/Mcloud" element={<Mcloud />}/> 
                <Route exact path="/Ourservices" element={<Ourservices />}/>      

       </Routes>
       
       <Footer/>
       </div>
  );      
}
}
export default App