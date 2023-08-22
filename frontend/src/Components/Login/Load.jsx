import React from 'react'
import { Box } from "@chakra-ui/react"
import "./Load.css"
const Load = () => {
  return (
    <Box w="100%" h="400px"  display="flex" justifyContent="space-around" alignItems="center">
      {/* <img src="https://i.gifer.com/VAyR.gif" alt="" /> */}
      <div className="custom-load"></div>
    </Box>
   
  )
}

export default Load