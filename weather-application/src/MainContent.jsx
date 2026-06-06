import { useState, useEffect } from "react";
import FetchData from "./FetchData";

export default function MainContent() {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchCity) return;

    const executeFetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await FetchData(searchCity);
        setData(result);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    executeFetch();
  }, [searchCity]);

  if (loading) return <p>Loading data for {searchCity}...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <label htmlFor="city">Enter The City: </label>
        <input
          id="city"
          type="text"
          style={{ color: "black" }}
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button 
          style={{ fontSize: "20px", color: "black", borderRadius: "10px", marginLeft: "10px" }} 
          onClick={() => setSearchCity(city)}
        >
          Search
        </button>
      </div>

      {data && (
        <div>
          <h1>Data for {searchCity}</h1>
          {/* Render your data properties here */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
