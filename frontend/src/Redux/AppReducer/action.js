import axios from "axios"
import * as types from "./actionType"

const addTransection = (payload, token) => (dispatch) => {
  dispatch({ type: types.GET_POST_REQUEST })
  return axios.patch("https://lime-smiling-ladybug.cyclic.cloud/account/transection", payload, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `${token}`
    }
  }).then((r) => {
    dispatch({ type: types.GET_POST_SUCCESS, payload: r.data })


  }).catch((e) => {
    dispatch({ type: types.GET_POST_FAILURE })
  })
}

const getTransection = (id) => (dispatch) => {
  console.log(id)
  dispatch({ type: types.GET_POST_REQUEST });
  return axios.get(`https://lime-smiling-ladybug.cyclic.cloud/account/gettransection/${id}`).then((r) => {
    dispatch({ type: types.GET_POST_SUCCESS, payload: r.data })
  })
    .catch((e) => {
      dispatch({ type: types.GET_POST_FAILURE })
      console.log(e)
    })
}

const getAccounts = (token) => (dispatch) => {

  const options = {
    url: 'https://lime-smiling-ladybug.cyclic.cloud/user/getalluser',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `${token}`
    },

  };
  dispatch({ type: types.GET_POST_REQUEST });
  return axios(options).then((r) => {
    dispatch({ type: types.GET_POST_SUCCESS, payload: r.data })
  })
    .catch((e) => {
      dispatch({ type: types.GET_POST_FAILURE })
      console.log(e)
    })
}

export { addTransection, getTransection, getAccounts }