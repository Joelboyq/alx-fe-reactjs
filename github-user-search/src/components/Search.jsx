import React, { useState } from "react";
import fetchAdvancedSearchResults from "../services/githubService";
import fetchUserData from "../services/fetchUserData"; // Import fetchUserData for basic search

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      if (location || minRepos) {
        // Use advanced search if additional criteria are provided
        const data = await fetchAdvancedSearchResults({
          username,
          location,
          minRepos,
        });
        setResults(data.items || []);
      } else if (username) {
        // Use basic search if only username is provided
        const user = await fetchUserData(username);
        setResults([user]); // Wrap the single user in an array for consistent rendering
      } else {
        setError(true); // Handle the case where no criteria are provided
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <form
        onSubmit={handleSearch}
        className="space-y-4 bg-gray-100 p-4 rounded shadow"
      >
        <h1 className="text-xl font-bold">GitHub User Search</h1>
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="block w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="block w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && (
        <p className="mt-4 text-red-500">
          An error occurred. Please check your input and try again.
        </p>
      )}
      {results.length > 0 && (
        <div className="mt-4">
          {results.map((user) => (
            <div
              key={user.id}
              className="flex items-center p-2 border rounded mb-2"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="font-bold">{user.login}</h2>
                <p>{user.location || "Location not available"}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
