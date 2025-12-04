import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cats from './Cats'
import Dogs from './Dogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Neon Cats</h1>
      <div className="card">
        <Cats />
      </div>
      <h1>Supabase Dogs</h1>
      <div className="card">
        <Dogs />
      </div>
      
    </>
  )
}

export default App
