import livros from "../models/Livro.js";

class LivroController {

     static listarLivros = (req, res) => {
          livros.find((err, livros) => {
               res.status(200).json(livros)
          })
     }
     static listarLivroPorId = (req, res) => {
          const id = req.params.id;
          livros.findById(id, (err, livros) => {
               if (err) {
                    res.status(400).send({ message: `livro não encontrado: ${err.message}` })
               } else {
                    res.status(200).send(livros);
               }

          })
     }
     static cadastrarLivro = (req, res) => {
          let livro = new livros(req.body);
          livro.save((err) => {
               if (err) {
                    res.status(500).send({ message: `ocorreu um erro ao tentar cadastrar o livro ${err.message}` })
               } else {
                    res.status(201).send(livro.toJSON())
               }
          })
     }
     static atualizaLivro = (req, res) => {
          const id = req.params.id; // primeiro pegar o id para poder atualizar conforme o id passado

          livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
               if (!err) {
                    res.status(200).send({ message: 'Livro atualizado com sucesso' })
               } else {
                    res.status(500).send({ message: `ocorreu um erro ao tentar atualizar o livro ${err.message}` })
               }
          })
     }
     static excluirLivro = (req, res) => {
          const id = req.params.id
          livros.findByIdAndDelete(id, (err) => {
               if (!err) {
                    res.status(200).send({ message: `Livro Excluido com sucesso` })
               } else {
                    res.status(500).send({ message: `ocorreu um erro ao tentar deletar o livro: ${err.message}` });
               }
          })
     }

}
export default LivroController