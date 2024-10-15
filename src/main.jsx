import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-g1rox5p81ig7b5of.us.auth0.com"
    clientId="TJK0XkcRuFGfboHRRFWyKdW6nHNAji00"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
