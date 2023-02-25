import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FrontendMentor from './components/FrontendMentor';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/frontendmentor",
    element: <FrontendMentor />
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
