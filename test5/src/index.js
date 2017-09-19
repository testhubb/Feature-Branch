import React from 'react';
import ReactDOM from 'react-dom';
import deepFreeze from 'deep-freeze';


import registerServiceWorker from './registerServiceWorker';



let a= {
    name:'bala',
    college:'state university',
     address:{
         street:'benton',
         city:'ky'
     }

}

//make it immutable
deepFreeze(a);
//Object.freeze(a); //for lower order object parameters the freeze cant be work exactly so we can use deepFreeze
//a.name='krishna' 
a.address.city='NY'
//let b=a;  //shallow comparision
let b= Object.assign({},a); //deep compare it  then shallow comaprision is false
b.college='north university'
console.log(a);
console.log(b);
//shallow comparision is true here
console.log(a===b);







ReactDOM.render(<index/>, document.getElementById('root'));
registerServiceWorker();


