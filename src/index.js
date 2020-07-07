import React from 'react';
import ReactDOM from 'react-dom';
//import FirstAppComponent from './FirstAppComponent';
import CounterApp from './CounterApp';

import './index.css';

const divRoot = document.querySelector('#root');

//ReactDOM.render( <FirstAppComponent firstName="Matías" lastName="Salinas" />, divRoot );
ReactDOM.render(<CounterApp value={5} />, divRoot );