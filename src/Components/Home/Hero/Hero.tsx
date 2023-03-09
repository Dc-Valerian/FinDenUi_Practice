import React from 'react'
import styled from 'styled-components'
import GlobalButton from '../../Global/GlobalButton'
import img1 from "../../Assets/hero1.png"
import img2 from "../../Assets/hero2.png"
import img3 from "../../Assets/hero3.png"

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
           <Title>
           Online Banking In A <br />
            Way That Is 
            <br />
            <span>
              SuperCharged
            </span>
           </Title>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem molestiae officiis velit nisi! Quis animi dolores ducimus non adipisci temporibus pariatur voluptatibus cum repellendus est.
            </p>

         <Button>
         <GlobalButton name='Start Now' bcc='#644FF6' border='none' />
            <GlobalButton name='Learn More' bcc="blue" border='1px solid white'/>    
         </Button>      
          </First>
          <Second>
            <One src={img1}/>
            <Two/>
            <Three/>
          </Second>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Hero

const Button = styled.div`
display: flex;
`

const Three = styled.img``

const Two = styled.img``

const One = styled.img``

const Second = styled.div``

const Title = styled.div`
font-size: 40px;
line-height: 60px;
color: white;
font-weight: bold;

span{
  color: #644FF6;
  font-weight: bold;
}
`

const First = styled.div`
display: flex;
flex-direction: column;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 90%;
background-color: yellowgreen;
margin-top: 10px;
`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #030614;
height: 100vh;
/* margin-top: -50px; */
`