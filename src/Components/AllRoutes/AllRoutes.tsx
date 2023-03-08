import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import HomeScreen from '../HomeScreen/HomeScreen'

const AllRoutes = () => {
    let element =useRoutes ([
        {
            path:"/",
            element:<HomeScreen/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        }
    ])
  return element;
}

export default AllRoutes