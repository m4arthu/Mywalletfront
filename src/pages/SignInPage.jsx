import styled from "styled-components"
import { Link, Navigate } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useContext, useRef,useState } from "react"
import { AuthContext } from "../contexts/authContext"


export default function SignInPage() {
  const { login, isLoged } = useContext(AuthContext)
  const email = useRef(null)
  const [disabled,setDisabled] = useState(false)
  const password = useRef(null)
  if (isLoged()) {
    return (
      <Navigate to={"home"} />
    )
  } else {
    function sendForm() {
      setDisabled(true)
      event.preventDefault()
      login(email.current.value, password.current.value,setDisabled)
    }
    return (
      <SingInContainer>
        <form onSubmit={sendForm}>
          <MyWalletLogo />
          <input placeholder="E-mail" data-test="email" ref={email} type="email" required />
          <input placeholder="Senha" data-test="password" ref={password} type="password" required />
          <button disabled={disabled} data-test="sign-in-submit">Entrar</button>
        </form>

        <Link to={"/cadastro"}>
          Primeira vez? Cadastre-se!
        </Link>
      </SingInContainer>
    )
  }
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
