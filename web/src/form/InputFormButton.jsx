import React from "react";
import { FiChevronsDown, FiChevronsLeft, FiChevronsUp } from "react-icons/fi";

function InputFormButton(props) {
 const icons = {
  up: <FiChevronsUp className="w-20" color="white" size={40} />,
  down: <FiChevronsDown className="w-20" color="white" size={40} />
 }
 
 return (
  <>
   <button type="button" className="bg-tormenta rounded h-9">{icons[props.icon]}</button>
  </>
 )
}
export default InputFormButton