import { useState } from 'react'
import './App.css'
import { Shop } from './components/shop/Shop'
import { evenNumber, Products } from './components/products/Products'
import Watch from './components/watch/watch'

function App() {
  const [count, setCount] = useState(0)
const b = Products(4, 5)
const c = evenNumber

  return (
    <>
<Watch></Watch>

    </>
  )
}

export default App
