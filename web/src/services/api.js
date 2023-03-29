import axios from "axios";

const api = axios.create({
  baseURL:"http://ficha.ddns.net:3000/"
})

export default api