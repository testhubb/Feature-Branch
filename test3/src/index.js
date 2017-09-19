import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Widget from './widget';
import Solo from './Solo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Solo/>, document.getElementById('root'));

ReactDOM.render(<Solo/>, document.getElementById('a'));
//ReactDOM.render(React.createElement(App), document.getElementById('root'))
registerServiceWorker();
