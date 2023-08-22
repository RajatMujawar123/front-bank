import React, { useState, useEffect } from 'react'
import "../Style/Trasectionpage.css";
import Navbar from '../Components/Navbar';
import Depositmodel from '../Components/Trasectionpage/Depositmodel';
import { useSelector, useDispatch } from 'react-redux';
import { getTransection } from "../Redux/AppReducer/action"
import { Box, SimpleGrid } from '@chakra-ui/react';
import Withdrawmodel from '../Components/Trasectionpage/Withdrawmodel';
import Load from '../Components/Login/Load';


const Transectionpage = () => {
  const dispatch = useDispatch();
  const data = useSelector(store => store.AppReducer.data)
  const profile = useSelector(store => store.ProfileReducer.data)
  const isLoading=useSelector(store => store.AppReducer.isLoading)

  useEffect(() => {
    if (profile._id) {
      dispatch(getTransection(profile._id))
    }

  }, [profile._id])
  return (
    <div className='trasectionpage'>
      <Navbar />
      <div className="listbox">
        <div className="listhead">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg> <span style={{ marginLeft: "10px", fontSize: "25px", fontWeight: "bold" }}>Transection list</span>
          </div>
          <div className='btn-box'>
            <Depositmodel />
            <Withdrawmodel />
      
          </div>

        </div>
        <Box w="100%" h="auto" mt="20px" borderTop="1px solid black">
          <Box w="100%" bgColor="#d2d9d4" borderBottom={"1px solid black"} display="flex" justifyContent={"space-around"} alignItmes="center">
            <Box w="15%" fontSize={["12px", "18px", "20px", "25px"]} >Sr no.</Box>
            <Box w="15%" fontSize={["12px", "18px", "20px", "25px"]} >Data</Box>
            <Box w="15%" fontSize={["12px", "18px", "20px", "25px"]} >Time</Box>
            <Box w="15%" fontSize={["12px", "18px", "20px", "25px"]}>Process</Box>
            <Box w="15%" fontSize={["12px", "18px", "20px", "25px"]} >amount</Box>
            <Box w="15%" fontSize={["12px", "18px", "20px", "25px"]} >balance</Box>

          </Box>
          {isLoading?<Load/>: data.length === 0 ? <h4 style={{ fontSize: "25px", marginTop: "20px" }}>... No transection</h4> : data.map((ele, index) => (
              <SimpleGrid bgColor={index % 2 !== 0 ? "#d2d9d4" : "white"} w="100%" minChildWidth="200px" display="flex" justifyContent={"space-around"} alignItems="center">
                <Box w="15%" fontSize={["12px", "18px", "20px", "20px"]}>{index + 1}</Box>
                <Box w="15%" fontSize={["12px", "18px", "20px", "20px"]}>{ele.date.split("T")[0].split("-").reverse().join("-")}</Box>
                <Box w="15%" fontSize={["12px", "18px", "20px", "20px"]}>{ele.time}</Box>
                <Box w="15%" fontSize={["12px", "18px", "20px", "20px"]} >{ele.status}</Box>
                <Box w="15%" fontSize={["12px", "18px", "20px", "20px"]} color={ele.status == "Deposit" ? "green.400" : "red"}>{ele.status == "Deposit"?"+":"-"} { ele.actionamount}</Box>
                <Box w="15%" fontSize={["12px", "18px", "20px", "20px"]}>{ele.balance} /-</Box>

              </SimpleGrid>
            ))
          }
        </Box>

      </div>

    </div>
  )
}

export default Transectionpage;