import React from "react";
import { FiChevronsDown, FiChevronsLeft, FiChevronsUp } from "react-icons/fi";

function InputFormButton(props) {
 const icons = {
  up: <FiChevronsUp className="w-22" color="white" size={40} />,
  down: <FiChevronsDown className="w-22" color="white" size={40} />
 }
 
 return (
  <>
   <button 
   type="button" 
   className={`bg-tormenta rounded h-9 ${props.tamanho}`}
   onClick={props.click}
   >
    {icons[props.icon]}
   </button>
  </>
 )
}
export default InputFormButton