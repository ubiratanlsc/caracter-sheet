import talentos from "../models/Talento.js";

class TalentoController {

     static listarTalentos = (req, res) => {
          talentos.find((err, talentos) => {
               res.status(200).json(talentos)
          })
     }
     static listarTalentoPorId = (req, res) => {
          const id = req.params.id;
          talentos.findById(id, (err, talentos) => {
               if (err) {
                    res.status(400).send({ message: `livro não encontrado: ${err.message}` })
               } else {
                    res.status(200).send(talentos);
               }

          })
     }
     static cadastrarTalento = (req, res) => {
          let talento = new talentos(req.body);
          talento.save((err) => {
               if (err) {
                    res.status(500).send({ message: `ocorreu um erro ao tentar cadastrar o talento ${err.message}` })
               } else {
                    res.status(201).send(talento.toJSON())
               }
          })
     }
     static atualizaTalento = (req, res) => {
          const id = req.params.id; // primeiro pegar o id para poder atualizar conforme o id passado

          talentos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
               if (!err) {
                    res.status(200).send({ message: 'Talento atualizado com sucesso' })
               } else {
                    res.status(500).send({ message: `ocorreu um erro ao tentar atualizar o talento ${err.message}` })
               }
          })
     }
     static excluirTalento = (req, res) => {
          const id = req.params.id
          talentos.findByIdAndDelete(id, (err) => {
               if (!err) {
                    res.status(200).send({ message: `Talento Excluido com sucesso` })
               } else {
                    res.status(500).send({ message: `ocorreu um erro ao tentar deletar o talento: ${err.message}` });
               }
          })
     }
     static listarTalentosPorTipo = (req, res) =>{
          const titulo = req.query.titulo;
          talentos.find({'titulo': titulo}, {}, (err, talentos) =>{
               res.status(200).send(talentos)
          })
     }
}
export default TalentoController