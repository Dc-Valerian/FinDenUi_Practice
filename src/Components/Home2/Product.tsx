import React from 'react'
import styled from 'styled-components'
import bg from "../../Components/Assets/line.png"


const Product = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                    <Title>Our Products</Title>
                    <p>
                        We All Need a Couple of Fresh 
                        Gallons a Day
                    </p>
                    <Line>
                        <Img src={bg}/>
                    </Line>
                </First>
                <Second>
                    
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Product

const Img = styled.img``

const Line = styled.div`
margin: 0;
`

const Second = styled.div``


const Title = styled.div`
font-size: 40px;
font-weight: 600;
margin: 0;

p{
    display: flex;
    align-items: center;
    text-align: center;
}
`


const First = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 0 ;
`

const Wrapper = styled.div``

const Container = styled.div`
background-color: aliceblue;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 30px;
`
