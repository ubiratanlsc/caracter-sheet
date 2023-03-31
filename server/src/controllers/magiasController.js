import magias from "../models/Magia.js";

class MagiaController {

     static listarMagias = (req, res) => {
          magias.find((err, magias) => {
               res.status(200).json(magias)
          })
     }
     static listarMagiaPorId = (req, res) => {
          const id = req.params.id;
          magias.findById(id, (err, magias) => {
               if (err) {
                    res.status(400).send({ message: `livro não encontrado: ${err.message}` })
               } else {
                    res.status(200).send(magias);
               }

          })
     }
     static cadastrarMagia = (req, res) => {
          let magia = new magias(req.body);
          magia.save((err) => {
               if (err) {
                    res.status(500).send({ message: `ocorreu um erro ao tentar cadastrar o magia ${err.message}` })
               } else {
                    res.status(201).send(magia.toJSON())
               }
          })
     }
     static atualizaMagia = (req, res) => {
          const id = req.params.id; // primeiro pegar o id para poder atualizar conforme o id passado

          magias.findByIdAndUpdate(id, { $set: req.body }, (err) => {
               if (!err) {
                    res.status(200).send({ message: 'Magia atualizado com sucesso' })
               } else {
                    res.status(500).send({ message: `ocorreu um erro ao tentar atualizar o magia ${err.message}` })
               }
          })
     }
     static excluirMagia = (req, res) => {
          const id = req.params.id
          magias.findByIdAndDelete(id, (err) => {
               if (!err) {
                    res.status(200).send({ message: `Magia Excluido com sucesso` })
               } else {
                    res.status(500).send({ message: `ocorreu um erro ao tentar deletar o magia: ${err.message}` });
               }
          })
     }
     static listarMagiasPorTipo = (req, res) =>{
          const titulo = req.query.titulo;
          magias.find({'titulo': titulo}, {}, (err, magias) =>{
               res.status(200).send(magias)
          })
     }
}
export default MagiaController