import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { getProfile, Logout } from '../Redux/ProfileReducer/action'
import { useNavigate } from "react-router-dom"
import { Box } from '@chakra-ui/react'
const Navbar = () => {
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
      <Box className="nav-first-box" w={["100%","70%","70%","60%"]} display="flex"  justifyContent={"space-between"} alignItems="center"  h="100%">
      <div className="nav-section">
        Account holder:-{profile.name}
      </div>
      <div className="nav-section">
        Available balance:-{profile.balance}
      </div>
      </Box>
      <button onClick={handleLogout} className="logout-btn">
        logout
      </button>

    </div>
  )
}

export default Navbar;