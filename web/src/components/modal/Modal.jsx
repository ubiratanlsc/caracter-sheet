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
              <div className="item">Tipo: {tipo};</div>
              <div className="item">Nível: {nivel};</div>
              <div className="item">Tempo de Execução: Ação padrão{te};</div>
              <div className="item">Alcance: 9 mestros{alcance};</div>
              <div className="item">Alvo: até 5 criaturas{alvo};</div>
              <div className="item">Duração: 1 minuto{duracao};</div>
              <div className="item">Teste de Resistencia: Reflexos{teste};</div>
              <div className="item">Livro Referencia: {livro};</div>
              
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