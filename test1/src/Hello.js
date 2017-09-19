import React from 'react';
import propTypes from 'prop-types';
let counter=0;

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
             <h1>this is hello component</h1>
             <div>{this.props.msg}</div>

             </div>
			)
	}

	componentWillUnmount() {
          //after render method executed
         // timeout ajax calls, remove timers, closing web socket connections
         console.log('componentWillUnmount executed');

        }
} 









