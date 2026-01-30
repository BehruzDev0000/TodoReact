import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {TodoContext} from './context/Context.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoContext>
      <App />
    </TodoContext>
  </StrictMode>,
)
