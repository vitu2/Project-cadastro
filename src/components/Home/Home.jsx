import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Home.css';

export default function Home() {
  const situation = ['Ativo', 'Inativo'];
  const type = ['Fisico', 'Juridico'];
  return (
    <div className="form-container">
      <form>
        <h2>Cadastro</h2>
        <label>Nome</label>
        <input type="text" name="" id="" />

        <label>Data</label>
        <input type="date" name="" id="" />

        <label>Tipo De Pessoa</label>
        <Autocomplete
          className="btn-select"
          options={type}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
        />

        <label>Situação</label>
        <Autocomplete
          className="btn-select"
          options={situation}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
        />
        <button className="btn-style">Gravar</button>
      </form>
    </div>
  );
}
