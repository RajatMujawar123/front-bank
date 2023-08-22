import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './Login'
import Accountpage from './Accountpage'
import Transectionpage from './Transectionpage'
import Signup from './Signup'
import SingleUser from './SingleUser'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
     return (
          <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/accountpage" element={<PrivateRoute><Accountpage /></PrivateRoute>} />
               <Route path="/transectionpage" element={<PrivateRoute><Transectionpage /></PrivateRoute>} />
               <Route path="/singleuser/:id" element={<PrivateRoute><SingleUser /></PrivateRoute>} />


          </Routes>
     )
}

export default AllRoutes;