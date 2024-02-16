import { useContext } from "react";
import Database from "../../context/Database.jsx";
import InputFormText from "../../form/InputFormText";

function Pericias(props) {

 const check = props.check ? props.check : false
 const name = props.name ? props.name : ''
 const graduacao = props.graduacao ? props.graduacao : 0
 const mod = props.mod ? props.mod : 0
 const outros = props.outros ? props.outros : 0
 const { personagem, setPersonagem } = useContext(Database)
 // console.log(check);
 const nivel = personagem.basicos['nivel']
 return (

  <>
   <div className="flex gap-x-1 ">
    {/* <p class="nome">Ofício</p>
    <p class="total">23</p>
    <p class="grad">8</p>
    <p class="mod">4</p>
    <p class="outros">0</p> */}
    <label className="relative inline-flex items-center cursor-pointer">
     <input type="checkbox" checked={check} onChange={props.Toggle} className="sr-only peer" id={props.id} />
     <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.5px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-tormenta"></div>
    </label>
    {name ?
     <div className="bg-black rounded h-5 w-40 text-slate-100 flex items-center justify-center px-2 py-1">{name}</div> : ''
    }
    <InputFormText tamanhoInput={"h-5"} tamanho={"w-14"} value={graduacao} readonly />
    <InputFormText tamanhoInput={"h-5"} tamanho={"w-12"} value={mod} readonly />
    <InputFormText tamanhoInput={"h-5"} tamanho={"w-12"} value={outros} readonly />

   </div>
  </>
 )
} export default Pericias