

import ImgRequestDev from '../../assets/request-burger.png'
import { CardRequest, ContainerRequests, ImgRequest, NameClient, TextRequest, TrashIcon } from './styles'
import Button from '../../components/Button/index'
import Title from '../../components/Title/index'
import Trash from '../../assets/delete.svg'
import Container from '../../components/Container/index'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'

function AllRequests() {
  const navigate = useNavigate()
  const [requests, setRequests] = useState([])
  
  useEffect(() => {

    async function getRequests() {

      const { data } = await api.get('/pedidos')
      setRequests(data)
      
    }
    getRequests()

  }, [])

  async function deleteRequests(id) {
    await api.delete(`/pedidos/${id}`)

    const updatedRequests = requests.filter(request => request.id !== id)

    setRequests(updatedRequests)
    
  }

  return (
    <>
      <Container>

        <ImgRequest>
          <img src={ImgRequestDev} alt='imagem-requests' />
        </ImgRequest>


        <Title>Pedidos</Title>

        
          
        <ContainerRequests  >
        {requests.map((request) =>(

          <CardRequest key={request.id}>
                   
            <div  >
              <TextRequest>{request.request}</TextRequest>
              <NameClient>{request.client}</NameClient>
            </div>
          
            <TrashIcon src={Trash} alt='icone-delete' onClick={()=> deleteRequests(request.id)}  />
            
          </CardRequest>

          ))}
        </ContainerRequests>
          
        

        <Button onClick={() => navigate('/')} type="button">Voltar</Button>
      </Container>
    </>
  )
}

export default AllRequests