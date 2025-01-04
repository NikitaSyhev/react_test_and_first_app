import React, {Component} from 'react';
import styled from 'styled-components';

import './App.css';


//переменная для styled component
//поддерживает вложенность, т.е. если внутри EmpItem есть ссылка ( а )
// то применяются стили a{.....}
const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
  a{
    display: block;
    margin: 10px 0 10px 0;
    color: ${props => props.active ? 'orange' : 'black'};
  }
  imput {
    display: block;
    margin-top: 10px; 
  }
`;

const Header = styled.h2`
  font-size: 22px;

`;


//экспортируем стили для использования стилей компонентов в другом файле
export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, .2);
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;



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

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1,
    }))
  }

  //здесь мы принимаем 2 аргумента: e + some color
  commitInputChanges = (e, color) => {
    //пример использования 2го аргумента
    console.log(color);
    this.setState({
      position: e.target.value,
    })
  }

  render() {
    const {years, position} = this.state;
    const {name, surname, link} = this.props;
    return(
      <EmpItem active>
        <Button onClick={this.nextYear}>+++</Button>
        <Header>My name is {name}, surname - {surname}, 
          age {years},
          position {position},
          ссылка на профиль - {link}
          </Header>
          <form >
            <span>Введите должность</span>
            <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
          </form>
        <a href="{props.link}">My profile</a>
      </EmpItem>
      )
    }
  }


  //создали react styled component
  const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
  `;


function App() {
  return (
    
      <Wrapper>
          <WhoAmI name={()=>{return 'Nikita'}} surname="Sychev" link="nikitasychev.ru"/>  
          <WhoAmI name={()=>{return 'Nikita'}} surname="SychevNikita" link="nikitasychev.ru"/>
      </Wrapper>
      
  );
}

export default App;

