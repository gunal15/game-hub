import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dd34a07f81234c59a92ef437c42995c1",
  },
});
