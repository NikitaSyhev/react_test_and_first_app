import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//импорт стилей компонентов 
import { Button } from './App';
import styled from 'styled-components';

//наследование стилей (для изменения стилей в импортируемой Button)

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
`;


const text = 'Hello, world!';

const elem = (
  <StrictMode>
      <App/>
      <BigButton as="a">Отправить отчет</BigButton> 
  </StrictMode>  
);

//as a - меняем тег с Button на ссылку ( a )

// const elem = React.createElement('h2', {className: 'greeting'}, 'Hello, world!');



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
);



