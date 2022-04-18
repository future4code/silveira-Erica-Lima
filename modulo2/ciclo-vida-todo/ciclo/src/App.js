import React from 'react';
import './App.css';

export default class App extends React.Component{
 
    state = {
      adicionar:""
    }

    listaDeTarefas = (event) =>{
      this.setState({adicionar: event.target.value})
    }
    render() {
      return(
      <form onSubmit={App}>
       <input value ={this.state.adicionar} onChange={this.listaDeTarefas}/>
       <button type="submit">Adicionar</button>
       </form>
      )}
    }

  
    




