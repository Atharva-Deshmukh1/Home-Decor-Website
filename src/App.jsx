import { useState } from 'react'
import './App.css'
import Layout from './Layout';
import Header from '../Components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    </>
  )
}

export default App;
