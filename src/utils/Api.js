import axios from "axios";

export const getAllCards = () => {
  return axios
    .get("https://picsum.photos/v2/list?page=1&limit=10")
    .then(response => response.data);
};
