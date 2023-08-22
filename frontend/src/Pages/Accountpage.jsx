import React, { useState, useEffect } from 'react'
import "../Style/Accountpage.css"
import Head from '../Components/Trasectionpage/Head';
import { Box, SimpleGrid } from "@chakra-ui/react"
import { getAccounts } from '../Redux/AppReducer/action'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
import Load from '../Components/Login/Load';


const Accountpage = () => {
  const dispatch = useDispatch();
  const token = useSelector(store => store.AuthReducer.token)
  const data = useSelector(store => store.AppReducer.data)
  const isLoading=useSelector(store => store.AppReducer.isLoading)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAccounts(token))
  }, [token])
  return (
    <div className='accountpage'>
      <Head />
      <Box w="95%" m="auto" h="auto" mt="20px" borderTop="1px solid black">
        <Box w="100%" mt="60px" fontSize="20px" display="flex" alignItmes="center">
          Total bank accounts:-{data.length || 0}
        </Box>
        <Box w="100%" mt="20px" bgColor="#d2d9d4" borderBottom={"1px solid black"} display={["none","flex","flex","flex"]} justifyContent={"space-around"} alignItmes="center">
          <Box w="15%" fontSize={["12px", "18px", "20px", "25px"]} >Sr no.</Box>
          <Box w="15%" fontSize={["12px", "18px", "20px", "25px"]} >Account holder</Box>
          <Box w="15%" fontSize={["12px", "18px", "20px", "25px"]} >email</Box>
          <Box w="15%" fontSize={["12px", "18px", "20px", "25px"]}>balance</Box>
          <Box w="15%" fontSize={["12px", "18px", "20px", "25px"]} ></Box>


        </Box>
        {
        isLoading?<Load/>:data.length === 0 ? <h4 style={{ fontSize: "25px", marginTop: "20px" }}>... No transection</h4> : data.map((ele, index) => (
            <SimpleGrid p="10px 0" bgColor={index % 2 !== 0 ? "#d2d9d4" : "white"} w="100%" minChildWidth="200px" display="flex" justifyContent={"space-around"} alignItems="center">
              <Box w="12%" fontSize={["12px", "18px", "20px", "20px"]}>{index + 1}</Box>
              <Box w="12%" fontSize={["12px", "18px", "20px", "20px"]}>{ele.name}</Box>
              <Box w="15%" fontSize={["12px", "18px", "20px", "20px"]}>{ele.email}</Box>
              <Box w="15%" fontSize={["12px", "18px", "20px", "20px"]} >{ele.balance}</Box>
              <button className="detail-btn" onClick={() => navigate(`/singleuser/${ele._id}`)}>View Details</button>

            </SimpleGrid>
          ))
        }
      </Box>







    </div>
  )
}

export default Accountpage