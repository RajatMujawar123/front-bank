import React, { useState, useEffect } from 'react'
import "../Navbar.css"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { getProfile, getSingleProfile } from '../../Redux/ProfileReducer/action'
import { useNavigate } from "react-router-dom"
import { Logout } from '../../Redux/ProfileReducer/action'
const Head = () => {
     const dispatch = useDispatch();
     const token = useSelector(store => store.AuthReducer.token)
     const profile = useSelector(store => store.ProfileReducer.data)
     const navigate = useNavigate()

     const handleLogout = () => {
          dispatch(Logout(navigate))
     }


     useEffect(() => {
          dispatch(getProfile(token))
     }, [token])
     return (
          <div className='navbar'>
               <div className="nav-section">
                    banker admin:-{profile.name}
               </div>
               <button onClick={handleLogout} className="logout-btn">
                    logout
               </button>

          </div>

     )
}

export default Head;