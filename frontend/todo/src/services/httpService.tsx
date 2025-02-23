import axios from "axios";

axios.defaults.baseURL = import.meta.env.Todo_URL;


const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

export default http;
