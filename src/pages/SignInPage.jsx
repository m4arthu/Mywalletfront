import styled from "styled-components"
import { Link } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useContext, useRef } from "react"
import { AuthContext } from "../contexts/authContext"

export default function SignInPage() {
  const {login} = useContext(AuthContext)

  const email = useRef(null)
  const password = useRef(null)
  function sendForm(){
    event.preventDefault()
    login(email.current.value,password.current.value)
  }
  return (
    <SingInContainer>
      <form onSubmit={sendForm}>
        <MyWalletLogo />
        <input placeholder="E-mail" ref={email} type="email" required />
        <input placeholder="Senha" ref={password} type="password"  required />
        <button>Entrar</button>
      </form>

      <Link to={"/cadastro"}>
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
