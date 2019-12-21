import axios from "axios";

export default axios.create({
  // will use different URL for auth
  baseURL: "https://burger-run-4.firebaseio.com/"
});
