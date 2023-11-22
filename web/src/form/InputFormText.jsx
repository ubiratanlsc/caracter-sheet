<<<<<<< HEAD
import { useEffect, useMemo, useState } from 'react'
import './inputnumber.css'
export default function InputFormText(props) {

  const ocultar = props.ocultar ? props.ocultar : ''
  return (
    <>
      <fieldset className=''  >
        <legend className='text-slate-100 relative top-3 text-sm ml-3'>{props.legenda}</legend>
        {/* <legend style={{ marginTop: '0.4em', marginLeft: '1.3em', position: 'absolute', visibility: `${ocultar}` }}>CD</legend> */}
        <input
          placeholder={props.placeholder}
          className='w-52 text-center text-white bg-black focus:border-none focus:outline target:border-none rounded h-9'
          type={props.type}
          name={props.name}
          id={props.id}
          onChange={props.handle}
          value={props.value}
          defaultValue={props.defaultValue}
          readOnly={props.readonly}
        />
      </fieldset>
    </>
  )
=======
import { useEffect, useMemo, useState } from 'react'
import './inputnumber.css'
export default function InputFormText(props) {

  const ocultar = props.ocultar ? props.ocultar : ''
  return (
    <>
      <fieldset className=''  >
        <legend className='text-slate-100 relative top-3 text-sm ml-3'>{props.legenda}</legend>
        {/* <legend style={{ marginTop: '0.4em', marginLeft: '1.3em', position: 'absolute', visibility: `${ocultar}` }}>CD</legend> */}
        <input
          placeholder={props.placeholder}
          className='w-52 text-center text-white bg-black focus:border-none focus:outline target:border-none rounded h-9'
          type={props.type}
          name={props.name}
          id={props.id}
          onChange={props.handle}
          value={props.value}
          defaultValue={props.defaultValue}
          readOnly={props.readonly}
        />
      </fieldset>
    </>
  )
>>>>>>> 2e69c718dbeaf7059ad3cb37d1eaf0562c1389f5
}