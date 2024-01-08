import React from "react";
import { FiChevronsDown, FiChevronsLeft, FiChevronsUp, FiSkipBack, FiTrash2  } from "react-icons/fi";
import { GiHealthDecrease, GiHealthIncrease  } from "react-icons/gi";

function InputFormButton(props) {
 
 const icons = {
  up: <GiHealthIncrease className="max-w-28 min-w-11" color="green" size={28} />,
  down: <GiHealthDecrease className="max-w-28 min-w-11" color="red" size={30} />,
  apagar: <FiSkipBack className="max-w-28 min-w-11" color="white" size={32} />,
  lixo: <FiTrash2 className="max-w-28 min-w-11" color="white" size={32} />
 }
 let position = props.position ? props.position : '';
 let classe = props.classe ? props.classe : '';

 return (
  <>
   <button 
   type="button" 
   className={` rounded h-9 ${props.tamanho} ${position} ${classe}`}
   onClick={props.click}
   >
    {icons[props.icon]}
   </button>
  </>
 )
}
export default InputFormButton