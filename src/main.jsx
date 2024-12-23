import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Authercon from './context/authercon.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Authercon>
  <App></App>
  </Authercon>
  </StrictMode>,
)
