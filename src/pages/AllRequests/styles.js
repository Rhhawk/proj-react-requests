import styled from "styled-components";

export const ImgRequest = styled.div`
margin-bottom: 25px;
`


export const ContainerRequests = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 705px){
        grid-template-columns: 1fr;
    }
    
    `


export const TrashIcon = styled.img`
cursor: pointer;
`
export const CardRequest = styled.div`
    background: #FFFFFF40;
    width: 342px;
    height: 101px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 16px;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    

  `

export const NameClient = styled.p`
    color: #fff;
    font-weight: 700;
    text-transform: capitalize;
    font-size: 18px;



`
export const TextRequest = styled.p`
    color: #fff;
    opacity: 0.8;
    font-weight: 300;
    text-transform: capitalize;
    font-size: 18px;
`