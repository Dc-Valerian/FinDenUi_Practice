import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import HomePage from '../HomePage/HomePage'
import HomeScreen from '../HomeScreen/HomeScreen'

const AllRoutes = () => {
    let element =useRoutes ([
        {
            path:"/",
            element:<HomeScreen/>
        },
        {
            path:"signin",
            element:<Register/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },{
            path:"/homepage",
            element:<HomePage/>
        }
    ])
  return element;
}

export default AllRoutes