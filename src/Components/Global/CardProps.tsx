import React from 'react'
import styled from 'styled-components'

interface props{
    image:any;
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

const Image = styled.img`
/* width: 40%;
height: 40%;
object-fit: cover; */
`

const Container = styled.div`
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
display: flex;
justify-content: center;
width: 280px;
height: 250px;
/* background-color: #ffffff; */
/* background-color: aliceblue; */
border-radius: 3px;
cursor: pointer;
transition: all 350ms;

:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    span{
        color: #644FF6;
    }
}

p{
    color: #030614;
    text-align: center;
    font-weight: 500;
    width: 270px;
    font-size: 14px;
    /* margin-left: 17px; */
    /* text-align: center; */

    @media screen and (max-width:320px) {
        flex-wrap: wrap;
        flex-direction: column;
    }
}

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
    font-weight: 600;
    font-size: 17px;
    display: flex;
    margin-top: -20px;
    align-items: center;
    justify-content: center;
}
`