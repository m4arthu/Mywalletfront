import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useContext, useRef } from "react"
import { AuthContext } from "../contexts/authContext"

export default function SignUpPage() {
  const {register} = useContext(AuthContext)
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const passwordConfirm = useRef(null)
  
  function sendForm() {
    event.preventDefault();
    if (password.current.value === passwordConfirm.current.value) {
      register(name.current.value, email.current.value,password.current.value)
    } else {
      alert("password and comfirm password must be equal")
    }
  }
  return (
    <SingUpContainer>
      <form onSubmit={sendForm}>
        <MyWalletLogo />
        <input required ref={name} placeholder="Nome" type="text" />
        <input required ref={email} placeholder="E-mail" type="email" />
        <input required ref={password} placeholder="Senha" type="password" />
        <input required ref={passwordConfirm} placeholder="Confirme a senha" type="password"  />
        <button>Cadastrar</button>
      </form>

      <Link to={"/"}>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
