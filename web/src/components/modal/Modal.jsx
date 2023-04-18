import React, { Fragment, useState } from "react";
import "./modal.css"

const Modal = () => {
  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow(!show);
    console.log(!show);
  };

  return(
    <Fragment>
      <button className="btn btn-primary" onClick={toggle}> Abrir Modal </button>
      <div className={`modal ${show && "show"}`} onClick={toggle}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div className="title">Título</div>
            <h2 className="modal-close" onClick={toggle}>X</h2>
          </div>
          <div className="modal-body">
            <div className="form-control">
              <label>name</label>
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