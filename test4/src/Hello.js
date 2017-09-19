import React from 'react';
import propTypes from 'prop-types';
import Button from './Button';
import {Next} from './Next';

let counter=0;
let timer;


export class Hello extends React.Component {
	constructor(props) {
    super(props);
    console.log('constructor executed first');
	}
	componentWillMount() {
		console.log('componentWillMount');
	}
	componentDidMount() {
		console.log('componentDidMount');
		//after render method it executed
		//used for ajax calls, timers, web socket connections
	    var self=this; //when first time the piece of component or data being put on to the webpage. 
    
    timer= setInterval(function() {
        console.log('display message in every secs ');
    },1000);
}

	componentWillReceiveProps(nextProps) {
		// when we receive  a new set of props or new set of update from the parent
		console.log('componentWillReceiveProps', this.props, nextProps);
	}
	shouldComponentUpdate(nextProps, nextState) {
		//when we receive new set of props or update the state 
		//return true: there will be an update
		//return false: there will be no update(render method will not be executed)
        //console.log('componentShouldUpdate:currentState and nextState respectively:', this.state, nextState );
        //console.log('componentShouldUpdate:currentProps and nextProps respectively:', this.props, nextProps );
        //return true;
        //return false;
        counter++;
        console.log(counter);
        if(counter%5===0) {
        	return true;
        } else {
       	return false;
        };
	}
	render () {
		console.log('render method');
		return (
             <div>
             <Next> <button>hey this is Button</button><div>hey this is div</div></Next>
             <h1>this is hello component</h1>
             <div>{this.props.msg}</div>
             <div>the number is: {this.props.num}</div>

             </div>
			)
	}

	componentWillUnmount() {
          //after render method executed
         // timeout ajax calls, remove timers, closing web socket connections
         clearInterval(timer);
         console.log('componentWillUnmount executed');

        }
    }
        Hello.propTypes = {
           msg:propTypes.string,
           num:propTypes.number,

        }
       
       Hello.defaultProps = {
       	num:20,
        msg: 'new message'
       }
     








