import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {MovieProvider} from "@/providers/movie-provider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MovieProvider>
        <App />
      </MovieProvider>
  </React.StrictMode>,
)
