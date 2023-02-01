import '../assets/css/style.css'
function Select({name, handleOnChange, valor, legends, boolean, type}) {

  return (
    <>
        <fieldset>
          <legend >{legends}</legend>
          <input 
          disabled={boolean} 
          type={type} 
          name={name} 
          id={name} 
          onChange={handleOnChange} 
          value={valor}/>
        </fieldset>
    </>
  )
}
export default Select
