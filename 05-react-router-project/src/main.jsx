import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Router, RouterProvider, createBrowserRouter, createRoutesFromElements,Route} from 'react-router'

import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub, { githubLoader } from './components/GitHub/GitHub.jsx'

//const router =createBrowserRouter([
  // {
  //     path: '/',
  //     element: <Layout/>,
  //     children: [
  //       {
  //         path: "",
  //         element: <Home/>

  //       },
  //       {
  //         path :"About",
  //         element:<About/>
  //       },
  //       {
  //         path:"Contact",
  //         element:<Contact/>
  //       }
  //     ]
  // }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='User/:userId' element={<User/>}/>
      <Route 
      loader={githubLoader}
      path='GitHub' element ={<GitHub/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
