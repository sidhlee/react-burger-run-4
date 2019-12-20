import axios from "axios";

export default axios.create({
  baseURL: "https://burger-run-4.firebaseio.com/"
});
