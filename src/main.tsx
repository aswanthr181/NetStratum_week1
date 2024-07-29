import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  
    <GoogleOAuthProvider
      clientId='76252509575-d70u475q6dliihkakfll1mdse5qgcekc.apps.googleusercontent.com' >
    <App />
  </GoogleOAuthProvider>

  </React.StrictMode >,
)
