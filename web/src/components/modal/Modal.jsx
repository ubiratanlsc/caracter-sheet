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
           <h2 className="modal-close" onClick={toggle}>X</h2>
          <div className="modal-header">
            <p className="title-magia">{magia}</p>
          </div>
          <div className="modal-body">
            <div className="form-control">
              <div className="item"><span>Tipo: </span>{tipo};</div>
              <div className="item"><span>Nível: </span>{nivel};</div>
              <div className="item"><span>Tempo de Execução: </span>{te};</div>
              <div className="item"><span>Alcance: </span>{alcance};</div>
              <div className="item"><span>Alvo: </span>{alvo};</div>
              <div className="item"><span>Duração: </span>{duracao};</div>
              <div className="item"><span>Teste de Resistencia: </span>{teste};</div>
              <div className="item"><span>Livro Referencia: </span>{livro};</div>
              
              {/* <input type="text" placeholder="Digite seu nome" /> */}
            </div>
            <div className="modal-footer">
              <div className="descricao">Descrição: {descricao}</div>
              {/* <button className="btn btn-cancel">Cancel</button>
              <button className="btn btn-primary">Salvar</button> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )


}; export default Modal