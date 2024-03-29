import axios from "axios";

export const apiEconomy = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/json"
});