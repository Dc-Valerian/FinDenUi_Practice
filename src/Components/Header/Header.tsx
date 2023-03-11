import React from 'react'
import styled from 'styled-components'
import logo from "../Assets/logo1.png"
// import logo from "../Assets/darklogo.png"
import GlobalButton from "../Global/GlobalButton"
import {FiDelete} from "react-icons/fi"
import {GiHamburgerMenu} from "react-icons/gi"


const Header = () => {
  const [toggle,setToggle] = React.useState(false)

  const showNav = ()=>{
    setToggle(!toggle)
  }
  const removeNav =()=>{
    setToggle(false)  
  }
  return (
    <div>
        <Container>
            <Wrapper>
                <Img>
                <Logo src={logo}/>
                </Img>

                <NavHold>
                    <nav>Home</nav>    
                    <nav>About</nav>    
                    <nav>Solution
                    <Icon></Icon>    
                    </nav>    
                    <nav>Pages
                   <Icon></Icon>
                   </nav>
                   <nav>Contact</nav>    
                </NavHold>       

              <Button>
              <GlobalButton name='Get Started' bcc="#644FF6" border='none' cl='white'/>         
                <GlobalButton name='Sign Up' bcc="transparent" border='1px solid white' cl='white'/>          
              </Button> 

              {
                toggle? <HamBurgerMenu onClick={removeNav}>
                  <FiDelete/>
                </HamBurgerMenu>:
                <HamBurgerMenu onClick={showNav}>
                  <GiHamburgerMenu/>
                </HamBurgerMenu>
              }

              {
                toggle?
                <NavSide>
                  <Wrap>
                   <NavHold>
                   <nav>
                      Home
                    </nav>
                    <nav>
                      Home
                    </nav>
                    <nav>
                      Home
                    </nav>
                    <nav>
                      Home
                    </nav>
                   </NavHold>
                  </Wrap>
                </NavSide>:null
              }
            </Wrapper>
        </Container>
    </div>
  )
}

export default Header
const NavSide = styled.div`
width: 100%;
height: 80vh;
position: absolute;
top: 70px;

@media screen and (max-width:500px) {
  display: block;
}
`

const Wrap = styled.div`
background-color:#030614;
backdrop-filter: blur(2px);
width: 400px;
height: 80vh;
color: white;
font-size: 15px;
padding-top: 15px;
border-radius: 0px 0px 5px 0px;


`

const HamBurgerMenu = styled.div`
font-size: 30px;
display: none;
color: red;
cursor: pointer;
margin-left:50px;

@media screen and (max-width:500px) { 
  display: flex;
}
`

const Button = styled.div`
display: flex;

@media screen and (max-width:500px) {
  display: none;
}
`

const Icon = styled.div``

const NavHold = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: white;

@media screen and (max-width: 500px) {
      margin-bottom: 20px;
      border-top: 1px solid white;
      padding-left: 15px;
      align-items: center;
      display: none;
      /* background-color: red; */
    }

nav{
  margin: 10px;
  color: white;
  cursor: pointer;
  :hover{
    border-bottom: 1px solid #2A1854;
    color: #2A1854;

 
  }
}
`

const Img = styled.div`
width: 300px;
display: flex;
justify-content: center;
align-items: center;



`

const Logo = styled.img`
width:75%;
height: 60%;
object-fit: cover;

`

const Wrapper = styled.div`
display: flex;
width: 95%;
height: 100%;
/* background-color: green; */
align-items: center;
justify-content: space-between;
margin-top: 10px;

`

const Container = styled.div`
display: flex;
background-color: #030614;
width: 100%;
height: 80px;
align-items: center;
justify-content: center;
margin-bottom: 100px;
position: fixed;
top: 0; 
z-index:999;
/* @media screen and (max-width:500px) {
  display: block;
} */
`