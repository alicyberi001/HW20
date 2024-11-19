import axios from "axios";

const serverUrl = "https://task-manager.pockethost.io/";
export const generateClient = () => {
  return axios.create({
    baseURL: serverUrl,
  });
};
