export default function FetchData({city}) { 
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    if (loading) return <p>Loading data for {city}...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  return ( 
      <div style={{ padding: '10px', border: '1px solid #ccc' }}>
      <h3>Results for {city}</h3>
      
      {/* Customize this part to match the exact structure of your API response */}
      <pre>{JSON.stringify(data, null, 2)}</pre> 
    </div>
  ) 
}
