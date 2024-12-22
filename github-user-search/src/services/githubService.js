import axios from "axios";

/**
 * Fetch GitHub users based on an advanced search query.
 * @param {string} username - GitHub username (optional).
 * @param {string} location - User location (optional).
 * @param {string} minRepos - Minimum number of public repositories (optional).
 * @returns {Promise<Object>} - The response data containing search results.
 */
const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  };
  
const fetchAdvancedSearchResults = async ({ username, location, minRepos }) => {
  // Construct query string
  const queryParts = [
    username ? `user:${username}` : null,
    location ? `location:${location}` : null,
    minRepos ? `repos:>=${minRepos}` : null,
  ].filter(Boolean); // Remove null values

  const query = queryParts.join("+");

  // Make API request
  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );

  return response.data;
};

export default fetchAdvancedSearchResults;
