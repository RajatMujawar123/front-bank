import React, { useEffect, useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button, Box, Avatar, Input
} from '@chakra-ui/react'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"
import { updateProfile } from '../../Redux/ProfileReducer/action'
import { addTransection } from '../../Redux/AppReducer/action'
import { useToast } from '@chakra-ui/react'
import "./Depositemodel.css"
import { color } from 'framer-motion'
const Depositmodel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [amount, setAmount] = useState(0)
  const profile = useSelector(store => store.ProfileReducer.data)
  const token = useSelector(store => store.AuthReducer.token);
  const isLoading=useSelector(store => store.ProfileReducer.isLoading)
  const dispatch = useDispatch();
  const toast = useToast()

  const handleClick = () => {
    onOpen()
  }
  const handleDeposit = () => {
     let newamount = profile.balance + Number(amount);

    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();
    let data = {
      time: `${currentHours}:${currentMinutes}:${currentSeconds}`,
      status: "Deposit",
      actionamount: amount,
      balance: newamount
  }
  
  dispatch(updateProfile(token,toast, data, { task: "amount added successfull" }, onClose))
  
  }

  return (
    <>
    {
      isLoading?<div className="btn-loader"></div>:      <button className="deposit-btn"  onClick={handleClick}   >Deposit</button>

    }

      <Modal isOpen={isOpen} size={["sm", "sm", "md", "md"]} onClose={onClose}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>DEPOSIT</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} flexDirection={["column", "column", "column", "column"]}>
            <Box display={"flex"} p="15px 15px" w={["auto", "auto", "auto", "auto"]} className="scrollBox" border="1px solid black" h="300px" flexDirection={"column"}   >
              <h1 style={{ fontSize: "25px" }}>Account balance:-  {profile.balance}/-</h1>
              <label style={{ marginTop: "20px", fontSize: "25px" }}>Deposite amount</label>
              <Input  type="number" placeholder={"enter amount"} color="black" bgColor="white" onChange={(e) => setAmount(e.target.value)} />
              <button style={{ width: "200px", margin: "auto", marginTop: "20px" }} className="deposit-btn" onClick={handleDeposit}   >Deposit</button>


            </Box>


          </ModalBody>

          <ModalFooter>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Depositmodel