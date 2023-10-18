import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ItemContextProvider } from './context/ItemsContext.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ItemContextProvider>
        <App />
      </ItemContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
