
import './App.css';
import React from 'react';



const Header = () => {
  return <h2>Hello, world!</h2>
}


// const Field = () => {
//   const holder = 'Enter here';
//   const styledFiled = {
//     width: '300px',
//   }
//   return <input 
//             placeholder={holder} 
//             type='text' 
//             style={styledFiled}/>
// }


//создание компонента через класс
class Field extends React.Component {
      render() {
        const holder = 'Enter here';
        const styledFiled = {
          width: '300px',
      };
      return <input 
      placeholder={holder} 
      type='text' 
      style={styledFiled}/>
}
}

function Btn() {
  const text = 'Log in';

  //examples
  // const res = () => {
  //   return 'Log in';
  // }
  // const p = <p>Log in</p>;

  const logged = true;
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
        <Header/>
        <Field/>
        <Btn/>
    </div>
  );
}

export default App;
export {Header};
