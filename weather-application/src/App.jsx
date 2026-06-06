import './App.css'
import Header from './Header'
import MainContent from './MainContent'

export default function App() {
  return (
    <>
    <div>
      <Header /> 
      <div style={{ display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' }}>
      <MainContent />
      </div>
    </div>
    </>
  )
}
