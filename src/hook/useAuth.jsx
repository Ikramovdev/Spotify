import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { API_REQUEST } from "./useEnv"
import { Context } from "../context/Context"
const useAuth = (code) => {
  const { accessToken, setaccessToken } = useContext(Context)
  useEffect(() => {
    axios.post(`${API_REQUEST}/login`, { code }).then(res => {
      setaccessToken(res.data.accesToken);
      history.pushState({}, null, "/")
    })
      .catch(() => location = "/")
  }, [])
  return accessToken
}

export default useAuth