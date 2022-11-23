import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'

import './index.css'

import App from './App'
import { AuthProvider } from './contexts/AuthContext'

import { Verify } from './components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'verify',
    element: <Verify/>,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
