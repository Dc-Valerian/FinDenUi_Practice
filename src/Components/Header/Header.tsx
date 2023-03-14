import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from "../Assets/water3-rmbg.png"
import GlobalButton from '../Global/GlobalButton'
import { BiMenuAltRight } from "react-icons/bi";


const Header = () => {
  const [media, setmedia] = React.useState<boolean>(false);
  const [landingsearch, setlandsearch] = React.useState<boolean>(false);



  const hb = () => {
    setmedia(!media);
  };

  const remove = () => {
    setmedia(false);
    setlandsearch(false);
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo src={logo}/>

          <NavWrapper>
            <Nav to="">Home</Nav>
            <Nav to="">About</Nav>
            <Nav to="">Solutions</Nav>
            <Nav to="">Page</Nav>
            <Nav to="">Contact</Nav>
          </NavWrapper>

          <Buttonwrapper>
          <GlobalButton name='Get Started' bcc="#644FF6" border='none' cl='white'/>         
          <GlobalButton name='Sign Up' bcc="transparent" border='1px solid white' cl='white'/>   
           </Buttonwrapper>
        </Wrapper>
        {media ? (
            <Span onClick={remove}>X</Span>
          ) : (
            <Menu onClick={hb}>
              <BiMenuAltRight/>
            </Menu>
          )}
        {media ? (
        <Handbuggermenu>
          <Div>
            <span>Home</span>
            
          </Div>
          <Div>
            <span>About</span>
          </Div>
          <Div>
            <span>Solutions</span>
         
          </Div>
          <Div>
            <span>Page</span>
          </Div>
          <Div>
            <span>Contact</span>
          </Div>
          
        </Handbuggermenu>
      ) : null}
      </Container>
    </div>
  )
}

export default Header
const Menu = styled.div`
  display: none;
  color: white;
  padding: 6px;
  /* background-color: white; */
  font-size:30px;
  justify-content: center;
  /* color: rgb(0, 0, 0, 0.5); */
  align-items: center;
  cursor: pointer;
  
  @media screen and (max-width: 500px) {
    display: flex;
    font-size: 18px;
    margin-left: 0;
    margin-right: 10px;
    color: white;
    font-size: 40px;

  }

`

const Span = styled.div`
  color:white;
  font-weight: 500;
  font-size: 17px;
  color: white;
  /* background-color: white; */
  display: none;
  @media screen and (max-width: 500px) {
    display: flex;
    font-size: 40px;
  }
  margin-right: 10px;
  padding: 6px;
  cursor: pointer;
`

const Button4 = styled.div`
  @media screen and (min-width: 300px) and (max-width: 500px) {
    border-radius: 4px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 29px;
    width: 48%;
  }

  @media screen and (max-width: 768px) {
    border-radius: 4px;
    border-radius: 4px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 29px;
    width: 48%;
  }
`



const Div = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-bottom: 10px;
  span {
    margin-left: 15px;
    font-weight: 500;
    color: white;
    :hover{
    border-bottom: 1px solid #2A1854;
    color: #2A1854;
}
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    color: white;
  }
`

const Handbuggermenu = styled.div`
  position: absolute;
  padding-top: 20px;
  top: 53px;
  width: 100%;
  background-color: #030614;
  display: none;
  z-index: 9;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    display: block;
    height: 500px;
    margin-top: 30px;
  }
  @media screen and (max-width: 768px) {
    display: block;
    height: 100vh;
    margin-top: 30px;
  }
`

const Buttonwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Nav = styled(NavLink)`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
  color: white;
  cursor: pointer;
  :hover{
    border-bottom: 1px solid #2A1854;
    color: #2A1854;
}
@media screen and (max-width: 768px) {
  /* display: none; */
}
`

const NavWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
@media screen and (max-width: 768px) {
    display: flex;
  }
@media screen and (max-width: 500px) {
    display: none;
  }
`

const Logo = styled.img`
width:100px;
object-fit: cover;
`


const Wrapper = styled.div`
display: flex;
align-items: center;
width: 90%;
height: 100%;
justify-content: space-between;
/* background-color: red; */
position: relative;
`

const Container = styled.div`
width: 100%;
position: fixed;
padding-top: 5px;
z-index: 999999;
top: 0;
height: 53px;
background-color:#030614;
box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
display: flex;
justify-content: center;
align-items: center;
`