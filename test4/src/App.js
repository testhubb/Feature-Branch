import React, { Component } from 'react';
import {Hello} from './Hello';

 class App extends Component {   //here this one represents ES6 syntax and p tag represents the JSX syntax, it is like html like syntax.
 constructor(props) {
  super(props);
  }  
 render() {
  return (
      <div>
      <p>this is app component</p> 
      <Hello/>
      
      </div>
    )}
 }
 
  export default App;
