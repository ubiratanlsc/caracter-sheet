const { useContext } = require("react");
const { default: Database } = require("../context/Database");

module.exports = function testando() {
 const { personagem, setPersonagem } = useContext(Database)
 console.log(personagem);
 const habilidadess = { ...personagem.habilidades }



 const handleInputChange = (event) => {
  const { name, value, id } = event.target;
  let valor = value ? value : 0;
  console.log("teste");
  setPersonagem(personagem => ({ ...personagem, ['basicos']: { ...personagem['basicos'], [name]: parseInt(valor) } }))
  if (id == 'habilidades') {
   atualizarResultado(name, value)
  }
 };
}
export default testando