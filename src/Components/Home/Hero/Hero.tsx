import React from 'react'
import styled from 'styled-components'
import GlobalButton from '../../Global/GlobalButton'
import img1 from "../../Assets/hero1.png"
import img2 from "../../Assets/hero2.png"
import img3 from "../../Assets/hero3.png"
import bg from "../../Assets/line3.png"
import {CgProfile} from "react-icons/cg"

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
              Lorem ipsum dolor, animi dolores ducimus non adipisci temporibus pariatur voluptatibus cum repellendus est.
            </p>

         <Button>
         <GlobalButton name='Start Now' bcc='#644FF6' border='none' />
            <GlobalButton name='Learn More' bcc="transparent" border='1px solid white'/>    
         </Button>      
          </First>
          <Second>
            <One src={img1}/>
            <Two src={img2}/>
            <Three src={img3}/>
            <Four>
              <Icon>
                <CgProfile/>
              </Icon>
            <h5>
            + 45 M
            </h5>
              <p>Users Globally</p>
            </Four>
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
const Icon = styled.div`
margin-top: 10px;
font-size: 30px;
color: white;

`
const Four = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: #644FF6;
height: 120px;
width:130px;
position: absolute;
z-index: 6;
margin: 0;
left: 30px;
bottom: 400px;
border-radius: 10px;
p{
  margin: 0;
  color: white;
}

h5  {
  margin: 10px;
  color: white;
}
`

const Three = styled.img`
position: absolute;
z-index: 5;
top: 180px;
right: 30px;
width: 30%;
`

const Two = styled.img`
/* width: 40%; */
/* height: 40%; */
/* object-fit: cover; */
z-index: 3;
position: absolute;
/* left: 0px; */
top:280px;
left: 200px;
`

const One = styled.img`
position: absolute;
width: 90%;
height: 40%;
object-fit: cover;
z-index: 1;
border-radius: 20px;
`

const Second = styled.div`
height: 800px;
width: 90%;
/* background-color: red; */
position: relative;
display: flex;
/* align-items: center; */
justify-content: center;

`

const Title = styled.div`
font-size: 3.1em;
line-height: 60px;
color: white;
font-weight: 610;

span{
  color: #723EE0;
  font-weight: bold;
}
p{
  color: white;
}
`

const First = styled.div`
display: flex;
flex-direction: column;

p{
  color: white;
}
`

const Wrapper = styled.div`
display: flex;
/* align-items: center; */
justify-content: space-between;
width: 90%;
/* background-color: yellowgreen; */
margin-top: -15%;
`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #030614;
background-image: url(${bg});
height: 200vh;
/* margin-top: 50px; */
`