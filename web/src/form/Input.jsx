import '../assets/css/style.css'
function Input({name, handleOnChange, valor, legends, boolean, type, placeholder}) {

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

export default Input