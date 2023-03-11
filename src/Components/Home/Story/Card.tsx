import React from 'react'
import styled from 'styled-components'
import chat from "../../Assets/card-hover.png"

interface props{
    title:string;
    sub:string;
    img:string
}

const Card:React.FC<props> = ({title,sub,img}) => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                    <Title>{title}</Title>
                    <Sub>{sub}</Sub>
                </First>
                <Second>
                    <Img src={img}/>
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Card
const Img = styled.img``

const Sub = styled.div`
font-size: 15px;
color: grey;
`

const Title = styled.div`
/* text-align: right; */
margin: 5px;
font-size: 23px;
font-weight: 600;
`

const Second  = styled.div`
margin-bottom: 40px;
`

const First  = styled.div`
text-align: right;
margin-right: 10px;
line-height: 20px;
`

const Wrapper  = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Container  = styled.div`
display: flex;
/* background-color: whitesmoke; */
height: 150px;
width: 300px;
box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;

:hover{
    background-image: url(${chat});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    
}
`