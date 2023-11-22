<<<<<<< HEAD
function Selection(props) {


  function primeiraLetraMaiuscula(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
  }

  return (
    <>
      <fieldset>
        <legend className='text-slate-100 relative top-3 text-sm ml-3'>{props.legends}</legend>
        <select className='w-52 text-center text-white bg-black rounded h-9' value={props.value} onChange={props.onchange}>
          {
            props.array.map((item, index) => {
              return <option key={index} value={item.nome}>{primeiraLetraMaiuscula(item.nome)}</option>
            })
          }
        </select>
      </fieldset>
    </>
  )
}
export default Selection
=======
function Selection(props) {


  function primeiraLetraMaiuscula(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
  }

  return (
    <>
      <fieldset>
        <legend className='text-slate-100 relative top-3 text-sm ml-3'>{props.legends}</legend>
        <select className='w-52 text-center text-white bg-black rounded h-9' value={props.value} onChange={props.onchange}>
          {
            props.array.map((item, index) => {
              return <option key={index} value={item.nome}>{primeiraLetraMaiuscula(item.nome)}</option>
            })
          }
        </select>
      </fieldset>
    </>
  )
}
export default Selection
>>>>>>> 2e69c718dbeaf7059ad3cb37d1eaf0562c1389f5
