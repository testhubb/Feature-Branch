import React from 'react';
import {Hello} from './Hello';
import ReactDOM from 'react-dom';
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
 		this.removeHello=this.removeHello.bind(this);
 	}
 	update(event) {
 		var inpMsg= event.target.value;
 		this.setState(function(prevState,props) {
 		return {message:inpMsg};
 	})
 		//console.log(this.refs.myHello);
 	}

 	addHello(event) {
    ReactDOM.render(<Hello/>,document.getElementById('a'));
 	}

 	removeHello(event) {
 		ReactDOM.unmountComponentAtNode(document.getElementById('a'));
        
 	}

      
 render() {
 	return(

            <div>
         <button onClick={this.removeHello}>unMount Hello</button>
         <button onClick={this.addHello}>add Hello</button>
          <Hello ref='Hello' msg={this.state.message} Hello/>
        
            </div>
         
         
         
        /* </div>

 		<div>
          <p>display solo msg here</p>
         
         <h1>{this.state.message}</h1>
         <input type='text' onKeyUp={this.update}/>
         <button onClick={this.removeHello}>unMount Hello</button>
         <button onClick={this.addHello}>add Hello Hello</button>

         <Hello ref='myHello'  msg={this.state.message} />
         
         
         </div> */
 		)}
}

export default Solo;