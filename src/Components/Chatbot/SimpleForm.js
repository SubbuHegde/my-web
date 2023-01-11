import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Link,} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// all available theme props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#2471A3',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#D16F77',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

// all available config props
const config ={
  width: "400px",
  height: "500px",
  floating: true, 
};
class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <ChatBot 
       steps={[
         {
          id:'intro', 
            message:'Hi do you need Help !', 
            trigger:'intro-user',
          },
          {
            id:'intro-user', 
            options:[
            {value:'y', label:'Yes', trigger:'yes-response'},
            {value:'n', label:'No', trigger:'no-response'},
            ] 
          },
          {
            id:'yes-response', 
            message:'Do U Want Know About Our services!', 
            trigger:'intro-user2',
          },
          {
            id:'intro-user2', 
            options:[
            {value:'y', label:'Yes', trigger:'yes-response1'},
            {value:'n', label:'No', trigger:'no-response'},
            ]
          },
          {
            id:'yes-response1',
            options:[
              { value:'1',label:'Cloud Fast Start',trigger:'cloudfast'},
              { value:'2',label:'Cloud Application Services',trigger:''},
              { value:'3',label:'Managed Cloud services',trigger:''},
            ]
          },
          {
            id:'cloudfast',
            component: (
              <div><Link href='/src/Components/Cloud.js'></Link></div>
            ),
          },

          {
            id:'no-response', 
            message:'Sorry to hear that.', 
            end:true,
         },

         
        ]}
        {...config}
        
      />
    </ThemeProvider>
    );
  }
       
}

export default SimpleForm;