import styled from "styled-components"
import {useNavigate, useParams } from 'react-router-dom';
import { useRef } from "react";
import  axios from "axios"
export default function TransactionsPage() {
  const params = useParams().tipo
  const  valor = useRef(null)
  const descripton = useRef(null)
  const navigate = useNavigate()
  const sendForm = () =>{
    event.preventDefault()
    axios.post(`${import.meta.env.VITE_API_URL}/transations`,
    {
      value:valor.current.value,
      descripton:descripton.current.value,
      type:params
    })
    .then(()=>{
      alert("operação realizada com  sucesso!!")
      navigate("/home")
    }).catch((err)=>{
      alert(err.response.data)
    })
  }
  return (
    <TransactionsContainer>
      <h1>Nova TRANSAÇÃO</h1>
      <form onSubmit={sendForm}>
        <input placeholder="Valor" ref={valor} type="number" required/>
        <input placeholder="Descrição" ref={descripton} type="text" required />
        <button>Salvar TRANSAÇÃO</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`
