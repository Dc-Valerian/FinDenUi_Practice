// import React from 'react'
import styled from 'styled-components'
import GlobalButton from "../Global/GlobalButton"

import bg from "../../Components/Assets/line3.png"
import {CgProfile} from "react-icons/cg"
// import img from "../../Assets/robot-hand.png"
// import img1 from "../../Assets/water3-rmbg.png"
import pic from "../../Components/Assets/hero1.png"

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
           <Title>
           Natural Mineral Water<br />
           Source Of Life
            
           </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem eligendi soluta ad officiis dignissimos repellendus beatae aliquid facilis praesentium?
            </Text>

         <Button>
         <GlobalButton name='Start Now' bcc='#644FF6' border='none' cl='white' />
            <GlobalButton name='Learn More' bcc="transparent" border='1px solid white' cl='white'/>    
         </Button>      
    
          </First>
          <Second>
            <Pic src={pic} />
            {/* <Img1 src={img1}/> */}
            {/* <Imag> */}
            {/* <Img src={img} /> */}
            {/* </Imag> */}
          </Second>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Hero
const Pic = styled.img`
height: 600px;
width: 600px;
object-fit: cover;

@media screen and (max-width: 500px) {
  height: 350px;
  width: 290px;
  object-fit: contain;
  margin-top: 20px;
  margin-bottom: 200px;
}
@media screen and (max-width: 768px) {
  /* height: 700px; */
  /* width: 700px; */
  /* object-fit: contain; */
  margin-top: 200px;
  /* margin-bottom: 200px; */
  /* display: none; */
}
`

const Imag = styled.div`
  background-color: red;
  height:400px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position:absolute;

`
const Img = styled.img`
/* background-color: blue; */
height: 800px;
width: 800px;
object-fit: contain;
margin-top: 50%;
bottom: -150px;
left: -300px;
position: absolute;

@media screen and (max-width: 500px) {
  left: -300px;
  bottom: 0;
  height: 550px;
  width: 550px;
    display: flex;
  justify-content: center;
  align-items: center;
}
`

const Img1 = styled.img`
/* background-color: red; */
height: 50%;
width: 50%;
z-index: 9999;
object-fit: cover;
left: -60px;
bottom: 100px;
position: relative;

@media screen and (max-width: 500px) {
  left: -30px;
  bottom: 120px;
    display: flex;
  justify-content: center;
  align-items: center;
}
`

const Second = styled.div`
height: 500px;
width: 90%;
/* background-color: aliceblue; */
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
/* align-items: center; */
justify-content: center;

@media screen and (max-width: 500px) {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 768px) {
  display: flex;
  justify-content: center;
  align-items: center;
}

`

const Line = styled.div`
span{
  color: #644FF6;
  font-size: 17px;
}
p{
  font-size: 14px;

}
`

const Button = styled.div`
display: flex;
margin-top: 10px;

@media screen and (max-width: 500px) {
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%;
  background-color: red; */
}
@media screen and (max-width: 768px) {
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%;
  background-color: red; */
}
`
const Icon = styled.div`
margin-top: 15px;
font-size:30px;
color: white;
margin: 0;

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

h5{
  margin: 10px;
  color: white;
  font-size: 15px;
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



const Title = styled.div`
font-size: 2.0em;
line-height: 50px;
color: white;
font-style: italic;
font-weight:900;

@media screen and (max-width: 500px) {
  font-size: 200%;
  line-height: 40px;
  font-weight: 800;
  margin-top: 30px;
}
@media screen and (max-width: 768px) {
  font-size: 180%;
  line-height: 45px;
  font-weight:900;
  margin-top: 80px;
}

span{
  color: #723EE0;
  line-height: 60px;
  font-weight: bold;
}
p{
  color: white;

 
}
`
const Text = styled.div`
color: white;
line-height: 30px;
@media screen and (max-width: 500px) {
    font-size: 12px;
  }
`

const First = styled.div`
display: flex;
flex-direction: column;
 /* display: flex; */
justify-content: center;
/* align-items: center;  */



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
/* margin-top: -15%; */
margin: 0;

@media screen and (max-width: 500px) {
  flex-direction: column;

  
}
@media screen and (max-width: 768px) {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #030614;
/* padding-top: 100px; */
background-image: url(${bg});
margin: 0;
height: fit-content;
padding-bottom: 50px;
padding-top: 80px;
/* margin-top: 50px; */
@media screen and (max-width: 500px) {
padding-top: 100px;
  
}
@media screen and (max-width: 768px) {
/* padding-top: 100px; */
width: 100%;
  
}
/* @media screen and (max-width: 1024) {
padding-top: 100px;
  
} */

`