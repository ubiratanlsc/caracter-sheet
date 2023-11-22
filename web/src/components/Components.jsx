// // import { useHistory } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import '../assets/css/style.css'
// // import Navbar from '../navbar/Navbar'
// // import Input from '../form/InputFormText'
// function Components(props) {
//   const [value, setValue] = useState([])
//   useEffect(() => {
//     fetch("http://localhost:5000/chars", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setValue(data)
//       })
//       .catch((error) => console.log(error))

//   }, [])
//   // const history = useHistory()
//   // function createHistory( projects) {

//   // }
//   return (
//     <>
//     {/* <Navbar>

//     </Navbar> */}
//       <header>
//         <h1 className="names">Mathaius</h1>
//       </header>
//       <section>
//         <div className='tudo'>
//           <section className="info glass">
//             {/* <InputText name="Nome"></InputText> */}
//             <form action="">
//               <button type="submit">Button</button>
//               <Input type="text" name="Mathaius" id="Mathaius" legends="Nome" valor={props.valor} />
//             </form>

//             {/* <div className="racaPersonagem">
//               <div className="titulos">Raça</div>
//               <div className="valorInfo racaValor">Humano</div>
//             </div>
//             <div className="classePersonagem justify">
//               <div className="titulos">Classe</div>
//               <div className="valorInfo classeValor">Mago</div>
//             </div>
//             <div className="tendenciaPersonagem">
//               <div className="titulos">Tendencia</div>
//               <div className="valorInfo tendenciaValor">Caotico e Neutro</div>
//             </div>
//             <div className="tamanhoPersonagem ">
//               <div className="titulos">Tamanho</div>
//               <div className="valorInfo tamanhoValor">Medio</div>
//             </div>
//             <div className="sexoPersonagem ">
//               <div className="titulos">Sexo</div>
//               <div className="valorInfo sexoValor">M</div>
//             </div>
//             <div className="idadePersonagem ">
//               <div className="titulos">Idade</div>
//               <div className="valorInfo idadeValor">80</div>
//             </div>
//             <div className="divindadePersonagem ">
//               <div className="titulos">Divindade</div>
//               <div className="valorInfo dividadeValor">Wynna</div>
//             </div>
//             <div className="deslocamentoPersonagem ">
//               <div className="titulos">Deslocamento</div>
//               <div className="valorInfo MetrosValor">9 Metros</div>
//             </div>

//             <div className="nvPersonagem ">
//               <div className="titulos">Nível</div>
//               <div className="valorInfo nivelValor">5</div>
//             </div> */}
//           </section>

