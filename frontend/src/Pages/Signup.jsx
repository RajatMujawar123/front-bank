import { Box, Select, Button, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import "../Style/Login.css"
import "../Style/Signup.css"
import { useSelector } from 'react-redux'; import "../Style/Login.css"
import axios from "axios"
import { useToast } from '@chakra-ui/react'
import Load from '../Components/Login/Load';


const postData = (payload) => {
     return axios.post("https://lime-smiling-ladybug.cyclic.cloud/user/signup", payload)
}


const Signup = () => {
     const [name, setName] = useState("");
     const[load,setLoad]=useState(false)
     const [role, setRole] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const navigate = useNavigate();
     const toast = useToast()


     const handleSubmit = () => {
          setLoad(true)
          if(email===""|| name==="" || role==="" ||password===""){
               setLoad(false)
               toast({
                    position: 'top-center',
                    render: () => (
                      <div style={{ backgroundColor: " #272150", borderRadius: "9px", display: "flex", justifyContent: "space-around", alignItems: "center", width: "400px", padding: "10px 10px", height: "50px", color: "white" }}>
                        Enter all details
                      </div>
                    ),
                  })
          }
          else{
               let data = { name, email, role, password }
               postData(data).then((r) => {    
                    setLoad(false)
                    navigate("/")
                
               })
               .catch((e) => {
                    setLoad(false)
                         alert(`${e}`)
                    })
                }
        
     }
     return (
          <div className="login-box">
              
              <div style={{ height: "450px" }} className={"loginform-box"}>
               <h1 style={{ color: "#f98221", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>Sign up</h1>
               <Input mt="20px" value={name} placeholder=' name' bgColor="white" onChange={(e) => setName(e.target.value)} />

               <Input mt="20px" value={email} placeholder=' email' bgColor="white" onChange={(e) => setEmail(e.target.value)} />


               <Input mt="20px" type="password" value={password} placeholder={"password"} bgColor="white" onChange={(e) => setPassword(e.target.value)} />
               <Select className='role' value={role} placeholder='select role' onChange={(e) => setRole(e.target.value)} name="" id="">
                    <option value="customer">Customer</option>
                    <option value="banker">Admin</option>
               </Select>
               {
                    load?<Box w="100%" display="flex" justifyContent={"space-around"} alignItems={"center"}><div class="custom-loader"></div></Box>:<Button w="100%" bgColor={"#f98221"} onClick={handleSubmit} color="white" p="0 10px" m="auto" display="flex" mt="15px">Sign up</Button>

               }
               <Button w="100%" bgColor={"#f98221"} color="white" p="0 10px" m="auto" display="flex" mt="15px" onClick={() => navigate("/")}>Already have account</Button>

          </div>
            
               
          </div>
     )
}

export default Signup;
