import './App.css'

export default function Header() {
  return (
    <>
     <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black', color: 'white', padding: '0 20px' }}>
      <h1>Weather Application</h1>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', }}>
          <li><a href="" style={{ color: 'white', textDecoration: 'none' }}>home</a></li>
          <li><a href="" style={{ color: 'white', textDecoration: 'none' }}>products</a></li>
        </ul>
      </nav>
     </header>
    </>
  )
}
