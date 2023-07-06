import { createContext } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const navigate = useNavigate()
    
    const login = (email,password) => {
    axios.post("http://localhost:5000/",{
      email: email,
      password: password
    })
    .then((res)=>{
      localStorage.setItem("token",res.data)
      navigate("/home")
    })
    .catch((err)=>{
      alert(err.response.data)
      if(err.response.status === 404){
        navigate("/cadastro")
      }
    })
   } 

   const register = (name,email,password) =>{
    axios.post("http://localhost:5000/cadastro",
      {
        name:name,
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
    return(
        <AuthContext.Provider value={{login,register}}>
            {children}
        </AuthContext.Provider>
    )
}