import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7268/api",
});

export default Api;