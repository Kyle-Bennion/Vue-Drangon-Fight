import Axios from "axios";

export const api = Axios.create({
  baseURL: 'https://drag-vs-champ.herokuapp.com/api',
  timeout: 3000
})