import { createContext } from "react";
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"

export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const isLoged = () =>{
   let token =  localStorage.getItem("token")
   if(token){
    axios.defaults.headers.common['Authorization'] = token
    return true
   } else {
    return false
   }
  }
  
  const login = (email, password,setDisabled) => {
    axios.post(`${import.meta.env.VITE_API_URL}/`, {
      email: email,
      password: password
    })
      .then(async(res) => {
        localStorage.setItem("token", res.data)
        setDisabled(false)
        navigate("/home")
      })
      .catch((err) => {
        alert(err.response.data)
        if (err.response.status === 404) {
          navigate("/cadastro")
        }
      })
  }

  const register = (name, email, password) => {
    axios.post(`${import.meta.env.VITE_API_URL}/cadastro`,
      {
        name: name,
        email: email,
        password: password
      })
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }
  return (
    <AuthContext.Provider value={{ login, register, isLoged }}>
      {children}
    </AuthContext.Provider>
  )
}