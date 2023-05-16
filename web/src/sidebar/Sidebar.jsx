import React, { useState } from "react";
import './sidebar.css'
import { BiHomeAlt, BiBookBookmark, BiShieldPlus } from 'react-icons/bi'
import './ToolTip.css'
import { details } from "../components/personagens/Personagens";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const [show, setShow] = useState()
  const info = [
    { icon: <BiHomeAlt style={details} />, toolTip: "Inicio", page:"/" },
    { icon: <BiBookBookmark style={details} />, toolTip: "Magias", page:"/magias" },
    { icon: <BiShieldPlus style={details} />, toolTip: "Talentos", page:"/talentos" }
  ]
  return (
    <div className="tudos">
      <div className="sidebar siders">
        <ul className='toolItems'>
          {
            info.map((inf, index) => {
              return (<Link to={inf.page} key={index}>
                <li className='Toolitem' key={index}
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
                  }
                  {/* {
                  show === index ? <div className="">
                    {inf.toolTip}
                  </div> : null
                } */}
                </li>
              </Link>)
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


