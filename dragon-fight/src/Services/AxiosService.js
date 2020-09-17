import Axios from "axios";

export const api = Axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/champions',
  timeout: 3000
})