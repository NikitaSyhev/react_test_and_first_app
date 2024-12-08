import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const text = 'Hello, world!';

const elem = (
  <StrictMode>
      <App/>
  </StrictMode>  
);

// const elem = React.createElement('h2', {className: 'greeting'}, 'Hello, world!');



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
);



