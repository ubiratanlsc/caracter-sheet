import InputFormText from "../../form/InputFormText";

function Pericias(props) {
 const check = props.check;
 const name = props.name;
 const total = props.total ? props.total : 0
 const mod = props.mod ? props.mod : 0
 const outros = props.outros ? props.outros : 0
 const handleToggle = ""
 return (
  <>
   <div className="flex gap-x-1 bg-black">
    {/* <p class="nome">Ofício</p>
    <p class="total">23</p>
    <p class="grad">8</p>
    <p class="mod">4</p>
    <p class="outros">0</p> */}
    <label className="relative inline-flex items-center mb-5 cursor-pointer">
     <input type="checkbox" checked={check} onChange={handleToggle} className="sr-only peer" />
     <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-tormenta"></div>
    </label>

    <InputFormText tamanhoInput={"h-5"} tamanho={"w-8"} value={5} />
    <InputFormText tamanhoInput={"h-5"} tamanho={"w-8"} value={5} />
    <InputFormText tamanhoInput={"h-5"} tamanho={"w-8"} value={5} />
    <InputFormText tamanhoInput={"h-5"} tamanho={"w-8"} value={5} />

   </div>
  </>
 )
} export default Pericias