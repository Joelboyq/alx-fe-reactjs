import axios from "axios";

const fetchAdvancedSearchResults = async (query) => {
  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );
  return response.data;
};

export default fetchAdvancedSearchResults;
