import mongoose from "mongoose"

const talentoSchema = new mongoose.Schema({
     id: { type: String },
     tipo: { type: String },
     prerequisitos: { type: String },
     titulo: { type: String, required: true },
     introducao: { type: String },
     beneficio: { type: String, required: true },
     especial: { type: String },
     livro: { type: String, required: true },
})

const talentos = mongoose.model('talentos', talentoSchema)

export default talentos