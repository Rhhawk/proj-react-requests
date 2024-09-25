//import { useState } from 'react'
import { useRef } from 'react'
import ImgBurgerDev from '../../assets/Logo-burger-dev.png'
import { ContainerInput, Input, InputLabel, ImgBurger } from './styles'
import api from '../../services/api'
import { useNavigate} from 'react-router-dom'
import Button from '../../components/Button/index'
import Title from '../../components/Title/index'
import Container from '../../components/Container/index'



function Home() {

  const inputRequest = useRef()
  const inputClient = useRef()
  const navigate = useNavigate()

  async function registerNewRequest(){
    await api.post('/pedidos', {
      pedido: inputRequest.current.value,
      cliente: inputClient.current.value
    })

    navigate('/pedidos')
  }

  return (
    <>
      <Container>

      <ImgBurger>
        <img src={ImgBurgerDev} alt='imagem-principal' /> 
        </ImgBurger>

        <form>
        <Title>Faça seu pedido!</Title>
        
        
        <ContainerInput>

          <div>
            <InputLabel>Pedido</InputLabel>
            <Input type='text' placeholder='Pedido' ref={inputRequest}/>
          </div>

          <div>
            <InputLabel>Nome do Cliente</InputLabel>
            <Input type='text' placeholder='Nome do Cliente' ref={inputClient}/>
          </div>

        </ContainerInput>

        <Button type="button" onClick={registerNewRequest} theme="primary">Novo Pedido</Button>
        </form>
      </Container>
    </>
  )
}

export default Home
