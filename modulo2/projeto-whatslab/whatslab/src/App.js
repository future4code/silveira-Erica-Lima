import React from 'react'
import App from './App.css'


 function App() {

  const usuario = () =>{
    <textarea>{usuario}</textarea>
    
  }
  
  const onClickEnviar = () => {
    alert('Enviado')
  }
  const divStyle = {
    border: 'black'
    



  }
  return(
    <div style={divStyle}>
      <h1>WHATSLAB</h1>

      <form>
        <label>
        <button onclick = {onClickEnviar}> Enviar</button>
      <textarea></textarea>

        </label>

      </form>

      {/* <button onclick = {onClickEnviar}> Enviar</button>
      <textarea>Escreva sua mensagem</textarea> */}
    </div>


  )
}

export default App()