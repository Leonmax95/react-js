import { useState } from 'react'
import './App.css'
import ItemListContainer from './componentes/header/ItemListContainer'
import Header from './componentes/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ItemListContainer />
    </>
  )
}

export default App
