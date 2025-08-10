import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeApp from './components/ThemeApp'
import Quotes from './components/Quotes'
import UserApp from './components/UserApp'
import Stopwatch from './components/Stopwatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Question 1</h1>
     <ThemeApp/>

    <h1>Question 2</h1>
    <Quotes/>

    <h1>Question 3</h1>
    <UserApp/>

    <h1>Question 4</h1>
    <Stopwatch/>

    </>
  )
}

export default App
