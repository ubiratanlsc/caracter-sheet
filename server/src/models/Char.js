import mongoose from "mongoose"
const charSchema = new mongoose.Schema({
     id: { type: String },
     nome: { type: String },
     raca: { type: String },
     classe: { type: String },
     genero: { type: String },
     tamanho: { type: String },
     deslocamento: { type: String },
     tendencia: { type: String },
     divindade: { type: String },
     nivel: { type: Number },
     idade: { type: Number },
     forca: { type: Number },
     destreza: { type: Number },
     constituicao: { type: Number },
     inteligencia: { type: Number },
     sabedoria: { type: Number },
     carisma: { type: Number },
     pontosVida: { type: Number },
     pontosMagia: { type: Number },
     reducaoDano: { type: String },
     recistenciaEnergia: [],
     fortitude: { type: Number },
     reflexo: { type: Number },
     vontade: { type: Number },
     bba: [],
     habilidadesRacaEClasse: [],
     talentosMagias: [],
     armaduras: [],
     pericias: []

     




})
const chars = mongoose.model('chars', charSchema)

export default chars