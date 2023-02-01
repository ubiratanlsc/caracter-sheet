import React, { useState } from "react";
import './sidebar.css'
import { BiHomeAlt, BiBookBookmark, BiShieldPlus } from 'react-icons/bi'
import './ToolTip.css'

function Sidebar(props) {
  const [show, setShow] = useState()
  const info = [
    { icon: <BiHomeAlt size={40} />, toolTip: "Inicio" },
    { icon: <BiBookBookmark size={40} />, toolTip: "Magias" },
    { icon: <BiShieldPlus size={40} />, toolTip: "Talentos" }
  ]
  return (
    <div className="tudos">
      <div className="sidebar siders">
        <ul className='toolItems'>
          {
            info.map((inf, index) => {
              return (<li className='Toolitem'
                onMouseOver={() => setShow(index)}
                onMouseLeave={() => setShow('')}>
                {inf.icon}
                <div className="details">
                  <h5>{inf.heading}</h5>

                </div>
                {
                  show === index ? <div className="toolTip">
                    {inf.toolTip}
                  </div> : null
                }{
                  show === index ? <div className="toolTip">
                    {inf.toolTip}
                  </div> : null
                }
              </li>)
            })
          }
        </ul>
      </div>
      <div className="conteudo">
          {props.children}
      </div>
    </div>

  );
} export default Sidebar


