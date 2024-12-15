import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

export function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle the form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      return;
    }

    // Clear any previous error or user data
    setUserData(null);
    setError(null);
    setLoading(true);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}
