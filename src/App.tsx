import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>

      </div>
      <h1>Frontend Practice</h1>
      <div className="card">
        <a href="frontend-mentor/qr-code-component-main/index.html">QR code component</a>
        <p>
        </p>
      </div>
    </div>
  )
}

export default App
