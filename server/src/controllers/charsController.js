import chars from "../models/Char.js";

class CharController {

     static listarChars = (req, res) => {
          chars.find((err, chars) => {
               res.status(200).json(chars)
          })
     }
     static listarCharPorId = (req, res) => {
          const id = req.params.id;
          chars.findById(id, (err, chars) => {
               if (err) {
                    res.status(400).send({ message: `livro não encontrado: ${err.message}` })
               } else {
                    res.status(200).send(chars);
               }

          })
     }
     static cadastrarChar = (req, res) => {
          let char = new chars(req.body);
          char.save((err) => {
               if (err) {
                    res.status(500).send({ message: `ocorreu um erro ao tentar cadastrar o char ${err.message}` })
               } else {
                    res.status(201).send(char.toJSON())
               }
          })
     }
     static atualizaChar = (req, res) => {
          const id = req.params.id; // primeiro pegar o id para poder atualizar conforme o id passado

          chars.findByIdAndUpdate(id, { $set: req.body }, (err) => {
               if (!err) {
                    res.status(200).send({ message: 'Char atualizado com sucesso' })
               } else {
                    res.status(500).send({ message: `ocorreu um erro ao tentar atualizar o char ${err.message}` })
               }
          })
     }
     static excluirChar = (req, res) => {
          const id = req.params.id
          chars.findByIdAndDelete(id, (err) => {
               if (!err) {
                    res.status(200).send({ message: `Char Excluido com sucesso` })
               } else {
                    res.status(500).send({ message: `ocorreu um erro ao tentar deletar o char: ${err.message}` });
               }
          })
     }
     static listarCharsPorTipo = (req, res) =>{
          const titulo = req.query.titulo;
          chars.find({'titulo': titulo}, {}, (err, chars) =>{
               res.status(200).send(chars)
          })
     }
}
export default CharController