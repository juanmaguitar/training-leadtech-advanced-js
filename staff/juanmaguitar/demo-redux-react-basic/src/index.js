import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/'

import App from './components/App/';


const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render()

store.subscribe(render)