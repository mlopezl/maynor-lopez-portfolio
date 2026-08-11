import './App.css'
import profileImage from '../public/perfil.webp'
import Header from './components/Header'

function App() {

  return (
    <div className='w-full min-h-screen bg-slate-800'>
      <Header/>
      <img src={profileImage} alt="" />
    </div>
  )
}

export default App
