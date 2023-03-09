import React from 'react'
import styled from 'styled-components'
import logo from "../Assets/logo1.png"
// import logo from "../Assets/darklogo.png"
import GlobalButton from '../Global/GlobalButton'

const Header = () => {
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
              <GlobalButton name='Get Started' bcc="#644FF6" border='none'/>         
                <GlobalButton name='Sign Up' bcc="transparent" border='1px solid white'/>          
              </Button> 
            </Wrapper>
        </Container>
    </div>
  )
}

export default Header
const Button = styled.div`
display: flex;
`

const Icon = styled.div``

const NavHold = styled.div`
display: flex;
align-items: center;
justify-content: center;

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
/* background-color: aliceblue; */
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
width: 80%;
height: 100%;
/* background-color: green; */
align-items: center;
justify-content: space-between;

`

const Container = styled.div`
display: flex;
background-color: #030614;
width: 100%;
height: 70px;
align-items: center;
justify-content: center;
`