import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://burger-react-app-da224.firebaseio.com/"
});

export default axiosInstance;