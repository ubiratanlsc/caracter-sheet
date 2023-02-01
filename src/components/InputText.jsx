import { useEffect, useState } from 'react'
import '../assets/css/style.css'
import Input from '../form/Input'
function InputText(props) {
  const [value, setValue] = useState([])
  useEffect(() =>{
    fetch("http://localhost:5000/chars", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => response.json())
  .then((data) => {
    setValue(data)
  })
  .catch((error) => console.log(error))
  
  }, [])
  // console.log(value);
  return (
    <>
      <form > {/*onSubmit={handleSubmit(onsubmit)}*/}
        <Input type="text" name="Mathaius" id="Mathaius" legends="Nome" valor={props.valor} />
        <button type="submit">Button</button>
      </form>
    </>
  )
}

export default InputText