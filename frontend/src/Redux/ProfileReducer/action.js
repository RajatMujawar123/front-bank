import * as types from "./actionTypes"
import axios from "axios"
import { addTransection } from "../AppReducer/action";

const getProfile = (token) => (dispatch) => {
  const options = {
    url: 'https://lime-smiling-ladybug.cyclic.cloud/user/getprofile',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `${token}`
    },

  };
  dispatch({ type: types.GET_PROFILE_REQUEST })
  return axios(options).then((r) => {
    dispatch({ type: types.GET_PROFILE_SUCCESS, payload: r.data })
  }).catch((e) => {
    dispatch({ type: types.GET_PROFILE_FAILURE })
  })
}

const updateProfile = (token,toast, payload, { task }, onClose) => (dispatch) => {

  dispatch({ type: types.GET_PROFILE_REQUEST })
  return axios.patch("https://lime-smiling-ladybug.cyclic.cloud/user/updateprofile", payload, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `${token}`
    }
  }).then((r) => {
    dispatch({ type: types.GET_PROFILE_SUCCESS, payload: r.data })
    toast({
      position: 'top-center',
      render: () => (
        <div style={{ backgroundColor: " #272150", borderRadius: "9px", display: "flex", justifyContent: "space-around", alignItems: "center", width: "400px", padding: "10px 10px", height: "50px", color: "white" }}>
         {task}
        </div>
      ),
    })
    onClose();
    dispatch(getProfile(token));
  }).catch((e) => {
    dispatch({ type: types.GET_PROFILE_FAILURE })
  })
}


const getSingleProfile = (token, id) => (dispatch) => {
  const options = {
    url: `https://lime-smiling-ladybug.cyclic.cloud/user/getsingleuser/${id}`,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `${token}`
    },

  };
  dispatch({ type: types.GET_PROFILE_REQUEST })
  return axios(options).then((r) => {
    dispatch({ type: types.GET_PROFILE_SUCCESS, payload: r.data })
  }).catch((e) => {
    dispatch({ type: types.GET_PROFILE_FAILURE })
  })
}


const Logout = (navigate) => (dispatch) => {
  dispatch({ type: types.LOG_OUT })
  navigate("/")
}

export { getProfile, updateProfile, getSingleProfile, Logout }
