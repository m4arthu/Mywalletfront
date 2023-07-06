import styled from "styled-components"
import { BiExit } from "react-icons/bi"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

export default function HomePage() {
  const navigate = useNavigate()
  const [transations, setTransations] = useState([])
  const [user, setUser] = useState("")
  let saldo = 0
  transations.forEach((t) => {
    if (t.type === "saida") {
      saldo -= Number(t.value)
    } else {
      saldo += Number(t.value)
    }
  })
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/home`)
      .then((res) => {
        setTransations(res.data)
        axios.get(`${import.meta.env.VITE_API_URL}/users`) 
          .then((res) => {
            setUser(res.data)
          }).catch((err) => {
            alert(err)
            navigate("/")
          })
      }).catch((err) => {
        alert(err)
        navigate("/")
      })
  }, [])

  const exit = () => {
    localStorage.removeItem("token")
    axios.defaults.headers.common['Authorization'] = ""
    navigate("/")
  }



  return (
    <HomeContainer>
      <Header>
        <h1>Olá, {user}</h1>
        <BiExit onClick={() => exit()} />
      </Header>

      <TransactionsContainer>

        {transations.length < 1 ?
          <ListItemContainer>
            não há transações
          </ListItemContainer> :
          <ul>
            {transations.map((t) => {
              return (
                <ListItemContainer key={t._id}>
                  <div>
                    <span>{t.data}</span>
                    <strong>{t.title}</strong>
                  </div>
                  <Value color={t.type === "entrada" ? "positivo" : "negativo"}>{t.value}</Value>
                </ListItemContainer>
              )
            })}
          </ul>
        }

        <article>
          <strong>Saldo</strong>
          <Value color={saldo < 0 ? "negativo" : "positivo"}>{saldo}</Value>
        </article>
      </TransactionsContainer>


      <ButtonsContainer>
        <button>
          <Link to={"/nova-transacao/entrada"}>
            <AiOutlinePlusCircle />
            <p>Nova <br /> entrada</p>
          </Link>
        </button>
        <button>
          <Link to={"/nova-transacao/saida"}>
            <AiOutlineMinusCircle />
            <p>Nova <br />saída</p>
          </Link>
        </button>
      </ButtonsContainer>

    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: white;
`
const TransactionsContainer = styled.article`
  overflow-y: auto;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  article {
    display: flex;
    justify-content: space-between;   
    strong {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`
const ButtonsContainer = styled.section`
  margin-top: 15px;
  margin-bottom: 0;
  display: flex;
  gap: 15px;
  
  button {
    width: 50%;
    height: 115px;
    font-size: 22px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 18px;
    }
  }
`
const Value = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.color === "positivo" ? "green" : "red")};
`
const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
  margin-right: 10px;
  div span {
    color: #c6c6c6;
    margin-right: 10px;
  }
`