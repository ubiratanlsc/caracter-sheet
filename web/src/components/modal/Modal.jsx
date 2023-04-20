import React, { Fragment, useState } from "react";
import "./modal.css"

const Modal = ({magia, nivel, te, alcance, alvo, duracao, teste, livro, descricao, tipo}) => {
  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow(!show);
  };

  return(
    <Fragment>
      <button className="btn btn-primary" onClick={toggle}>{magia}</button>
      <div className={`modal ${show && "show"}`} onClick={toggle}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div className="title">{magia}</div>
            <h2 className="modal-close" onClick={toggle}>X</h2>
          </div>
          <div className="modal-body">
            <div className="form-control">
              <label>Tipo: {tipo} </label>
              <label>Nível: {nivel}</label>
              <label>Tempo de Execução: {te}</label>
              <label>Alcance: {alcance}</label>
              <label>Alvo: {alvo}</label>
              <label>Duração: {duracao}</label>
              <label>Teste de Resistencia: {teste}</label>
              <label>Livro Referencia: {livro}</label>
              <label>Descrição: {descricao}</label>
              <input type="text" placeholder="Digite seu nome" />
            </div>
            <div className="modal-footer">
              <button className="btn btn-cancel">Cancel</button>
              <button className="btn btn-primary">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )


}; export default Modal