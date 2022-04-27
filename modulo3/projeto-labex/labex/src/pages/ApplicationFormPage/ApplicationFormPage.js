import React from "react";

export default function ApplicatioFormPage() {
  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>

      <select>
        <option value="Via Láctea Xpress">Via Láctea Xpress</option>
        <option value="Marte">Marte</option>
        <option selected value="Escolha uma Viagem">
          Escolha uma Viagem
        </option>
        <option value="Levis">Levis</option>
        <option value="Willhan marques">Willhan marques</option>
        <option value="Deslizando nos anéis de saturno">
          Deslizando nos anéis de saturno
        </option>
      </select>

      <form>
        <label>
          <input placeholder="Nome" />
        </label> <br></br>
        <label>
          <input placeholder="Idade" />
        </label> <br></br>
        <label>
          <input placeholder="Texto de Candidatura" />
        </label> <br></br>
        <label>
          <input placeholder="Profissão" />
        </label> <br></br>
      </form>
      <select>
        <option value="Angola">Angola</option>
        <option value="Brasil">Brasil</option>
        <option selected value="Escolha um País">
        Escolha um País
        </option>
        <option value="Congo">Congo</option>
        <option value="Dominica">Dominica</option>
        <option value="El Salvador">El Salvador</option>
      </select>
    </div>
  );
}