//           {/* <section className="pontos glass">
//             <div className="pv ">
//               <div>Pontos de Vida</div>
//               <div>100</div>
//             </div>
//             <div className="pm ">
//               <div>Pontos de Mana</div>
//               <div>100</div>
//             </div>
//             <div className="rd ">
//               <div>Redução de Dano</div>
//               <div>100/Magica</div>
//             </div>
//             <div className="pe ">
//               <div>Pontos de Energia</div>
//               <div>100</div>
//             </div>
//             <div className="dn ">
//               <div>Pontos de Danos</div>
//               <div>100</div>
//             </div>
//             <div className="pe ">
//               <div>Pontos de Ação</div>
//               <div>1</div>
//             </div>
//           </section>
//           <div className="habilidades glass">
//             <div className="habsLegenda flex">
//               <div className="habLegenda titulos">Habilidade</div>
//               <div className="valorLegenda titulos">Valor</div>
//               <div className="ModHabLegenda titulos">Mod. Hab</div>
//             </div>
//             <div className="habGeral flex">
//               <div className="tHab">Força</div>
//               <div className="valorAtri forcaValor">20</div>
//               <div className="ModHab modForValor">5</div>
//             </div>
//             <div className="habGeral flex">
//               <div className="tHab">Destreza</div>
//               <div className="valorAtri destrezaValor">20</div>
//               <div className="ModHab modDesValor">5</div>
//             </div>
//             <div className="habGeral flex">
//               <div className="tHab">Constituição</div>
//               <div className="valorAtri constituicaoValor">20</div>
//               <div className="ModHab modConValor">5</div>
//             </div>
//             <div className="habGeral flex">
//               <div className="tHab">Sabedoria</div>
//               <div className="valorAtri sabedoriaValor">20</div>
//               <div className="ModHab modSabValor">5</div>
//             </div>
//             <div className="habGeral flex">
//               <div className="tHab">Inteligencia</div>
//               <div className="valorAtri inteligenciaValor">20</div>
//               <div className="ModHab modIntValor">5</div>
//             </div>
//             <div className="habGeral flex">
//               <div className="tHab">Carisma</div>
//               <div className="valorAtri carismaValor">20</div>
//               <div className="ModHab modCarValor">5</div>
//             </div>
//           </div>
//           <section className="ca glass">
//             <div className="classeArmadura titulos">
//               Classe de Armadura
//             </div>
//             <div className="atributosCA">
//               <div className="totalCa">
//                 <div className="CaLegenda titulos">Total</div>
//                 <div className="CaNumero caTotalValor">20</div>
//               </div>
//               <div className="baseCa CaNumero titulos">= 10</div>
//               <div className="meioNv">
//                 <div className="CaLegenda ">1/2 do Nível</div>
//                 <div className="CaNumero caNivelValor">5</div>
//               </div>
//               <div className="modHabCA">
//                 <div className="CaLegenda ">Mod. Habilidade</div>
//                 <div className="CaNumero caModValor">5</div>
//               </div>
//               <div className="bArmadura">
//                 <div className="CaLegenda ">Bônus de Armadura</div>
//                 <div className="CaNumero caBonusArmValor">5</div>
//               </div>
//               <div className="bEscudo">
//                 <div className="CaLegenda ">Bônus de Escudo</div>
//                 <div className="CaNumero caBonusEscValor">5</div>
//               </div>
//               <div className="modTamCa">
//                 <div className="CaLegenda ">Mod. Tam</div>
//                 <div className="CaNumero caBonusTamValor">5</div>
//               </div>
//               <div className="outrosCa">
//                 <div className="CaLegenda ">Outros</div>
//                 <div className="CaNumero caOutValor">5</div>
//               </div>
//             </div>
//           </section>
//           <section className="resistencias glass">
//             <div className="resistenciasTitulo">
//               <div className=""></div>
//               <div className=" titulos">Total</div>
//               <div className=" titulos">1/2 Nv</div>
//               <div className=" titulos">Mod.Hab</div>
//               <div className=" titulos">Outros</div>
//             </div>
//             <div className="">
//               <div className="fortitudeTitulo ">Fortude</div>
//               <div className="fort fortTotalValor">5</div>
//               <div className="fort resistNivelValor">5</div>
//               <div className="fort fortModValor">5</div>
//               <div className="fort fortOutlValor">5</div>
//             </div>
//             <div className="">
//               <div className="reflexoTitulo ">Reflexos</div>
//               <div className="refl reflTotalValor">5</div>
//               <div className="refl resistNivelValor">5</div>
//               <div className="refl reflModValor">5</div>
//               <div className="refl reflOutlValor">5</div>
//             </div>
//             <div className="">
//               <div className="vontadeTitulo ">Vontade</div>
//               <div className="vont vontTotalValor">5</div>
//               <div className="vont resistNivelValor">5</div>
//               <div className="vont vontModValor">5</div>
//               <div className="vont vontOutValor">5</div>
//             </div>
//           </section>
//           <section className="ataque glass">
//             <div className="tipoAtaque titulos">Corpo a Corpo</div>
//             <div className="atqlegendas">
//               <div className="valorAt">Arma</div>
//               <div className="valorAt">Total</div>
//               <div className="valorAt">BBA</div>
//               <div className="valorAt">Modificador</div>
//               <div className="valorAt">Mod. Taman</div>
//               <div className="valorAt">Outros</div>
//             </div>
//             <div className="corpoacorpo 1">
//               <div className="valorAt">Espada longa</div>
//               <div className="valorAt cac1TotalValor1">5</div>
//               <div className="valorAt cac1BbaValor1">5</div>
//               <div className="valorAt cac1ModValor1">5</div>
//               <div className="valorAt cac1TamValor1">5</div>
//               <div className="valorAt cac1OutlValor1">5</div>
//             </div>
//             <div className="corpoacorpo 2 last">
//               <div className="valorAt">Machado</div>
//               <div className="valorAt cac2TotalValor2">5</div>
//               <div className="valorAt cac2BbaValor2">5</div>
//               <div className="valorAt cac2ModValor2">5</div>
//               <div className="valorAt cac2TamValor2">5</div>
//               <div className="valorAt cac2OutlValor2">5</div>
//             </div>
//           </section>
//           <section className="ataqueAd glass">
//             <div className="tipoAtaque titulos">Distancia</div>
//             <div className="atqlegendas">
//               <div className="valorAt">Arma</div>
//               <div className="valorAt">Total</div>
//               <div className="valorAt">BBA</div>
//               <div className="valorAt">Força</div>
//               <div className="valorAt">Mod. Taman</div>
//               <div className="valorAt">Outros</div>
//             </div>
//             <div className="">
//               <div className="valorAt">Arco Longo</div>
//               <div className="valorAt ad1TotalValor1">5</div>
//               <div className="valorAt ad1BbaValor1">5</div>
//               <div className="valorAt ad1ModValor1">5</div>
//               <div className="valorAt ad1TamValor1">5</div>
//               <div className="valorAt ad1OutlValor1">5</div>
//             </div>
//             <div className="last">
//               <div className="valorAt">Mosquetão</div>
//               <div className="valorAt ad1TotalValor2">5</div>
//               <div className="valorAt ad1BbaValor2">5</div>
//               <div className="valorAt ad1ModValor2">5</div>
//               <div className="valorAt ad1TamValor2">5</div>
//               <div className="valorAt ad1OutlValor2">5</div>
//             </div>
//           </section>
//           <section className="habilidadesClasse glass">
//             <div className="titulo titulos">Habilidades de Classe e Raça</div>
//             <div className="">
//               <div className="valorHab habValor1">Código de conduta</div>
//               <div className="valorHab habValor2">Devoto</div>
//               <div className="valorHab habValor3">Empatia selvagem</div>
//               <div className="valorHab habValor4">vínculo natural</div>
//               <div className="valorHab habValor5">Caminho da floresta</div>
//               <div className="valorHab habValor6">Rastro Invisivel</div>
//               <div className="valorHab habValor7">Forma Selvagem</div>
//               <div className="valorHab habValor8">Forma Selvagem<br />(2 Habilidades)</div>
//               <div className="valorHab habValor9">Magias 3º</div>
//             </div>
//           </section>
//           <section className="armor glass">
//             <div className=" titulos">Armadura e Escudos</div>
//             <div className="">
//               <div className="">Tipo</div>
//               <div className="">Bônus na CA</div>
//               <div className="">Bônus Maximo de Destreza</div>
//               <div className="">Penalidade de Armadura</div>
//             </div>
//             <div className="">
//               <div className="">Armadura</div>
//               <div className="">5</div>
//               <div className="">5</div>
//               <div className="">5</div>
//             </div>
//             <div className="">
//               <div className="">Escudo</div>
//               <div className="">5</div>
//               <div className="">5</div>
//               <div className="">5</div>
//             </div>
//             <div className="last">
//               <div className="">Outros</div>
//               <div className="">5</div>
//               <div className="">5</div>
//               <div className="">5</div>
//             </div>
//           </section>
//           <section className="magiasTalentos glass">
//             <div className="titulo titulos">Talentos e Magias</div>
//             <div className="">
//               <div className="">Acerto Crítico Aprimorado</div>
//               <div className="">Acuidade com Arma</div>
//               <div className="">Ataque Atordoante</div>
//               <div className="">Agarrar Aprimorado</div>
//               <div className="">Ataque certeiro 1º</div>
//               <div className="">Disco flutuante 1º</div>
//               <div className="">Mísseis mágicos 1º</div>
//               <div className="">Visão arcana 3º</div>
//               <div className="">Soco de Arsenal 3º</div>
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//               <hr />
//             </div>
//           </section>
//           <section className="periciasSection glass">
//             <div className="pericias">
//               <div className="geral">
//                 <div className="nome">Acrobacia</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Adestrar Animais*</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>

//               </div>
//               <div className="geral">
//                 <div className="nome">Atlestismo</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Atuação</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>

//               </div>
//               <div className="geral">
//                 <div className="nome">Atuação</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Cavalgar</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Conhecimento*</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Conhecimento*</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Cura</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Diplomacia</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Enganação</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Identificar Magia*</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Iniciativa</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Intimidação</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Intuição</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Ladinagem*</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Obter Informação</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Ofício</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Ofício</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Percepçao</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//               <div className="geral">
//                 <div className="nome">Sobrevivencia</div>
//                 <div className="total">23</div>
//                 <div className="grad">8</div>
//                 <div className="mod">4</div>
//                 <div className="outros">0</div>
//                 <label className="switch vf">
//                   <input type="checkbox" />
//                   <span className="slider round"></span>
//                 </label>
//               </div>
//             </div>
//           </section> */}
//         </div>
//       </section>
//     </>



//   )
// }

// export default Components
