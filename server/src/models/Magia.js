import mongoose from "mongoose"

const magiaSchema = new mongoose.Schema({
     id: { type: String },
     titulo: { type: String, required: true },
     nivel: {type: Number, required: true },
     tipo:{type: String},
     tempoexecucao: { type: String, required: true },
     alcance: { type: String},
     alvo: {type: String},
     duracao: { type: String},
     testeresistencia: { type: String, required: true },
     introducao: { type: String},
     beneficio: { type: String, required: true},
     especial: { type: String},
     subtipo:{type: String},
     livro: { type: String, required: true },
})

const magias = mongoose.model('magias', magiaSchema)

export default magias