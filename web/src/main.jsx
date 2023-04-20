import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import { Magias } from './components/magias/Magias';
import { Personagens } from './components/personagens/Personagens'
import Sidebar from './sidebar/Sidebar';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Personagens />
  },
  {
    path: "/magias",
    element: <Magias />
  },
  {
    path: "/app",
    element: <App />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar>
      <RouterProvider router={router} />
    </Sidebar>

  </React.StrictMode>
)
