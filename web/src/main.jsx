import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import { Magias } from './components/magias/Magias';
import { Personagens } from './components/personagens/Personagens'



const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Personagens />
  // },
  // {
  //   path: "/magias",
  //   element: <Magias />
  // },
  // {
  //   path: "/app",
  //   element: <App />
  // }

  {
    path: "/",
    element:<App />,
    // errorElement: <Error />
    children: [
       {
          path: "/",
          element: <Personagens />
        },
        {
          path: "/magias",
          element: <Magias />
        },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
