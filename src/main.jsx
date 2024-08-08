import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home } from './screens/Home.jsx'
import { AuthenticationPage } from './screens/AuthenticationPage.jsx'



const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path='/' element={<App/>}>
       <Route path='' element={<Home />} />
       <Route path='authentication' element={<AuthenticationPage />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
   </React.StrictMode>,
)
