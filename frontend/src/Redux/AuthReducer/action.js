import * as types from "./actionTypes"
import axios from "axios"
import { useNavigate } from 'react-router-dom';




const getLogin = (payload, toast, navigate) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST })

  return axios.post("https://lime-smiling-ladybug.cyclic.cloud/user/login", payload).then((r) => {
    if (r.data.token) {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data })
      toast({
        position: 'top-center',
        render: () => (
          <div style={{ backgroundColor: " #272150", borderRadius: "9px", display: "flex", justifyContent: "space-around", alignItems: "center", width: "400px", padding: "10px 10px", height: "50px", color: "white" }}>
            Login successfull
          </div>
        ),
      })
      if (r.data.role === "customer") {
        navigate("/transectionpage")
      } else {
        navigate("/accountpage")
      }


    }
   

  }).catch((e) => {
    console.log(e)
    dispatch({ type: types.LOGIN_FAILURE })

    toast({
      position: 'top-center',
      render: () => (
        <div style={{ backgroundColor: "red.500", color: "white",width:"auto",padding:"10px 10px" }}>
          please enter correct details
        </div>
      ),
    })
  })
}

const getSingleUser = (token) => (dispatch) => {
  dispatch({ type: types.GET_PROFILE_REQUEST })
  const options = {
    url: 'https://lime-smiling-ladybug.cyclic.cloud/instauser/getsingleuser',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `bearer ${token}`
    },

  };



  return axios(options).then((r) => {
    dispatch({ type: types.GET_PROFILE_SUCCESS, payload: r.data })
    console.log(r.data)
  }).catch((e) => {
    console.log(e)
    dispatch({ type: types.GET_PROFILE_FAILURE })
  })
}

/******update profil picture**************** */
const updateProfilepic = (Id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_PROFILE_REQUEST })
  return axios.patch(`https://lime-smiling-ladybug.cyclic.cloud/instauser/updateprofile/${Id}`, payload).then((r) => {
    dispatch({ type: types.UPDATE_PROFILE_SUCCESS, payload: r.data })
    console.log(r.data)
    console.log("update successful")
  }).catch((e) => {
    console.log(e)
    dispatch({ type: types.UPDATE_PROFILE_FAILURE })
  })


}

const handleLogout = (dispatch) => {
  dispatch({ type: types.LOGOUT_SUCCESS })
}






export { getLogin, getSingleUser, updateProfilepic, handleLogout };