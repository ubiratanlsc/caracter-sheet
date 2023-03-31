import mongoose from "mongoose";

mongoose.connect("mongodb+srv://humanos:super765@node-express-talentos.utuggn6.mongodb.net/express")//?retryWrites=true&w=majority


let db = mongoose.connection;

export default db;
