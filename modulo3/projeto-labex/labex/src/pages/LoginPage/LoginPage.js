import React from 'react'


export default function LoginPage(){

    return(
        <div>
            <h1>Login</h1>
            <div>
            <label>
          <input placeholder="E-mail" />
        </label> <br></br>
        <label>
          <input placeholder="Senha" />
        </label> <br></br>
            </div>

            <div>
                <button>Voltar</button>
                <button>Entrar</button>
            </div>
        </div>
    )
}