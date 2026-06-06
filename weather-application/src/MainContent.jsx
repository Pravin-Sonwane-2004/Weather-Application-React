import { useState } from "react"
import FetchData from "./FetchData";
// this wont work i need to use here useEffect in which i can return the apus
export default function MainContent() {
   

    const [state,setState] = useState(false);
    const [city,setCity] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (loading) return <p>Loading data for {city}...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
    return (
        <>
            <div style={{display:'flex',flexDirection:'column', gap:'40px'}}>
                <div>
            <label htmlFor="city">Enter The City:   </label>
            <input type="text" style={{ color:'black'}} 
                    placeholder="Enter city name..." 
                    value={city}
                    onChange={(e) => setCity(e.target.value)} // Updates state on type
                />
        </div>
        <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
             <button style={{fontSize:'20px',color:'black', border:'20px' ,borderBlock:'10px',borderRadius: '10px'}} 
             onClick={()=>setState(prev => !prev)}>Search   </button>
                <div style={{ display: 'flex' }}>
             {state && <h1>data is showing</h1>} 
             </div>
                
        </div>
        </div>
        </>
    )
}