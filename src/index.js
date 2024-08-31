import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';


const text = 'Hello, world!';

const elem = (
  <div>
      <App/>
  </div>
);

// const elem = React.createElement('h2', {className: 'greeting'}, 'Hello, world!');



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
);

