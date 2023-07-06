import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import TransactionsPage from "./pages/TransactionPage"
import { AuthProvider } from "./contexts/authContext.jsx"
import axios from "axios"
export default function App() {

  const isLoged = () => {
    const token = localStorage.getItem("token")
    if (token) {
      return true
    } else {
      return false
    }
  }

  return (
    <PagesContainer>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/home" element={isLoged() ? <HomePage /> : <Navigate to={"/"} />} />
            <Route path="/nova-transacao/:tipo" element={isLoged() ? <TransactionsPage /> : <Navigate to={"/"} />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #8c11be;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
