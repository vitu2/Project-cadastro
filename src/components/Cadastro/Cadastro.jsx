import React, { useRef, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Cadastro.css';
import { useDetectOutsideClick } from "./Hooks/useDetectOutsideClick";

export default function Cadastro() {
  const situation = ['Ativo', 'Inativo'];
  const type = ['Fisico', 'Juridico'];
  const modalRef = React.useRef(null);
  const [isClosed, setIsClosed] = React.useState(true);

  const handleClose = () => {
    setIsClosed(!isClosed);
  };

  useDetectOutsideClick(modalRef, handleClose);

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
        <button onClick={() => handleClose()} disabled={!isClosed} className='btn-style'>
          Gravar
        </button>

        {!isClosed ? (
          <div ref={modalRef} className="modal">
            <p>Gravado Com Sucesso</p>
          </div>
        ) : null}
      </form>
    </div>
  );
}
