import axios from "axios";
import keys from "../keys";

const api = axios.create({
  baseURL: keys.apiUrl,
});

export default api;
