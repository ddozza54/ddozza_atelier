import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1>HEllo</h1>
    </>
  )
}

export default App
