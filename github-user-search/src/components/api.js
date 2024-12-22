import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`,
  },
});

export default apiClient;
