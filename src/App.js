
import './App.css';
import React, {Component} from 'react';



//функция дл создания props

class WhoAmI extends Component {
  constructor(props) {
    super();
    this.state = {
      years: 27,
      position: '',
    }
    //пример смены контекста через bind()
    // this.nextYear = this.nextYear.bind(this);
  }

  nextYear() {
    this.setState(state => ({
      years: state.years + 1,
    }))
  }

  commitInputChanges = (e) => {
    this.setState({
      position: e.target.value,
    })
  }


  return() {
    const {years, position} = this.state;
    const {name, surname, link} = this.props;
      <div>
        <button onClick={this.nextYear}>+++</button>
        <h1>My name is {name}, surname - {surname}, 
          age {years},
          position {position
          }</h1>
          <form >
            <span>Введите должность</span>
            <input type="text" onChange={this.commitInputChanges} />
          </form>
        <a href="{props.link}">My profile</a>
      </div>
  }
}



function App() {
  return (
    <div className="App">
        <WhoAmI name={()=>{return 'Nikita'}} surname="Sychev" link="nikitasychev.ru"/>  
        <WhoAmI name={()=>{return 'Nikita'}} surname="SychevNikita" link="nikitasychev.ru"/>
    </div>
  );
}

export default App;

