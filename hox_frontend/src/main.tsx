import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import queryClient from './api/queryClient.ts';
import {  QueryClientProvider } from 'react-query'



createRoot(document.getElementById('root')!).render(
 
    
    <App />
    
  
)
