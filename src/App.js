import React from 'react';
import Register from './Registeration';

import {
    BrowserRouter,
    Route
  } from "react-router-dom";



  
  class App extends React.Component {
      state={
          user:[],
      }
      handleregistersubmit = (e) => {
        e.preventDefault();
        const firstvalue = e.target.parentElement.parentElement[0].value;
        const secondvalue = e.target.parentElement.parentElement[1].value;
        const thirdvalue = e.target.parentElement.parentElement[2].value;
        const fourthvalue = e.target.parentElement.parentElement[3].value;
        const fifthvalue = e.target.parentElement.parentElement[4].value;
        const user =[{firstvalue, secondvalue, thirdvalue, fourthvalue , fifthvalue}]
        this.setState({ user });
      }
      render() { 
          console.log(this.state);
        return (
        <BrowserRouter>
        <Route path="/"><Register handleregistersubmit={this.handleregistersubmit} users={this.state.user}/></Route>   
        </BrowserRouter>
        );
    }
}
 
export default App;