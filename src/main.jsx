import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app/App.jsx'
import FilterContext from "./context/FilterContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterContext>
      <App />
    </FilterContext>
  </StrictMode>,
)
