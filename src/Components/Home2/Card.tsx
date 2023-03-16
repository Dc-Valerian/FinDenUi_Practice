import React from 'react'
import styled from 'styled-components'
import CardProps from '../Global/CardProps'
import img from "../../Components/Assets/water2.webp"

const Card = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <CardProps image={img} span='Tastes Fresh' p='The purity of our water ensures a crisp, fresh taste'/>
                {/* <CardProps image={img} span='Tastes Fresh' p='The purity of our water ensures a crisp, fresh taste'/>
                <CardProps image={img} span='Tastes Fresh' p='The purity of our water ensures a crisp, fresh taste'/> */}
            </Wrapper>
        </Container>
    </div>
  )
}

export default Card



const Wrapper = styled.div`
width: 90%;
margin-left: 18px;
flex-wrap: wrap;
display: flex;
/* justify-content: center; */
align-items: center;
justify-content: space-evenly;

@media screen and (max-width:768px) {
    flex-wrap: wrap;
}
@media screen and (max-width:320px) and (max-width: 500px) {
    display: grid;
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
}

`

const Container = styled.div`
width: 100%;
height: 300px;
/* background-color: yellowgreen; */
margin-bottom: 30px;
display: flex;
align-items: center;
justify-content: space-between;
`