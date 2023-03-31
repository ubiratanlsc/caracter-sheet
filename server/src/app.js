import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routers/index.js"
import cors from 'cors'
db.on("error", console.log.bind(console, 'Error de conexão'))
db.once("open", () => {
     console.log("open conexão");
})

const app = express();
app.use(cors())
app.use(express.json())

routes(app)


export default app