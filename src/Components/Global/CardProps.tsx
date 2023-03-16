import React from 'react'
import styled from 'styled-components'

interface props{
    image:string;
    span:string;
    p:string
}

const CardProps:React.FC<props> = ({image,p,span}) => {
  return (
    <div>
        <Container>
            <Image src={image}/>
            <br />
            <span>{span}</span>
            <p>{p}</p>
        </Container>
    </div>
  )
}

export default CardProps

const Image = styled.img``

const Container = styled.div`
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
display: flex;
justify-content: center;
width: 20px;
height: 200px;
background-color: #ffffff;
border-radius: 3px;
cursor: pointer;

@media screen  and (max-width: 768px) {
    flex-wrap: wrap;
    width: auto;
    margin-bottom: 30px;
}

@media screen and (max-width:320px) and (max-width:500px) {
    display: flex;
    flex-direction: column;
    width: auto;
    margin-bottom: 30px;
    height: auto;
}

span{
    margin-left: 17px;
    font-weight: 600;
}
`