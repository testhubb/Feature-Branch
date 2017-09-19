//import React from 'react';
import React, { Component } from 'react';

  class Widget extends  React.Component {
       constructor(props) {
       	super(props);
       	this.state = {
       		msg:"hey see there"
       	}
       }
		render() {
         return ( 
           <div>
           
         	<p>hey how are you</p> 
             <h1>{this.state.msg}</h1>
            </div>

         	)
	}
	
}
export default Widget;

