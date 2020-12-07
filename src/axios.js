import axios from "axios";

const instance = axios.create({
  baseURL: "https://warm-woodland-30660.herokuapp.com",
});

export default instance;