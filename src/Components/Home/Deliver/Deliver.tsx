import React from 'react'
import styled from 'styled-components'
import pic from "../../Assets/nice3rm.png"
import line from "../../Assets/line.png"
import GlobalButton from '../../Global/GlobalButton'


const Deliver = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                    <Img src={pic}/>
                </First>
                <Second>
                    <Title>
                    We Deliver The <br /> Quality Water
                    <Line>
                        <Img src={line}/>
                    </Line>
                    </Title>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Magni excepturi dolorum  voluptatem optio voluptate dolor laudantium nesciunt  quam aliquam, numquam quas, veritatis autem beatae sed sint ab debitis. Quae, modi.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Magni excepturi dolorum  voluptatem optio voluptate dolor laudantium nesciunt  quam aliquam, numquam quas, veritatis autem beatae sed sint ab debitis. Quae, modi.
                    </p>
              <GlobalButton name='Get Started' bcc="#644FF6" border='none' cl='white'/>         
                    
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Deliver
const Img = styled.img``

const Title = styled.div`
font-size: 60px;
font-weight:600;
margin-top: 5px;
`

const Line = styled.div`
display: flex;
/* align-items: center; */
margin: 5px;
/* justify-content: center; */
`

const Second = styled.div`
margin: 30px;
`

const First = styled.div``

const Wrapper = styled.div`
width: 80%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 40px;
margin-bottom: 30px;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #030614;
color: white;
margin-top: 50px;
width: 100%;
`