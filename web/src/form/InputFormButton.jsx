import React from "react";
import { FiChevronsDown, FiChevronsLeft, FiChevronsUp, FiSkipBack, FiTrash2  } from "react-icons/fi";
import { GiHealthDecrease, GiHealthIncrease  } from "react-icons/gi";
import { PiBackspaceBold, PiTrashSimpleBold    } from "react-icons/pi";

function InputFormButton(props) {
 
 
 let position = props.position ? props.position : '';
 let classe = props.classe ? props.classe : '';
 const icons = {
  up: <GiHealthIncrease className="2xl:size-9 md:size-7" color="green"/>,
  down: <GiHealthDecrease className="2xl:size-9 md:size-7" color="red" />,
  apagar: <PiBackspaceBold  className="2xl:w-16 2xl:h-9 md:h-7 md:w-14 bg-black rounded 2xl:mt-0 md:mt-2" color="white" />,
  lixo: <PiTrashSimpleBold  className="2xl:w-16 2xl:h-9 md:h-7 md:w-14 bg-black rounded 2xl:mt-0 md:mt-2" color="white"/>
 }
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