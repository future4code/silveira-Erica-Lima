import React from 'react';
import './App.css';

function App() {
  return (
    state = {
      adicionar:""
    }
    listaDeTarefas = (event) =>{
      this.setState({adicionar: event.target.value})
    }
    render(){
      
      <form onSubmit={App}>
       <input value ={this.state.adicionar} onChange={this.listaDeTarefas}/>
       <button type="submit">Adicionar</button>
       </form>
    
    }

  );
}

export default App;
