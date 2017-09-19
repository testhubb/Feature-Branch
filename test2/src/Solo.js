import React from 'react';
import {Hello} from './Hello';
/*stateful component, smart component, class component
when we access to props, when we need life cycle methods ,when we need state



*/

  class Solo extends React.Component{
 	constructor(props) {
 		super(props);
 		this.state= {
 			message: 'default state value'
 		};
 		this.update= this.update.bind(this);
 	}
 	update(event) {
 		var inpMsg= event.target.value;
 		this.setState(function(prevState,props) {
 		return {message:inpMsg};
 	})
 	}

      
 render() {
 	return(
 		<div>
          <p>display solo msg here</p>
         
         <h1>{this.state.message}</h1>
         <input type='text' onKeyUp={this.update}/>
         <Hello msg={this.state.message} />
         <Hello msg={this.state.message} />
         <Hello msg={this.state.message}/>
         //<Hello msg='hey i have passed fourth hello msg here' />
         </div>
 		)}
}

export default Solo;