import React, { useEffect, useMemo, useState } from 'react';
import InputFormText from '../../form/InputFormText';
import Selection from '../../form/Selection';
import '../../assets/css/index.css';

function Grimorio() {
  const [value, setValue] = useState()
  const [formValues, setFormValues] = useState({ nivel: 1 })
  const [selectedValue, setSelectedValue] = useState('mago');
  const [inputValueBaseHabilidade, setInputValueBaseHabilidade] = useState(0);
  const [valuePMTotal, setValuePMTotal] = useState(0);
  const [inputValuePMClasse, setInputValuePMClasse] = useState(0);

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  const classes = [
    { 'nome': 'mago', modificador: 'inteligencia', pmnv: 3, pmin: 1, },
    { 'nome': 'clerigo', modificador: 'sabedoria', pmnv: 3, pmin: 1, },
    { 'nome': 'bardo', modificador: 'carisma', pmnv: 2, pmin: 1, },
    { 'nome': 'feitceiro', modificador: 'carisma', pmnv: 3, pmin: 3, },
  ]
  let magias = new Array(0,1,2,3,4,5,6,7,8,9)


  const selecionado = classes.filter((classe => classe.nome == selectedValue));
  const [select] = selecionado
  useEffect(() => {
    const convertToInt = (value) => {
      const parsedValue = parseInt(value, 10);
      return isNaN(parsedValue) ? 0 : parsedValue;
    };
    const nivel = formValues['nivel']
    const habilidade = convertToInt(formValues['habilidade']);
    const outrosPM = convertToInt(formValues['outrosPM']);
    const outrosCD = convertToInt(formValues['outrosCD']);
    const resultado = habilidade + outrosCD + 10;
    const pmInicial = select['pmin'] + habilidade + outrosPM;


    if (nivel <= 1) {
      setValuePMTotal(pmInicial)
      setInputValuePMClasse(select['pmin'])
    } else {
      let calcula = select['pmnv'] * nivel + pmInicial;
      let pmClasse = select['pmnv'] * nivel + select['pmin']
      setInputValuePMClasse(pmClasse)
      setValuePMTotal(calcula)
    }
    setValue(resultado)
    setInputValueBaseHabilidade(habilidade)

  }, [formValues])
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues(formValues => ({ ...formValues, [name]: value }))
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData)

  }

  function primeiraLetraMaiuscula(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
  }





  return (
    <div>
      <form action="" className='grid gap-4'>
        <header className=''>
          <h1 className='text-6xl text-center text-cyan-50'>Grimorio</h1>
          <div className="flex gap-4 justify-center h-20 glass">
            <div>
              <Selection array={classes} value={selectedValue} onchange={handleSelectChange} legends="Classe Conjuradora"></Selection>
            </div>
            <div className=''>
              <InputFormText ocultar='hidden' legenda={"Nível"} id='nivel' name="nivel" handle={handleInputChange} value={formValues['nivel']} type={'number'} />
            </div>
            <div>
              <InputFormText ocultar='hidden' legenda={"Habilidade Chave"} id='chave' name="chave" handle={handleInputChange} value={primeiraLetraMaiuscula(select.modificador)} />
            </div>
            <div>
              <div className="">
                <InputFormText ocultar='hidden' legenda={"Habilidade Chave"} id='chave' name="chave" handle={handleInputChange} value={"Divina Espontanea"} />
              </div>
            </div>
          </div>
        </header>
        <section className="">
          <div className='flex gap-4 justify-center h-20 glass'>
            <InputFormText ocultar='hidden' legenda={"CD Total"} id='cdTotal' name="cdTotal" handle={handleInputChange} value={value} />
            <InputFormText name="CD" legenda={'CD Base'} value={10} />
            {/* <p className="text-3xl text-white mt-4">&#43;</p> */}
            <InputFormText ocultar='hidden' legenda={"Habilidade"} id='habilidade' name="habilidade" handle={handleInputChange} value={inputValueBaseHabilidade} />
            {/* <p className="text-3xl text-white mt-4">&#43;</p> */}
            <InputFormText ocultar='hidden' legenda={"Outros"} id='outrosCD' name="outrosCD" handle={handleInputChange} placeholder="0" />
          </div>

        </section>
        <section className="">
          <div className="flex gap-4 justify-center h-20 glass">
            <InputFormText legenda={"PM's Totais"} id='pmTotal' name="pmTotal" handle={handleInputChange} value={valuePMTotal} />
            {/* <p className="text-3xl text-white mt-4">&#43;</p> */}
            <InputFormText legenda={"classe"} id='pmTotal' name="pmTotal" handle={handleInputChange} value={inputValuePMClasse} readOnly={true} />
            {/* <p className="text-3xl text-white mt-4">&#43;</p> */}
            <InputFormText ocultar='hidden' legenda={"Habilidade"} id='habilidade' name="habilidade" handle={handleInputChange} value={inputValueBaseHabilidade} />
            {/* <p className="text-3xl text-white mt-4">&#43;</p> */}
            <InputFormText ocultar='hidden' legenda={"Outros"} id='outrosPM' name="outrosPM" handle={handleInputChange} placeholder="0"/>
            <InputFormText ocultar='hidden' legenda={"PM's Atuais"} id='pmAtuais' name="pmAtuais" handle={handleInputChange} placeholder="0"/>
          </div>
        </section>
        <section className="grid grid-cols-5 gap-4">
        {magias.map((item) => 
          <section className='flex flex-col items-center glass justify-around gap-4 py-3'>
            <legend className='bg-tormenta rounded text-white w-52 text-center'>Magias Nivel: {item}. CD:{value + item}</legend>
            <InputFormText legenda={""} id={`magia-nv${item}-nm1`} name={`magia-nv${item}-nm1`} handle={handleInputChange} placeholder="magia"/>
            <InputFormText legenda={""} id={`magia-nv${item}-nm2`} name={`magia-nv${item}-nm2`} handle={handleInputChange} placeholder="magia" />
            <InputFormText legenda={""} id={`magia-nv${item}-nm3`} name={`magia-nv${item}-nm3`} handle={handleInputChange} placeholder="magia" />
            <InputFormText legenda={""} id={`magia-nv${item}-nm4`} name={`magia-nv${item}-nm4`} handle={handleInputChange} placeholder="magia" />
            <InputFormText legenda={""} id={`magia-nv${item}-nm5`} name={`magia-nv${item}-nm5`} handle={handleInputChange} placeholder="magia" />
          </section>
          )}
        </section>
      </form>
    </div>
  );
}

export default Grimorio;
