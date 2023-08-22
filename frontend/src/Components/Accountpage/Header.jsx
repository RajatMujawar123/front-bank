import React, { useState, useEffect } from 'react'
import "../Navbar.css"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { getProfile, getSingleProfile } from '../../Redux/ProfileReducer/action'

const Header = ({ id }) => {
     const dispatch = useDispatch();
     const token = useSelector(store => store.AuthReducer.token)
     const profile = useSelector(store => store.ProfileReducer.data)

     useEffect(() => {
          dispatch(getSingleProfile(token, id))
     }, [token, id])
     return (
          <div className='navbar'>
               <div className="nav-section">
                    account holder:-{profile.name}
               </div>
               <div className="nav-section">
                    account balance:-{profile.balance}
               </div>

          </div>
     )
}

export default Header;