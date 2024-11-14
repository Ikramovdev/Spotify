import axios from 'axios'
import  { useEffect, useState } from 'react'
import { API_REQUEST } from "./useEnv"
const useAuth = (code) => {
    console.log(API_REQUEST);
    const [accesToken,setAccesToken] = useState(null)
  useEffect(() => {
    axios.post(`${API_REQUEST}/login`,{code}).then(res =>{
        console.log(res.data);
    })
    .catch(() => location = "/")
  },[])
}

export default useAuth