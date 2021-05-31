import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-dab7a-default-rtdb.europe-west1.firebasedatabase.app/"
});

export default instance;
