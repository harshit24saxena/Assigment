import {createBrowserRouter, RouterProvider,} from 'react-router'
import './App.css'
import LandingPage from './components/landing page/LandingPage'
import SignIn from './components/signinPage/SigninPage'
import { LoginPage } from './components/login page/LoginPage'
import { ProfilePage } from './components/profile page/ProfilePage'

function App() {
  let router = createBrowserRouter([
  {
    path:'/',
    Component: LandingPage,
  },
  {
    path:'/signin',
    Component: SignIn
  },
  {
    path:'/login',
    Component: LoginPage
  },
  {
    path:'/profile',
    Component: ProfilePage
  },

  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
