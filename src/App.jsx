import './App.css'
import profileImage from '../public/profile.png'
import Header from './components/Header'

function App() {

  return (
    <div className='w-full min-h-screen flex flex-col items-center font-Inter bg-gradient-to-b from-slate-950 to-teal-950'>
      <Header/>
      <img className='w-100' src={profileImage} alt="" />
    </div>
  )
}

export default App
