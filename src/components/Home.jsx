import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Home.css'

export default function Home() {
  const situation = ['Ativo', 'Inativo']
  const type = ['Fisico', 'Juridico']
  return (
    <div className='form-container'>

      <form>
        <label>Nome</label>
        <input type="text" name="" id="" />

        <label>Data</label>
        <input type="date" name="" id="" />

        <label>Tipo</label>
        <Autocomplete
        options={type}
        style={{ width: 300 }}
        renderInput={(params) =>
          <TextField {...params} variant="outlined" />}
      />

        <label>Situação</label>
        <Autocomplete
        options={situation}
        style={{ width: 300 }}
        renderInput={(params) =>
          <TextField {...params} variant="outlined" />}
      />
        <button>Gravar</button>
      </form>

    </div>
  );
}
